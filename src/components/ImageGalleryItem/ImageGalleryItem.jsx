import {Item, ItemImage} from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({image, openModal}) => {
    const {webformatURL, tags, largeImageURL} = image;
    return ( <Item>
        <ItemImage src={webformatURL} alt={tags} onClick={() => {openModal(largeImageURL)}}/>
      </Item>
   
 )
}
export default ImageGalleryItem;