
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import {Gallery} from "./ImageGallery.styled";



const ImageGallery =({images, openModal}) => {

return ( 
    images.length !== 0 
        ? 
        <Gallery>
             {images.map((image) => <ImageGalleryItem image = {image} key = {image.id} openModal ={openModal}/>)}
           </Gallery>
        : <div>No image with this title</div>

  )}



export default ImageGallery;