import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import { types } from "/src/constants/types.js";
import { getTypeTotalNades } from "/src/utils/filters.js";

import styles from "./NadeTypeSelector.module.scss";

const NadeTypeSelector = () => {
  const { filter, handleType } = useContext(FilterContext);
  return !filter.type && filter.map ? (
    <section className={"container " + styles["cards-container"]}>
      {types.map((item, i) => (
        <div className={styles["card"]} onClick={() => handleType(item.id)}>
          <div className={styles.label}>
            <span>{item.name}</span>
            <span>{getTypeTotalNades(filter.map, item.id)}</span>
          </div>
          <img
            src={"/CS2Nades/src/assets/images/" + item.id + ".png"}
            className={styles.image}
          />
        </div>
      ))}
    </section>
  ) : null;
};



export default NadeTypeSelector;
