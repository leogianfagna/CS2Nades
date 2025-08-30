import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [nadeType, setNadeType] = useState(null);
  const [nade, setNade] = useState(null);
  const [team, setTeam] = useState(null);
  const [entryMode, setEntryMode] = useState(null);
  const [step, setStep] = useState(null);
  const [filter, setFilter] = useState({});

  // Exportar handlers
  const handleMap = (mapSelected) => {
    setFilter((prev) => ({
      ...prev,
      map: mapSelected,
    }));
  };

  const handleTeam = (teamSelected) => {
    setFilter((prev) => ({
      ...prev,
      team: teamSelected,
    }));
  };

  const handleType = (typeSelected) => {
    setFilter((prev) => ({
      ...prev,
      type: typeSelected,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        map,
        setMap,
        nadeType,
        setNadeType,
        nade,
        setNade,
        team,
        setTeam,
        entryMode,
        setEntryMode,
        step,
        setStep,
        filter,
        setFilter,
        handleMap,
        handleTeam,
        handleType
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
