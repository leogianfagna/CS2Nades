/* eslint-disable react/prop-types */
import "./NadeSelector.css";

const NadeImage = ({ image, length }) => {
  return (
    <>
      <div>
        <img
          src={image.pixel}
          alt="Pixel da granada"
          className="nade-image right image-zoom"
          style={{ height: `${100 / length}%` }}
        ></img>
        <div className="overlay-text test-border">{"teste"}</div>
      </div>
    </>
  );
};

export default NadeImage;
