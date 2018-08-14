import React, { Component } from 'react';

class ListItemTile extends Component {
  render() {
    return (
    <div class="row">
        <div class="col-md-12 text-center heading-section">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
        </div>
    </div>
    );
  }
}

export default ListItemTile;
