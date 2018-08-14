import React, { Component } from 'react';

class ImageTile extends Component {
  render() {
    const bgStyle = {
        backgroundImage: 'url('+this.props.imageurl+')'
    };
      
    return (
        <li class="one-third animate-box" data-animate-effect="fadeIn" style={bgStyle}>
            <a class="color-4">
                <div class="case-studies-summary">
                    <span>{this.props.title}</span>
                    <h2>{this.props.subtitle}</h2>
                </div>
            </a>
        </li>
    );
  }
}

export default ImageTile;
