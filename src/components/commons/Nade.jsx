import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import styles from "./Nade.module.scss";

const Nade = ({ pos, nade }) => {
  const { setNade } = useContext(FilterContext);
  const [x, y] = pos;

  return (
    <div
      style={{ right: `${x}%`, top: `${y}%` }}
      className={styles[nade.team]}
      onClick={() => setNade(nade)}
    />
  );
};

export default Nade;
