import React, { Component } from 'react';
import rightsJsonData from "./content/json/rights.json";
import ParaContent from './ParaContent';
import FlipCardRow from './FlipCardRow';

class KnowYourRights extends Component {
    GetContent()
    {
      return <ParaContent title={rightsJsonData.title} content={rightsJsonData.content}/>;
    }
    GetRightsList()
    {
        var rights = rightsJsonData.rights;
        var oRights=[];
            for(var i = 0; i < Math.ceil(rights.length/3); i++){        
                oRights.push(<FlipCardRow i={i}/>);
            }
            return oRights;
    }
  render() {
    return (
        <div id="nyd-content-section" class="nyd-section-gray">
        {this.GetContent()}
        <div className="container">
            {this.GetRightsList()} 
        </div>
    </div>
    );
  }
}

export default KnowYourRights;
