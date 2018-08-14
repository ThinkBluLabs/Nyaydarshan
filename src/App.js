import React, { Component, Profile } from 'react';
import Router from 'react';
import Header from "./Header";
import Footer from "./Footer";
import SiteBody from "./SiteBody";
import './App.css';
import './css/animate.css';
import './css/icomoon.css';
import './css/bootstrap.css';
import './css/superfish.css';
import './css/style.css';
import Loader from './Loader';

var options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.00,
  corners: 1,
  color: '#000',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute'
};

class App extends Component {
 
  constructor()
  {
    super();
    this.state={
      page:"Home"
    }
  }

 Navigation=(sNavigation)=>
 {
  this.setState({page:sNavigation});
  if(sNavigation === "Donations")
  {
    var transitionTo = Router.transitionTo;
    transitionTo('https://www.payumoney.com/paybypayumoney/#/325793 ');
  }
 }

  render() {
    return (
      <div className="App">
        <Loader loaded={false} options={options} className="spinner" />
        <div id="nyd-wrapper">
          <div id="nyd-page">
            <Header navigate={this.Navigation}/>
            <SiteBody page={this.state.page}/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;