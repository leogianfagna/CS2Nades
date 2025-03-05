import { useEffect, useState, useContext } from "react";
import { nades } from "/public/data/nades";
import { FilterContext } from "../context/FilterContext";
import "./NadeSelector.css";

export const NadeSelector = () => {
  const { map } = useContext(FilterContext);
  const { team } = useContext(FilterContext);
  const { nade, setNade } = useContext(FilterContext);
  const { nadeType, setNadeType } = useContext(FilterContext);
  const [isNadeAvaiable, setNadeStatus] = useState(true);

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
    nadeType != null && nadeType != "Todas"
      ? sortedNades.filter((nade) => nade.type === nadeType.toLowerCase())
      : sortedNades; // Se nada for selecionado, mostra tudo

  const renderRightImage = () => {
    if (nadeType === "Solo") {
      const images = nade.steps;
      return (
        <>
          {images.map((image, i) => (
            <>
              <img
                key={i}
                src={image.pixel}
                alt="Pixel da granada"
                className="nade-image right image-zoom"
                style={{ height: `${100 / images.length}%` }}
              ></img>
              {/* FIX: Label de tipo de jogada para cada imagem
              <div className="overlay-text">
                {image.throw}
              </div>
              */}
            </>
          ))}
        </>
      );
    } else {
      return (
        <>
          <img
            src={nade.image2}
            alt="Pixel da granada"
            className="nade-image right"
          ></img>
          <div className="overlay-text">
            {nade?.throw && isNadeAvaiable ? nade.throw : ""}
          </div>
        </>
      );
    }
  };

  const renderLeftImage = () => {
    return (
      <img
        src={nade.spot_image}
        alt="Pixel da granada"
        className="nade-image left"
      ></img>
    );
  };

  // useEffect executa a função quando o parâmetro definido [nas chaves] é alterado
  useEffect(() => {
    setNadeStatus(filteredNades.length > 0);
  }, [filteredNades]);

  // Voltar nade para null quando muda a opção
  useEffect(() => {
    setNade(null);
  }, [nadeType]);

  useEffect(() => {
    setNade(null);
  }, [map]);

  // Cria o elemento apenas se map estiver definido
  return team ? (
    <section className="container" id="nade-section">
      {/* Exibição das nades filtrados */}
      <div className="container">
        <div className="text-center" style={{ marginBottom: "1rem" }}>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Smokes" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Smokes");
                }}
              >
                💨 Smokes
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Molotovs" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Molotovs");
                }}
              >
                🔥 Molotovs
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Bangs" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Bangs");
                }}
              >
                💥 Bangs
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Granadas" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Granadas");
                }}
              >
                💣 Granadas
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Retakes" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Retakes");
                }}
              >
                🤯 Retakes
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Solo" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Solo");
                }}
              >
                🦸 Solo
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Ensaiadas" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Ensaiadas");
                }}
              >
                🤼‍♀️ Ensaiadas
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "One way" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("One way");
                }}
              >
                👀 One way
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Combos" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Combos");
                }}
              >
                📍 Combo
              </div>
            </div>
            <div className="col">
              <div
                className={`p-3 type-box ${nadeType === "Fakes" ? "selected" : ""}`}
                onClick={() => {
                  setNadeType("Fakes");
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
            {filteredNades.length > 0 && nadeType ? (
              filteredNades.map((nade, index) => (
                <div
                  key={index}
                  className="mb-2 nade-local"
                  onClick={() => setNade(nade)}
                >
                  <p>{nade.local}</p>
                  <span>{nade.side}</span>
                </div>
              ))
            ) : nadeType ? (
              <p>Nenhuma jogada encontrada para esta categoria.</p>
            ) : (
              <p>Selecione um tipo.</p>
            )}
          </div>

          {
            /* Coluna das imagens */
            nade && (
              <div className="col-8 nades-images-container">
                <div className="single-nade-image-container">
                  {renderLeftImage()}
                </div>
                <div className="single-nade-image-container">
                  {renderRightImage()}
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
