import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import { types } from "/src/constants/types.js";

const NadeTypeSelector = () => {
  const { filter, handleType } = useContext(FilterContext);
  return !filter.type && filter.map ? (
    <div>
      {types.map((item, i) => (
        <button onClick={() => handleType(item.id)}>{item.name}</button>
      ))}
    </div>
  ) : null;
};

export default NadeTypeSelector;
