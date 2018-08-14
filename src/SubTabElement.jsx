import React, { Component } from 'react';

class SubTabElement extends Component
{
  render()
  {   
    return (
        <li><a className="headerCursor" onClick={() => this.props.navigate(this.props.subelementurl)}>{this.props.subelementname}</a></li>
    );
  }
}

export default SubTabElement;