import MapCs from "/src/components/features/RenderingImages/MapCs";
import NadeImage from "/src/components/features/RenderingImages/NadeImage";
import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import styles from "./Container.module.css";

const Container = () => {
  const { filter } = useContext(FilterContext);
  const isFilterComplete = filter.map && filter.type ? true : false;

  return isFilterComplete ? (
    <div className={styles["container"]}>
      <div className={styles["side"]}>
        <MapCs />
      </div>
      <div className={styles["side"]}>
        <NadeImage />
      </div>
    </div>
  ) : null;
};

export default Container;
