import { useEffect, useState, useContext } from "react";
import { nades } from "/public/data/nades";
import { FilterContext } from "../context/FilterContext";
import "./NadeSelector.css";
import EntrySteps from "./EntrySteps";

export const NadeSelector = () => {
  const { map } = useContext(FilterContext);
  const { team } = useContext(FilterContext);
  const { nade, setNade } = useContext(FilterContext);
  const { nadeType, setNadeType } = useContext(FilterContext);
  const { step, setStep } = useContext(FilterContext);
  const [isNadeAvaiable, setNadeStatus] = useState(true);

  function getNadeCount(type) {
    const countByMap = nades
      .filter((item) => item.map === map)
      .filter((item) => item.type === type)
      .filter((item) => item.team === team);
    return countByMap.length;
  }

  const filteredNades = nades
    .filter((item) => item.map === map && item.team === team)
    .sort((a, b) => {
      const order = { A: 1, B: 2, MEIO: 3 };
      return order[a.side] - order[b.side];
    })
    .filter(
      (nade) =>
        nadeType == null ||
        nadeType === "Todas" ||
        nade.type === nadeType.toLowerCase()
    );

  const renderRightImage = () => {
    if (nadeType === "Entry") {
      // To-do: Selecionar o passo 1 automaticamente
      if (!step) {
        return;
      }
      const nadeObject = nades.find(nade => nade.id === step);
      console.log(nadeObject);
      return (
        <>
          <img
            src={nadeObject.image2}
            alt="Pixel da granada"
            className="nade-image right"
          ></img>
          <div className="overlay-text">
            {nadeObject?.throw && isNadeAvaiable ? nadeObject.throw : ""}
          </div>
        </>
      );
    }

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
    if (nadeType === "Entry") {
      // To-do: Selecionar o passo 1 automaticamente
      if (!step) {
        return;
      }
      const nadeObject = nades.find(nade => nade.id === step);
      return (
        <>
          <img
            src={nadeObject.spot_image}
            alt="Pixel da granada"
            className="nade-image left"
          ></img>
          <div className="overlay-text">
            {nadeObject?.throw && isNadeAvaiable ? nadeObject.throw : ""}
          </div>
        </>
      );
    }
    
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
      <div className="container text-center" style={{ marginBottom: "1rem" }}>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Smokes" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Smokes");
              }}
            >
              <p>💨 Smokes</p>
              <span>{getNadeCount("smokes")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Molotovs" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Molotovs");
              }}
            >
              <p>🔥 Molotovs</p>
              <span>{getNadeCount("molotovs")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Bangs" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Bangs");
              }}
            >
              <p>💥 Bangs</p>
              <span>{getNadeCount("bangs")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Granadas" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Granadas");
              }}
            >
              <p>💣 Granadas</p>
              <span>{getNadeCount("granadas")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Retakes" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Retakes");
              }}
            >
              <p>🤯 Retakes</p>
              <span>{getNadeCount("retakes")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Solo" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Solo");
              }}
            >
              <p>🦸 Solo</p>
              <span>{getNadeCount("solo")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Ensaiadas" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Ensaiadas");
              }}
            >
              <p>🤼‍♀️ Ensaiadas</p>
              <span>{getNadeCount("ensaiadas")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "One way" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("One way");
              }}
            >
              <p>👀 One way</p>
              <span>{getNadeCount("one way")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Entry" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Entry");
              }}
            >
              <p>📍 Entry</p>
              <span>{getNadeCount("entry")}</span>
            </div>
          </div>
          <div className="col">
            <div
              className={`p-3 type-box ${
                nadeType === "Fakes" ? "selected" : ""
              }`}
              onClick={() => {
                setNadeType("Fakes");
              }}
            >
              <p>🃏 Fakes</p>
              <span>{getNadeCount("fakes")}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="row container">
        

        {/* Coluna das opções de nade */}
        <div className="col-4">
          {filteredNades.length > 0 && nadeType ? (
            filteredNades.map((nade, index) => (
              <div
                key={index}
                className="mb-2 nade-local"
                onClick={() => setNade(nade)}
              >
                {console.log(nade)}
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
            <div className="col-8 nades-images-container test-border">
              <div className="single-nade-image-container">
                {renderLeftImage()}
              </div>
              <div className="single-nade-image-container">
                {renderRightImage()}
              </div>
            </div>
          )
        }
      </section>
      <section className="row container">
        <div className="col-4"></div>
        <div className="col-8"><EntrySteps /></div>
      </section>

      <div className="mt-4"></div>
    </section>
  ) : null;
};
