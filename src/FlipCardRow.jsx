import React, { Component } from 'react';
import rightsJsonData from "./content/json/rights.json";
import FlipCardTile from './FlipCardTile';

class FlipCardRow extends Component {
    GetRowComponents()
    {
        var rights = rightsJsonData.rights;
        var oRights=[];
        var rowVal = this.props.i;
        rowVal = rowVal * 3;
            for(var i = 0; i < 3; i++){        
                oRights.push(<FlipCardTile title={rights[i+rowVal].title} content={rights[i+rowVal].content}/>);
            }
            return oRights;
    }

  render() {
    return (
        <div className="row">
            {this.GetRowComponents()} 
        </div>
    );
  }
}

export default FlipCardRow;
