/* eslint-disable react/prop-types */
import "./MapsSelector.css";
import { useState } from "react";

export const MapsSelector = ({ handleMapSelector }) => {
  const [activeMap, setActiveMap] = useState(null);
  const handleActiveMap = (map) => {
    setActiveMap(map);
  }

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
    <section className="container px-4" style={{ marginTop: "3rem" }}>
      <div className="text-center mb-5">
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
                  <img
                    src={"maps/" + item + ".png"}
                    className={`maps-selector ${activeMap === index ? "active" : ""}`}
                    onClick={() => {
                      handleMapSelector(item.toLowerCase());
                      handleActiveMap(index);
                      setTimeout(function() {
                        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                      }, 10)
                    }}
                  ></img>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
