import { useContext } from "react";
import { FilterContext } from "/src/context/FilterContext";

const NadeImage = () => {
  const { nade } = useContext(FilterContext);

  const renderLeftImage = () => {
    return (
      <img
        src={nade.spot_image}
        alt="Pixel da granada"
        className="nade-image left"
      ></img>
    );
  };

  const renderRightImage = () => {
    return (
      <>
        <img
          src={nade.pixel_image}
          alt="Pixel da granada"
          className="nade-image right"
        ></img>
        <div className="overlay-text">{nade?.throw ?? ""}</div>
      </>
    );
  };

  return (
    <div>
      {nade && (
        <div className="col-8 nades-images-container">
          <div className="single-nade-image-container">{renderLeftImage()}</div>
          <div className="single-nade-image-container">
            {renderRightImage()}
          </div>
        </div>
      )}
    </div>
  );
};

export default NadeImage;
