
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import {Gallery} from "./ImageGallery.styled";



const ImageGallery =({images, openModal}) => {

return ( 
    // images.length !== 0 
    //     ? 
        <Gallery>
             {images.map((image, index) => <ImageGalleryItem image = {image} key = {index} openModal ={openModal}/>)}
           </Gallery>
        // : <TitlePlug>No image with this title</TitlePlug>

  )}



export default ImageGallery;