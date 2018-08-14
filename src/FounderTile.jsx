import React, { Component } from 'react';

class FounderTile extends Component {
  render() {
    return (
    <div class="col-md-4">
        <div class="nyd-team text-center animate-box">
            <figure>
                <img src={this.props.imgurl} alt={this.props.name}/>
            </figure>

            <div>
                <h3>{this.props.name}</h3>
                <p><span>{this.props.designation}</span></p>
                <p>{this.props.message}</p>
            </div>
            
            <p class="nyd-social-icons">
                <a href={this.props.twitterurl} targrt="_blank"><i class="icon-twitter2"></i></a>
                <a href={this.props.linkedinurl} targrt="_blank"><i class="icon-linkedin2"></i></a>
                <a href={this.props.facebookurl} targrt="_blank"><i class="icon-facebook3"></i></a>
            </p>
        </div>
    </div>
    );
  }
}

export default FounderTile;
