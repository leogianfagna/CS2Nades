import "./NavBar.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";
import DropNavOptions from "../DropNavOptions";

import { maps } from "/src/constants/maps.js";
import { teams } from "/src/constants/teams.js";
import { types } from "/src/constants/types.js";

const NavBar = () => {
  const { map, team, nadeType } = useContext(FilterContext);

  return (
    <nav className="navbar-container test-border">
      <div className="navbar-elements">
        <DropNavOptions title={map} options={maps} />
        <DropNavOptions title={team} options={teams} />
        <DropNavOptions title={nadeType} options={types} />
      </div>
    </nav>
  );
};

export default NavBar;
