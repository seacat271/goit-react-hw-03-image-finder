import {Component} from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import Spinner from "components/Loader/Loader";


class ImageGallery extends Component {
state = {
status: "idle",
images: null,
page: 1,
error: null,
}

componentDidUpdate(prevProps, prevState) {
    
if (prevProps.query !== this.props.query) {
    console.log("Lets fetch")
    this.setState({status: "pending"});
    fetch(`https://pixabay.com/api/?key=29127762-27ecb80fc89c6fc72c273a026&q=${this.props.query}&per_page=12`)
    .then(response => response.json())
    .then(images => { console.log(images.hits.length)
        this.setState({images, status: "resolved"})})
    .catch(error => this.setState({ error, statue: "rejected" }))
    .finally(this.setState({loading: false}))
}
}

render () {
  
    if (this.state.status === "idle") {
        return <div>Enter image title</div>
    }

    if (this.state.status === "pending") {
        return <Spinner/>
    }

    if (this.state.status === "rejected") {
        return <h1>{this.state.error.message}</h1>
    }


    if (this.state.status === "resolved") {
        return this.state.images.hits.length !== 0
        ? <ul class="gallery">
             {this.state.images.hits.map((image) => <ImageGalleryItem image = {image} key = {image.id}/>)}
           </ul>
        : <div>No image with this title</div>

    }

//     return (<>

//         {this.state.loading && <div>Loading...</div>}
//         {this.state.images && 
        
//     <ul class="gallery">
//     {this.state.images.hits.map((image) => <ImageGalleryItem image = {image} key = {image.id}/>)}
//   </ul>}
//   </>)
  }

}

export default ImageGallery;