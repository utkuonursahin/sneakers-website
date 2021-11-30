import mainPic from "../../../images/image-product-1.jpg";
import MiniGallery from "./MiniGallery/MiniGallery";
import Lightbox from "./Lightbox/Lightbox";
import {useGallery} from "../../../context/GalleryContext";

const GalleryDesktop = () => {
  const {isClicked, setIsClicked} = useGallery()
  return (
      <>
        <div className="gallery">
          <picture className="gallery--picture">
            <img src={mainPic} alt="Product"/>
          </picture>
          <MiniGallery/>
        </div>
        {isClicked && <Lightbox/>}
        {isClicked && <div className="overlay" onClick={() => setIsClicked(false)}/>}
      </>
  );
};

export default GalleryDesktop;
