import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { MapsSelector } from "/src/components/features/Selectors/MapsSelector";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";

function App() {
  return (
    <>
      <NavBar />
      <Container />
      {/* <MapsSelector />
      <TeamSelector />
      <NadeSelector /> */}
    </>
  );
}

export default App;
