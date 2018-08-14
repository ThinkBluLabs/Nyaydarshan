import React, { Component } from 'react';
import SubTabs from './SubTabs';

class Tabs extends Component
{
    Navigate=(sNavigate)=>
    {
        this.props.navigate(sNavigate);
    }
    GetSubTab() {
        if(this.props.submenu_length > 0)
        {
            return <SubTabs i={this.props.i} navigate={this.Navigate}/>;
        }
    }
    OnTabClick=()=>{
        if(!this.props.submenu_length)
             this.props.navigate(this.props.urlname)
    }
  render()
  {   
    return (    
        <li id={this.props.urlname}>
            <a className={this.props.a_classname} className="headerCursor" onClick={this.OnTabClick}>{this.props.name}  </a>
            {this.GetSubTab()}
        </li>
    );
  }
}

export default Tabs;
