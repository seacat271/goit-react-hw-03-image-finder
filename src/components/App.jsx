import {Component} from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from "./Modal/Modal";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

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
