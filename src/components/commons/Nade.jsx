import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";

const Nade = ({ pos, nade }) => {
  const { setNade } = useContext(FilterContext);
  const [x, y] = pos;

  return (
    <button
      style={{
        borderRadius: "30px",
        position: "absolute",
        right: `${x}%`,
        top: `${y}%`,
        opacity: "0.3",
      }}
      onClick={() => setNade(nade)}
    >
      {nade.type}
    </button>
  );
};

export default Nade;
