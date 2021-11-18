import MiniGallery from "../MiniGallery/MiniGallery";
import iconClose from "../../../../images/icon-close.svg";
import iconNext from "../../../../images/icon-next.svg"
import iconPrevious from "../../../../images/icon-previous.svg"
import {useGallery} from "../../../../context/GalleryContext";

const Lightbox = () => {
  const {photoNumber, handleTour, setIsClicked} = useGallery()
  const photo = require(`../../../../images/image-product-${photoNumber}.jpg`).default

  return (
      <div className="lightbox">
        <img src={iconClose} alt="Close icon" className="icon-close" onClick={() => setIsClicked(false)}/>
        <img src={photo} alt="Sneakers product" className="lightbox--main-pic"/>
        <div className="icon-previous" onClick={handleTour} data-operation={"decrease"}>
          <img src={iconPrevious} alt="Previous icon"/>
        </div>

        <div className="icon-next" onClick={handleTour} data-operation={"increase"}>
          <img src={iconNext} alt="Next icon"/>
        </div>

        <MiniGallery/>
      </div>
  );
};

export default Lightbox;
