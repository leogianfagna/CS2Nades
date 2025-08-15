import "./Map.css";
import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import { getFilteredNades } from "/src/utils/filters.js";
import Nade from "../../commons/Nade";

const MapCs = () => {
  const { map, team, nadeType } = useContext(FilterContext);
  const filters = { map, team, type: nadeType }; //to-do: esse filter tem que vir pronto do filterContext
  const filteredNades = getFilteredNades(filters);

  return (map, team, nadeType) ? (
    <div className="container">
      <div className="map">
        <img src={"public/images/blue_prints/" + map + ".svg"}></img>
        {filteredNades.map((nade, index) => (
          <Nade pos={nade.pos} nade={nade} key={`nade-${index}`} />
        ))}
      </div>
    </div>
  ) : null;
};

export default MapCs;
