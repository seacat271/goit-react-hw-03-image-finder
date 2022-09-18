const ImageGalleryItem = ({image, openModal}) => {
    const {webformatURL, tags, largeImageURL} = image;
    return ( <li class="gallery-item" >
        <img src={webformatURL} alt={tags} width="200" height="200" onClick={() => {openModal(largeImageURL)}}/>
      </li>
   
 )
}
export default ImageGalleryItem;