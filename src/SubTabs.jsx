import React, { Component } from 'react';
import headerJsonData from "./content/json/header.json";
import SubTabElement from './SubTabElement';

class SubTabs extends Component
{
    Navigate=(sNavigate)=>
    {
        this.props.navigate(sNavigate);
    }
    GetSubTabElement() {
        var subheaders = headerJsonData.headers[this.props.i].submenu;
        var oSubTabs=[];
        for(var i = 0; i < subheaders.length; i++){  
            oSubTabs.push(<SubTabElement subelementname={subheaders[i].name} subelementurl={subheaders[i].urlname} navigate={this.Navigate}/>); 
        }
        return oSubTabs;
    }
  render()
  {   
    return (
        <ul className="nyd-sub-menu">
            {this.GetSubTabElement()}
        </ul>
    );
  }
}

export default SubTabs;
