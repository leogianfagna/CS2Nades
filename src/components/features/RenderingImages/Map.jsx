import "./Map.css";
import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import { getFilteredNades } from "/src/utils/filters.js";


const MapCs = () => {
  const { map, team, nadeType } = useContext(FilterContext);
  const filters = { map: "mirage", team, type: "smokes" }; //to-do: esse filter tem que vir pronto do filterContext
  const filteredNades = getFilteredNades(filters);

  return (map, team, nadeType) ? (
    <div className="container">
      <div className="map">
        <img src={"public/images/blue_prints/" + map + ".svg"}></img>
        {filteredNades.map((nade, index) => (
          <h1>{nade.local}</h1> 
        ))}
        <button className="icon">X</button>
      </div>
    </div>
  ) : null;
};

export default MapCs;
