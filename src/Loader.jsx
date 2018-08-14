import React, { Component, Profile } from 'react';
import './css/style.css';

var Loader = require('react-loader');

class LoaderComponent extends Component {

  getInitialState() {
    return { loaded: false, profile: null };
  }

  componentDidMount(){
    new Profile({ id: this.props.id }).fetch({
      success: this.onSuccess,
      error: this.onError
    })
  }

  onSuccess(profile) {
    this.setState({ profile: profile, loaded: true });
  }
 
  onError(err) {
    // error handling goes here
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <Profile model={this.state.profile} />
      </Loader>
    );
  }
}

export default LoaderComponent;