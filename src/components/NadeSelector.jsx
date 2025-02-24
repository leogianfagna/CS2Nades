/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { nades } from "/public/data/nades";
import "./NadeSelector.css";

export const NadeSelector = ({ map, team }) => {
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

  const nadesByTeam = nadesByMap.filter((item) => {
    if (item.team === team) {
      return item;
    }
  });

  const filteredNades =
    selectedType != null && selectedType != "Todas"
      ? nadesByTeam.filter((nade) => nade.type === selectedType.toLowerCase())
      : nadesByTeam; // Se nada for selecionado, mostra tudo

  useEffect(() => {
    setExistMaps(filteredNades.length > 0); // Atualiza existMaps quando filteredNades mudar
  }, [filteredNades]);

  // Cria o elemento apenas se map estiver definido
  return team ? (
    <section id="nade-selector" className="container">
      {/* Exibição das nades filtrados */}
      <div className="container">
        <div className="text-center" style={{ marginBottom: "1rem" }}>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Smokes");
                }}
              >
                💨 Smokes
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Molotovs");
                }}
              >
                🔥 Molotovs
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Bangs");
                }}
              >
                💥 Bangs
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Granadas");
                }}
              >
                💣 Granadas
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Retakes");
                }}
              >
                🤯 Retakes
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Solo");
                }}
              >
                🦸 Solo
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Ensaiadas");
                }}
              >
                🤼‍♀️ Ensaiadas
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("One way");
                }}
              >
                👀 One way
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Combos");
                }}
              >
                📍 Combo
              </div>
            </div>
            <div className="col">
              <div
                className="p-3 type-box"
                onClick={() => {
                  setSelectedType("Fakes");
                }}
              >
                🃏 Fakes
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Coluna das opções de nade */}
          <div className="col">
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
                    className="nade-image right"
                  ></img>
                </div>
                <div className="single-nade-image-container">
                  <img
                    src={selectedNade.image2}
                    alt="Pixel da granada"
                    className="nade-image left"
                  ></img>
                </div>
              </div>
            )
          }
        </div>
        <p className="throw-type">
          {selectedNade?.throw && existMaps ? selectedNade.throw : ""}
        </p>
      </div>

      <div className="mt-4"></div>
    </section>
  ) : null;
};
