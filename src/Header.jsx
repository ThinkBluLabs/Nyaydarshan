import React, { Component } from 'react';
import headerJsonData from "./content/json/header.json";
import Tabs from './Tabs';
import './js/main.js';

class Header extends Component
{ 
  GetTab()
  {
    var headers = headerJsonData.headers;
    var oTabs=[];
        for(var i = 0; i < headers.length; i++){        
            oTabs.push(<Tabs name={headers[i].name} urlname={headers[i].urlname} li_classname={headers[i].li_classname} a_classname={headers[i].a_classname} submenu_length={headers[i].submenu.length} i={i} navigate={this.Navigate}/>); 
        }
        return oTabs;
    }
    Navigate=(sNavigate)=>
    {
        this.props.navigate(sNavigate);
    }
  render()
  { 
    return (
        <div className="sticky-wrapper">
            <header id="nyd-header-section" className="sticky-banner">
                <div className="container">
                    <div className="nav-header">
                        <a className="js-nyd-nav-toggle nyd-nav-toggle dark"><i></i></a>
                        {/* <img src={logo} className="App-logo" alt="Nyaydarshan Logo" /> */}
                        <h1 id="nyd-logo">
                            <a onClick={this.Navigate}>
                                {headerJsonData.website_main_heading}
                            </a>
                        </h1>
                        <nav id="nyd-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="nyd-primary-menu">
                                {this.GetTab()} 
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
  }
}

export default Header;
