import PropTypes from 'prop-types';
import { Item, ItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <Item>
      <ItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => {
          openModal(largeImageURL);
        }}
      />
    </Item>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

