import "./MapsSelector.css";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const MapsSelector = () => {
  const { map, setMap } = useContext(FilterContext);

  const estilosSelecao = (index) => {
    if (map === null || map === index.toLowerCase()) {
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
    "Dust 2",
    "Nuke",
    "Train",
  ];

  return !map ? (
    <section className="container" id="map-section">
      <div className="text-center mb-2">
        <h2 className="news-title mb-0">Escolha o mapa</h2>
        <p className="news-description">Qual mapa estamos jogando?</p>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          {
            /* Repetir para cada mapa */
            maps.map((mapName, index) => (
              <div className="col" key={index}>
                <div className="p-3">
                  <a href="#team-section">
                    <img
                      src={"maps/" + mapName + ".png"}
                      className={`maps-selector ${estilosSelecao(mapName)}`}
                      onClick={() => {
                        setMap(mapName.toLowerCase());
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
  ) : null;
};
