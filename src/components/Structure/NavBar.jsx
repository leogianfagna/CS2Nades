import Dropdown from 'react-bootstrap/Dropdown';
import "./NavBar.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";
import DropNavOptions from '../DropNavOptions';

const NavBar = () => {
  const { map, team, nadeType } = useContext(FilterContext);

  return (
    <nav className="navbar-container test-border">
      <div className="navbar-elements">
        <DropNavOptions title={map}/>
        <DropNavOptions title={team}/>
        <DropNavOptions title={nadeType}/>
      </div>
    </nav>
  );
};

export default NavBar;
