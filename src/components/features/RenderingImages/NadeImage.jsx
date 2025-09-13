import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";
import styles from "./NadeImage.module.scss";

const NadeImage = () => {
  const { nade } = useContext(FilterContext);

  const renderLeftImage = () => {
    return (
      <img
        src={nade.spot_image}
        alt="Pixel da granada"
        className={`${styles["nade-image"]} ${styles["left"]}`}
      />
    );
  };

  const renderRightImage = () => {
    return (
      <>
        <img
          src={nade.pixel_image}
          alt="Pixel da granada"
          className={`${styles["nade-image"]} ${styles["right"]}`}
        />
        <div className="overlay-text">{nade?.throw ?? ""}</div>
      </>
    );
  };

  return (
    <>
      {nade ? (
        <div className={styles["container-image"]}>
          <header>
            <span>Posição: {nade.standing ?? "N/A"}</span>
            <span>Arremesso: {nade.throw ?? "N/A"}</span>
            <span>Movimento: {nade.movement ?? "N/A"}</span>
          </header>
          <div className={styles["image-grid"]}>
            {nade && (
              <>
                <div className={styles["spot-image"]}>{renderLeftImage()}</div>
                <div className={styles["spot-image"]}>{renderRightImage()}</div>
              </>
            )}
          </div>
        </div>
      ) : (
        <p>to-do: Escolher nada</p>
      )}
    </>
  );
};

export default NadeImage;
