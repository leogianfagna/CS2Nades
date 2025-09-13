import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import styles from "./NadeImage.module.css";

const NadeImage = () => {
  const { nade } = useContext(FilterContext);

  const renderLeftImage = () => {
    return (
      <img
        src={nade.spot_image}
        alt="Pixel da granada"
        className={`${styles["nade-image"]} ${styles["left"]}`}
      ></img>
    );
  };

  const renderRightImage = () => {
    return (
      <>
        <img
          src={nade.pixel_image}
          alt="Pixel da granada"
          className={`${styles["nade-image"]} ${styles["right"]}`}
        ></img>
        <div className="overlay-text">{nade?.throw ?? ""}</div>
      </>
    );
  };

  // To-do: customizar mais a imagem, está não centralizada, sem efeitos, etc
  return (
    <div className={styles["container-image"]}>
      {nade && (
        <>
          <div className={styles["spot-image"]}>{renderLeftImage()}</div>
          <div className={styles["spot-image"]}>{renderRightImage()}</div>
        </>
      )}
    </div>
  );
};

export default NadeImage;
