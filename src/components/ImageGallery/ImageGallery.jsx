
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"



const ImageGallery =({images, openModal}) => {

return ( 
    images.length !== 0 
        ? 
        <ul class="gallery">
             {images.map((image) => <ImageGalleryItem image = {image} key = {image.id} openModal ={openModal}/>)}
           </ul>
        : <div>No image with this title</div>

  )}



export default ImageGallery;