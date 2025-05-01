import "./NavBar.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";

const NavBar = () => {
    const { map, team, nadeType } = useContext(FilterContext);


  return (
    <nav className="navbar-container">
      <div className="navbar-elements">
        <button className="navbar-drop-element">{map}</button>
        <button className="navbar-drop-element">{team}</button>
        <button className="navbar-drop-element">{nadeType}</button>
      </div>
    </nav>
  );
};

export default NavBar;
