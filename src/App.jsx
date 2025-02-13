import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { MapsSelector } from "./components/MapsSelector";
import { NadeSelector } from "./components/NadeSelector";
import { useState } from "react";

function App() {
  const [mapSelected, setMap] = useState(null);

  const handleMapSelector = (map) => {
    setMap(map);
  }


  return (
    <>
      <MapsSelector handleMapSelector={handleMapSelector}/>
      <NadeSelector map={mapSelected}/>
    </>
  );
}

export default App;
