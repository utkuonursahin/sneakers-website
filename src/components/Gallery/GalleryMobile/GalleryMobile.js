import iconNext from "../../../images/icon-next.svg"
import iconPrevious from "../../../images/icon-previous.svg"
import {useGallery} from "../../../context/GalleryContext";
const GalleryMobile = () => {
  const {photoNumber, handleTour} = useGallery()
  const photo = require(`../../../images/image-product-${photoNumber}.jpg`).default
  return (
      <div className="gallery">
        <div className="gallery__mobile">
          <img src={photo} alt="Sneakers product" className="gallery__mobile--main-pic"/>
          <div className="icon-previous" onClick={handleTour} data-operation={"decrease"}>
            <img src={iconPrevious} alt="Previous icon"/>
          </div>
          <div className="icon-next" onClick={handleTour} data-operation={"increase"}>
            <img src={iconNext} alt="Next icon"/>
          </div>
        </div>
      </div>

  );
};

export default GalleryMobile;
