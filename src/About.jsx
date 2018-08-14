import React, { Component } from 'react';
import aboutJsonData from "./content/json/about.json";
import ParaContent from './ParaContent';
import FounderTile from './FounderTile';

class About extends Component {
    GetContent()
    {
        var page_contents = aboutJsonData.page_contents;
        var oContents=[];
            for(var i = 0; i < page_contents.length; i++){        
                oContents.push(<ParaContent title={page_contents[i].title} content={page_contents[i].content}/>); 
            }
            return oContents;
    }
    GetFounders()
    {
        var founders = aboutJsonData.founders;
        var oFounders=[];
            for(var i = 0; i < founders.length; i++){        
                oFounders.push(<FounderTile name={founders[i].name} designation={founders[i].designation} imgurl={founders[i].imgurl} message={founders[i].message} facebookurl={founders[i].facebookurl} linkedinurl={founders[i].linkedinurl} twitterurl={founders[i].twitterurl}/>); 
            }
            return oFounders;
    }

  render() {
    return (
        <div id="nyd-content-section" class="nyd-section-gray">
        {this.GetContent()}
        <div class="container">
            <div class="row">
                {this.GetFounders()} 
            </div>
        </div>
    </div>
    );
  }
}

export default About;
