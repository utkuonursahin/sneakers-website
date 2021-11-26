import iconNext from "../../../images/icon-next.svg"
import iconPrevious from "../../../images/icon-previous.svg"
import {useGallery} from "../../../context/GalleryContext";
import {useEffect, useRef} from "react";
import Spinner from "../../Spinner/Spinner";
const GalleryMobile = () => {
  const {photoNumber, handleTour, handlePhoto, handleLoad, isPhotoLoaded, imgRef} = useGallery()
  const photo = require(`../../../images/image-product-${photoNumber}.jpg`).default

  useEffect(()=>handlePhoto(photo),[photo])

  return (
      <div className="gallery">
        <div className="gallery__mobile">
          {!isPhotoLoaded && <Spinner/>}
          <img alt="Sneakers product" className="gallery__mobile--main-pic" ref={imgRef} onLoad={handleLoad}/>
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
