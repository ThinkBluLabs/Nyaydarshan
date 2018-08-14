import React, { Component } from 'react';
import galleryJsonData from "./content/json/gallery.json";
import ImageTile from './ImageTile';

class Gallery extends Component {
  GetGallery()
  {
      var images = galleryJsonData.images;
      var oImages=[];
          for(var i = 0; i < images.length; i++){        
            oImages.push(<ImageTile title={images[i].title} subtitle={images[i].subtitle} imageurl={images[i].imageurl}/>);
          }
          return oImages;
  }
  render() {
    var Title = galleryJsonData.title;
    var Content = galleryJsonData.content;
    return (
      <div id="nyd-portfolio">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
              <h3>{Title}</h3>
              <p>{Content}</p>
            </div>
          </div>
    
          <div class="row row-bottom-padded-md">
            <div class="col-md-12">
              <ul id="nyd-portfolio-list">
                {this.GetGallery()}
              </ul>		
            </div>
          </div>
        </div>
		</div>
    );
  }
}

export default Gallery;

