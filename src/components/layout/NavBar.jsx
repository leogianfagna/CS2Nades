import "./NavBar.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";
import DropNavOptions from "/src/components/commons/DropNavOptions";

import { maps } from "/src/constants/maps.js";
import { teams } from "/src/constants/teams.js";
import { types } from "/src/constants/types.js";

const NavBar = () => {
  const { map, team, nadeType, setMap, setTeam, setNadeType } =
    useContext(FilterContext);

  return (
    <nav className="navbar-container test-border">
      <div className="navbar-elements">
        <DropNavOptions title={map} options={maps} handler={setMap} />
        <DropNavOptions title={team} options={teams} handler={setTeam} />
        <DropNavOptions
          title={nadeType}
          options={types}
          handler={setNadeType}
        />
      </div>
    </nav>
  );
};

export default NavBar;
