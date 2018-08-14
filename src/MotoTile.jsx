import React, { Component } from 'react';

class MotoTile extends Component {
  render() {
    return (
        <div class="col-md-4">
            <div class="feature-text">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        </div>
    );
  }
}

export default MotoTile;
