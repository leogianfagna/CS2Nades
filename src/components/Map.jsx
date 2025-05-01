import "./Map.css";
import { useContext, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";

const MapCs = () => {
  const { map, team, nadeType } = useContext(FilterContext);
  return (map, team, nadeType) ? (
    <div className="container">
      <div className="map">
        <img src={"public/images/blue_prints/" + map + ".svg"}></img>
        <button className="icon">X</button>
      </div>
    </div>
  ) : null;
};

export default MapCs;
