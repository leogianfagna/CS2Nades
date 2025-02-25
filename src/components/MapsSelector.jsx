/* eslint-disable react/prop-types */
import "./MapsSelector.css";
import { useState } from "react";

export const MapsSelector = ({ handleMapSelector }) => {
  const [activeMap, setActiveMap] = useState(null);
  const handleActiveMap = (map) => {
    setActiveMap(map);
  };

  const estilosSelecao = (index) => {
    if (activeMap === null || activeMap === index) {
      return "";
    } else {
      return "maps-selector-gray";
    }
  };

  const maps = [
    "Mirage",
    "Inferno",
    "Ancient",
    "Anubis",
    "Dust2",
    "Nuke",
    "Train",
  ];

  return (
    <section className="container" id="map-section">
      <div className="text-center mb-2">
        <h2 className="news-title mb-0">Escolha o mapa</h2>
        <p className="news-description">Qual mapa estamos jogando?</p>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          {
            /* Repetir para cada mapa */
            maps.map((item, index) => (
              <div className="col" key={index}>
                <div className="p-3">
                  <a href="#team-section">
                    <img
                      src={"maps/" + item + ".png"}
                      className={`maps-selector ${estilosSelecao(index)}`}
                      onClick={() => {
                        handleMapSelector(item.toLowerCase());
                        handleActiveMap(index);
                      }}
                    ></img>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
