const ImageGalleryItem = ({image}) => {
    const {webformatURL, tags} = image;
    return ( <li class="gallery-item" >
        <img src={webformatURL} alt={tags} width="200" height="200"/>
      </li>
   
 )
}
export default ImageGalleryItem;