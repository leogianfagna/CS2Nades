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

  const sortedNades = nadesByTeam.sort((a, b) => {
    const order = { A: 1, B: 2, MEIO: 3 };
    return order[a.side] - order[b.side];
  });

  const filteredNades =
    selectedType != null && selectedType != "Todas"
      ? sortedNades.filter((nade) => nade.type === selectedType.toLowerCase())
      : sortedNades; // Se nada for selecionado, mostra tudo

  useEffect(() => {
    setExistMaps(filteredNades.length > 0); // Atualiza existMaps quando filteredNades mudar
  }, [filteredNades]);

  // Cria o elemento apenas se map estiver definido
  return team ? (
    <section className="container" id="nade-section">
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
                <div
                  key={index}
                  className="mb-2 nade-local"
                  onClick={() => handleNadeSelection(nade)}
                >
                  <p>{nade.local}</p>
                  <span>{nade.side}</span>
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
                  <div className="overlay-text">{selectedNade?.throw && existMaps ? selectedNade.throw : ""}</div>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="mt-4"></div>
    </section>
  ) : null;
};
