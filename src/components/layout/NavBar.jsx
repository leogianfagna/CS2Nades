import "./NavBar.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";
import DropNavOptions from "/src/components/commons/DropNavOptions";

import { maps } from "/src/constants/maps.js";
import { teams } from "/src/constants/teams.js";
import { types } from "/src/constants/types.js";

const NavBar = () => {
  const { filter, handleMap, handleTeam, handleType } =
    useContext(FilterContext);
  const mapTitle =
    maps.find((map) => map.id === filter.map)?.name || "Não selecionado";
  const teamTitle =
    teams.find((team) => team.id === filter.team)?.name || "Qualquer";
  const typeTitle =
    types.find((type) => type.id === filter.type)?.name || "Não selecionado";

  return (
    <nav className="navbar-container">
      <div className="navbar-elements">
        <DropNavOptions title={mapTitle} options={maps} handler={handleMap} />
        <DropNavOptions
          title={teamTitle}
          options={teams}
          handler={handleTeam}
        />
        <DropNavOptions
          title={typeTitle}
          options={types}
          handler={handleType}
        />
      </div>
    </nav>
  );
};

export default NavBar;
