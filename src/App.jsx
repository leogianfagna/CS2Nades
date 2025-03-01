import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { MapsSelector } from "./components/MapsSelector";
import { NadeSelector } from "./components/NadeSelector";
import TeamSelector from "./components/TeamSelector";

function App() {
  return (
    <>
      <MapsSelector />
      <TeamSelector />
      <NadeSelector />
    </>
  );
}

export default App;
