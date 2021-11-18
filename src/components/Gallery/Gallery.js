import {isMobileOnly} from "react-device-detect";
import GalleryMobile from "./GalleryMobile/GalleryMobile";
import GalleryDesktop from "./GalleryDesktop/GalleryDesktop";

const Gallery = () => {
  return (
      <>
        {isMobileOnly ? <GalleryMobile/> : <GalleryDesktop/> }
      </>
  );
};

export default Gallery;
