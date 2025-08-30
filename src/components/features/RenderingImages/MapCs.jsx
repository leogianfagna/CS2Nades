// Componente que mostra o mapa, só é exibido se todos os filtros estão preenchidos, checado no componente pai <Container>

import "./Map.css";
import { useContext, useMemo } from "react";
import { FilterContext } from "/src/context/FilterContext";
import { getFilteredNades } from "/src/utils/filters.js";
import Nade from "../../commons/Nade";

const MapCs = () => {
  const { filter } = useContext(FilterContext);
  const filteredNades = useMemo(() => getFilteredNades(filter), [filter]);

  return (
    <div className="container">
      <div className="map">
        <img src={"public/images/blue_prints/" + filter.map + ".svg"}></img>
        {filteredNades.map((nade, index) => (
          <Nade pos={nade.pos} nade={nade} key={`nade-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MapCs;
