import "./MapsSelector.css";
import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import { maps } from "/src/constants/maps.js";

export const MapsSelector = () => {
  const { filter, handleMap } = useContext(FilterContext);

  const estilosSelecao = (index) => {
    if (filter.map === null || filter.map === index.toLowerCase()) {
      return "";
    } else {
      return "maps-selector-gray";
    }
  };

  return !filter.map ? (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
        {maps.map((map, index) => (
          <div className="col" key={index}>
            <div className="p-3">
              <a href="#team-section">
                <img
                  src={"maps/" + map.name + ".png"}
                  className={`maps-selector ${estilosSelecao(map.name)}`}
                  onClick={() => {
                    handleMap(map.id);
                  }}
                ></img>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
