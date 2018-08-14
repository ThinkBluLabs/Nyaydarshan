import React, { Component } from 'react';

class ParaContent extends Component {
  render() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        </div>
    </div>
    );
  }
}

export default ParaContent;
