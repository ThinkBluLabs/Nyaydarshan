import React, { Component } from 'react';
import partnersJsonData from "./content/json/partners.json";
import ParaContent from './ParaContent';
import PartnersTile from './PartnersTile';

class Partners extends Component {
  GetContent()
  {
    return <ParaContent title={partnersJsonData.title} content={partnersJsonData.content}/>;
  }
    GetPartnersTile()
    {
      var partners = partnersJsonData.partners;
      var oPartners=[];
          for(var i = 0; i < partners.length; i++){        
            oPartners.push(<PartnersTile name={partners[i].name} designation={partners[i].designation} imgurl={partners[i].imgurl} message={partners[i].message} facebookurl={partners[i].facebookurl} linkedinurl={partners[i].linkedinurl} twitterurl={partners[i].twitterurl}/>); 
          }
          return oPartners;
    }

  render() {
    return (
        <div id="nyd-content-section" class="nyd-section-gray">
        {this.GetContent()}
        <div class="container">
          {this.GetPartnersTile()}
        </div> 
    </div>
    );
  }
}

export default Partners;
