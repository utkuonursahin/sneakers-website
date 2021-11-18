import firstThumbnail from "../../../../images/image-product-1-thumbnail.jpg";
import secondThumbnail from "../../../../images/image-product-2-thumbnail.jpg";
import thirdThumbnail from "../../../../images/image-product-3-thumbnail.jpg";
import fourthThumbnail from "../../../../images/image-product-4-thumbnail.jpg";
import {useGallery} from "../../../../context/GalleryContext";

const MiniGallery = () => {
  const {findPhotoNumber} = useGallery()

  return (
      <div className="gallery__thumbnails" onClick={findPhotoNumber}>
        <img src={firstThumbnail} alt="Thumbnail" data-image={1} className="gallery__thumbnail"/>
        <img src={secondThumbnail} alt="Thumbnail" data-image={2} className="gallery__thumbnail"/>
        <img src={thirdThumbnail} alt="Thumbnail" data-image={3} className="gallery__thumbnail"/>
        <img src={fourthThumbnail} alt="Thumbnail" data-image={4} className="gallery__thumbnail"/>
      </div>
  );
};

export default MiniGallery;
