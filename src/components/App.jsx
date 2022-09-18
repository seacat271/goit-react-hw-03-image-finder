import {Component} from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from "./Modal/Modal";


export class App extends Component {

state = {
  index: 0,
  query: "",
  showModal: false,
}

onSearchSubmit = event => {
  event.preventDefault();
  if (event.target.query.value.trim() === "") return
  this.setState( {query: event.target.query.value.toLowerCase().trim()})
  event.target.query.value = "";
} 
toggleModal = () => {
this.setState(prevState => ({
  showModal: !prevState.showModal
}))
}



render () {
  const {showModal} = this.state;
  return (
    <div>
      <Searchbar
      onSearchSubmit = {this.onSearchSubmit}
      />
      <ImageGallery
      query = {this.state.query}>
        <ImageGalleryItem
        images = {images}/>
      </ImageGallery>
      <button type="button" onClick={this.toggleModal}>Open Modal</button>
      {showModal 
      && <Modal
      onClose={this.toggleModal}>
        <button onClick={this.toggleModal}>Close Modal</button>
        </Modal>}
    </div>
  );
}


};
