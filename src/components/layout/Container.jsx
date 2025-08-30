import MapCs from "/src/components/features/RenderingImages/MapCs";
import NadeImage from "/src/components/features/RenderingImages/NadeImage";
import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";

const Container = () => {
  const { filter } = useContext(FilterContext);
  const isFilterComplete = filter.map && filter.type ? true : false;

  return isFilterComplete ? (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2%", outline: "3px solid" }}>
      <div style={{ flex: "1 1 48%", boxSizing: "border-box" }}>
        <MapCs />
      </div>
      <div style={{ flex: "1 1 48%", boxSizing: "border-box" }}>
        <NadeImage />
      </div>
    </div>
  ) : null;
};

export default Container;
