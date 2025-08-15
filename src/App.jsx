import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { MapsSelector } from "/src/components/features/Selectors/MapsSelector";
import { NadeSelector } from "/src/components/features/Selectors/NadeSelector";
import TeamSelector from "/src/components/features/Selectors/TeamSelector";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";

function App() {
  return (
    <>
      <NavBar />
      <Container />
      <MapsSelector />
      <TeamSelector />
      <NadeSelector />
    </>
  );
}

export default App;
