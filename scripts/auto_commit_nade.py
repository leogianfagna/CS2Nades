import os
import re
from github import Github
import json
import pandas as pd

GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
REPO_NAME = os.getenv('GITHUB_REPOSITORY')
ISSUE_NUMBER = os.getenv('ISSUE_NUMBER')

g = Github(GITHUB_TOKEN)
repo = g.get_repo(REPO_NAME)
issue = repo.get_issue(number=int(ISSUE_NUMBER))
issue_body = issue.body

def extract_issue_info(body):
    info = {}
    # Expressão regular para capturar campos no formato "### Campo: valor"
    pattern = r"###\s*(.*?)\s*\n\s*(.*?)\s*(?=\n###|\n$)"
    matches = re.findall(pattern, body, re.DOTALL)
    for match in matches:
        key = match[0].strip().lower().replace(' ', '_')
        value = match[1].strip()
        info[key] = value
    return info

issue_info = extract_issue_info(issue_body)

# Verifica se todas as informações necessárias estão presentes
# '<nome da variavel>' : '<nome que está no ISSUE_TEMPLATE>'
required_fields = {
    'tipo_de_nade': 'Tipo de nade',
    'mapa': 'Mapa',
    'local': 'Local',
    'lado': 'Lado',
    'tipo_de_arremesso': 'Tipo de arremesso',
    'time': 'Time',
    'imagem_do_spot': 'Imagem do spot',
    'imagem_do_pixel': 'Imagem do pixel',
    'imagem_do_resultado': 'Imagem do resultado'
}

missing_fields = []
for field_key, field_name in required_fields.items():
    if field_key not in issue_info:
        missing_fields.append(field_name)

if missing_fields:
    raise ValueError(f"Campos obrigatórios faltando no issue: {', '.join(missing_fields)}")

# Ler o arquivo e transformar em um dataframe
nades_file = "public/data/nades.json"
with open(nades_file, 'r', encoding='utf-8') as arquivo:
    dados = json.load(arquivo)

df = pd.DataFrame(dados['nades'])
print(df)

# Transformar issue registrado em uma nova entrada
pattern = r"!\[.*?\]\((.*?)\)"

def extract_url(value):
    match = re.search(pattern, value)
    return match.group(1) if match else value

novos_dados = {
    "id": int(df['id'].max()) + 1,
    "type": issue_info['tipo_de_nade'].lower(),
    "map": issue_info['mapa'].lower(),
    "local": issue_info['local'],
    "side": issue_info['lado'],
    "team": issue_info['time'].lower(),
    "throw": issue_info['tipo_de_arremesso'],
    "spot_image": extract_url(issue_info['imagem_do_spot']),
    "pixel_image": extract_url(issue_info['imagem_do_pixel']),
    "result_image": extract_url(issue_info['imagem_do_resultado']),
    "steps": None
}

# Adiciona a nova entrada ao DataFrame usando pd.concat
df = pd.concat([df, pd.DataFrame([novos_dados])], ignore_index=True)

# Converter o DataFrame de volta para o formato JSON original
dados_atualizados = {"nades": df.to_dict(orient='records')}

# Salvar o arquivo JSON atualizado
with open(nades_file, 'w', encoding='utf-8') as arquivo:
    json.dump(dados_atualizados, arquivo, ensure_ascii=False, indent=4)

# Commit do arquivo
with open(nades_file, 'r', encoding='utf-8') as arquivo:
    content = arquivo.read()

repo.update_file(
    path=nades_file,
    message=f"Adicionada nade para {issue_info['mapa']} - {issue_info['local']}",
    content=content,
    sha=repo.get_contents(nades_file).sha,
    branch="main"
)

print(f"Arquivo {nades_file} atualizado e commitado com sucesso!")