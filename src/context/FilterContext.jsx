/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [nadeType, setNadeType] = useState(null);
  const [nade, setNade] = useState(null);
  const [team, setTeam] = useState(null);
  const [entryMode, setEntryMode] = useState(null);
  const [step, setStep] = useState(null);

  return (
    <FilterContext.Provider
      value={{ map, setMap, nadeType, setNadeType, nade, setNade, team, setTeam, entryMode, setEntryMode, step, setStep }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
