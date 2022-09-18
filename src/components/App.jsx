import {Component} from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import ButtonLoadMore from "./Button/Button";
import Spinner from "components/Loader/Loader";
import { AppBox } from "./App.styled";


export class App extends Component {

state = {
  index: 0,
  query: "",
  showModal: null,
  status: "idle",
  images: [],
  page: 1,
  error: null,
}

componentDidUpdate(prevProps, prevState) {
    
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    
      this.setState({status: "pending"});
      fetch(`https://pixabay.com/api/?key=29127762-27ecb80fc89c6fc72c273a026&q=${this.state.query}&per_page=12&page=${this.state.page}`)
      .then(response => response.json())
      .then(images => {
        // this.setState({images: images.hits, status: "resolved", })
        if (prevState.page !== this.state.page){
          this.setState(prevState=> ({images: [...prevState.images, ...images.hits], status: "resolved", }))
        } else this.setState({images: images.hits, status: "resolved", })
      })
      .catch(error => this.setState({ error, statue: "rejected" }))
  }
  }

onSearchSubmit = event => {
  event.preventDefault();
  if (event.target.query.value.trim() === "") return
  this.setState({
    query: event.target.query.value.toLowerCase().trim(),
    page: 1,
  })
} 
openModal = (url) => {
  this.setState({showModal: url})
  }
closeModal = () => {
this.setState({showModal: null})
}

handleLoadMore = () =>{
  this.setState(prevState => ({
page: prevState.page + 1
  }))
}




render () {
  const {showModal} = this.state;
  return (
    <AppBox>
      <Searchbar
      onSearchSubmit = {this.onSearchSubmit}
      />
      {(this.state.status === "idle") && <div>Enter image title</div>}
      {(this.state.status === "resolved" || this.state.status === "pending") && <ImageGallery
      openModal = {this.openModal}
      images = {this.state.images}/>}
 

      
      {showModal 
      && <Modal
      onClose={this.closeModal}
      modalImage={this.state.showModal}>
        </Modal>}

        
        {this.state.status === "rejected" && <h1>{this.state.error.message}</h1>}
        {this.state.status === "pending" && <Spinner/>}
        <ButtonLoadMore
        handleLoadMore ={this.handleLoadMore}/>
    </AppBox>
  );
}


};
