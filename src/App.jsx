import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { MapsSelector } from "./components/MapsSelector";
import { NadeSelector } from "./components/NadeSelector";
import { useState } from "react";
import TeamSelector from "./components/TeamSelector";

function App() {
  const [mapSelected, setMap] = useState(null);
  const [teamSelected, setTeam] = useState(null);

  const handleMapSelector = (map) => {
    setMap(map);
  };

  const handleTeamSelector = (team) => {
    setTeam(team);
  }

  return (
    <>
      <MapsSelector handleMapSelector={handleMapSelector} />
      <TeamSelector handleTeamSelector={handleTeamSelector} team={teamSelected} map={mapSelected}/>
      <NadeSelector map={mapSelected} team={teamSelected} />
    </>
  );
}

export default App;
