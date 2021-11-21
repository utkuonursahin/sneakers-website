import MiniGallery from "../MiniGallery/MiniGallery";
import iconClose from "../../../../images/icon-close.svg";
import iconNext from "../../../../images/icon-next.svg"
import iconPrevious from "../../../../images/icon-previous.svg"
import {useGallery} from "../../../../context/GalleryContext";
import {useEffect, useRef} from "react";
import Spinner from "../../../Spinner/Spinner";

const Lightbox = () => {
  const {photoNumber, setIsClicked, handleTour, handlePhoto, handleLoad, isPhotoLoaded} = useGallery()
  const photo = require(`../../../../images/image-product-${photoNumber}.jpg`).default
  const imageDesktopRef = useRef()
  useEffect(()=>handlePhoto(imageDesktopRef,photo),[photo])

  return (
      <div className="lightbox">
        <img src={iconClose} alt="Close icon" className="icon-close" onClick={() => setIsClicked(false)}/>
        <img alt="Sneakers product" className="lightbox--main-pic" ref={imageDesktopRef} onLoad={handleLoad}/>
        {!isPhotoLoaded && <Spinner/>}
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
