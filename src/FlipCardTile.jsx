import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';

class FlipCardTile extends Component {
    constructor() {
        super();
        this.state = {
          isFlipped: false
        };
    }

    handleClick=(e)=> {
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
    }

  render() {
    return (
        <div class="col-md-4">
            <div class="flip-card">
            <ReactCardFlip feature-text isFlipped={this.state.isFlipped}>
                <div class="front"  key="front">
                    <h3>{this.props.title}</h3>
                    <button onClick={this.handleClick}>Flip</button>
                </div>

                <div class="back" key="back">
                    <p>{this.props.content}</p>
                    <button onClick={this.handleClick}>Flip</button>
                </div>
            </ReactCardFlip>
            </div>
        </div>
    );
  }
}
  
export default FlipCardTile;
