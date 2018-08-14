import React, { Component } from 'react';

import Home from './Home';
import About from './About';
import KnowYourRights from './KnowYourRights';
import Contact from "./Contact";
import Projects from './Projects';
import Newsletter from './Newsletter';
import Gallery from './Gallery';
import Partners from './Partners';
import Donations from './Donations';

import './App.css';

class SiteBody extends Component
{
  returnPage(){

  }
  render()
  {
    switch(this.props.page)
    {
      case "Home":{
        return <Home/>;
        break;
      }
      case "About":{
        return <About/>;
        break;
      }
      case "KnowYourRights":{
        return <KnowYourRights/>;
        break;
      }
      case "Contact":{
        return <Contact/>;
        break;
      }
      case "Projects":{
        return <Projects/>;
        break;
      }
      case "Newsletter":{
        return <Newsletter/>;
        break;
      }
      case "Gallery":{
        return <Gallery/>;
        break;
      }     
      case "Partners":{
        return <Partners/>;
        break;
      }
      case "Donations":{
        return <Donations/>;
        break;
      }
    }
    return <div>No page FOund </div>    
  }
}
export default SiteBody;