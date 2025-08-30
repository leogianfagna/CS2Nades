import styles from "./Body.module.css";
import NavBar from "./NavBar";
import { MapsSelector } from "/src/components/features/Selectors/MapsSelector";
import Container from "/src/components/layout/Container";
import NadeTypeSelector from "/src/components/features/Selectors/NadeTypeSelector";

const Body = () => {
  return (
    <div className={styles["body"]}>
      <nav className={styles["nav"]}>
        <NavBar />
      </nav>
      <main className={styles["content"]}>
        <Container />
        <MapsSelector />
        <NadeTypeSelector />
      </main>
    </div>
  );
};

export default Body;
