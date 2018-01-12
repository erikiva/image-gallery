import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as GalleryActions from "./actions.js";

export class Gallery extends Component {
  componentDidMount() {
    console.log("mounting the component");
    this.props.loadImages();
  }
  render() {
    const { images = [], selectedImage, selectImage } = this.props;
    console.log("new image is", images, selectedImage);
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} alt="pretty shot" />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick={() => selectImage(image)}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("in map state to props ", state);
  return {
    images: state.images,
    selectedImage: state.selectedImage
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(GalleryActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery);
