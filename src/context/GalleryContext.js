import {createContext, useContext, useRef, useState} from "react";

const GalleryContext = createContext()
const GalleryProvider = ({children}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [photoNumber, setPhotoNumber] = useState(1)
  const [isPhotoLoaded, setIsPhotoLoaded] = useState()
  const imgRef = useRef()

  const findPhotoNumber = function (e){
    if(e.target.className !== 'gallery__thumbnail') return
    setIsClicked(true)
    const target = e.target.dataset.image
    setPhotoNumber(+target)
  }

  const handleTour = function (e){
    const target = e.currentTarget.className
    if(target === 'icon-previous') photoNumber === 1 ? setPhotoNumber(4) : setPhotoNumber(prev => prev - 1)
    else if(target === 'icon-next') photoNumber === 4 ? setPhotoNumber(1) : setPhotoNumber(prev => prev + 1)
  }

  const handlePhoto = function(photo){
    setIsPhotoLoaded(false)
    imgRef.current.src = photo
  }

  const handleLoad = () => setIsPhotoLoaded(true)

  const values = {isClicked, photoNumber, setIsClicked, isPhotoLoaded, imgRef, handlePhoto, handleLoad, handleTour, findPhotoNumber}
  return <GalleryContext.Provider value={values}>{children}</GalleryContext.Provider>
}

const useGallery = () => useContext(GalleryContext)
export {GalleryProvider, useGallery}