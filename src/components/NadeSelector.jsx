/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { nades } from "/public/data/nades";
import "./NadeSelector.css";

export const NadeSelector = ({ map }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedNade, setSelectedNade] = useState(null);
  const [existMaps, setExistMaps] = useState(true); // Estado para armazenar se há nades disponíveis

  const handleNadeSelection = (nade) => {
    setSelectedNade(nade);
  };

  const nadesByMap = nades.filter((item) => {
    if (item.map === map) {
      return item;
    }
  });

  const filteredNades =
    selectedType != null && selectedType != "Todas"
      ? nadesByMap.filter((nade) => nade.type === selectedType.toLowerCase())
      : nadesByMap; // Se nada for selecionado, mostra tudo

  useEffect(() => {
    setExistMaps(filteredNades.length > 0); // Atualiza existMaps quando filteredNades mudar
  }, [filteredNades]);

  // Cria o elemento apenas se map estiver definido
  return map ? (
    <section
      id="nade-selector"
      className="container px-4"
      style={{ marginTop: "3rem" }}
    >
      {/* Exibição das nades filtrados */}
      <div className="container">
        <div className="row">
          {/* Coluna das opções de nade */}
          <div className="col">
            <Dropdown
              onSelect={(eventKey) => setSelectedType(eventKey)}
              className="mb-3 selector-nades"
              data-bs-theme="dark"
            >
              <Dropdown.Toggle id="dropdown-basic" className="selector-nades">
                {selectedType ? selectedType : "Escolha um tipo"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Smokes">Smokes</Dropdown.Item>
                <Dropdown.Item eventKey="Molotovs">Molotovs</Dropdown.Item>
                <Dropdown.Item eventKey="Bangs">Bangs</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="Todas">Todas</Dropdown.Item>
                <Dropdown.Item eventKey="Retakes">Retakes</Dropdown.Item>
                <Dropdown.Item eventKey="Ensaiada">Ensaiada</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {filteredNades.length > 0 ? (
              filteredNades.map((nade, index) => (
                <div key={index} className="mb-2">
                  <a
                    className="nade-local"
                    onClick={() => handleNadeSelection(nade)}
                  >
                    {nade.local}
                  </a>
                </div>
              ))
            ) : (
              <p>Nenhuma jogada encontrada para esta categoria.</p>
            )}
          </div>

          {
            /* Coluna das imagens */
            /* improv: por que selectedNade?.image1 não se atualiza ao mudar de mapa? isso resolveria o problema de exigir "existMaps" */
            selectedNade?.image1 && selectedNade?.image2 && existMaps && (
              <div className="col-8 nades-images-container">
                <div className="single-nade-image-container">
                  <img
                    src={selectedNade.image1}
                    alt="Pixel da granada"
                    className="nade-image"
                  ></img>
                </div>
                <div className="single-nade-image-container">
                  <img
                    src={selectedNade.image2}
                    alt="Pixel da granada"
                    className="nade-image"
                  ></img>
                </div>
              </div>
            )
          }
        </div>
        <p className="throw-type">{(selectedNade?.throw && existMaps) ? selectedNade.throw : ""}</p>
      </div>

      <div className="mt-4"></div>
    </section>
  ) : null;
};
