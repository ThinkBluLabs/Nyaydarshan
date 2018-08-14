import React, { Component } from 'react';
import homeJsonData from "./content/json/home.json";
import ParaContent from './ParaContent';
import MotoTile from './MotoTile';

class Home extends Component {
  GetContent()
  {
      var page_contents = homeJsonData.page_contents;
      var oContents=[];
          for(var i = 0; i < page_contents.length; i++){        
              oContents.push(<ParaContent title={page_contents[i].title} content={page_contents[i].content}/>); 
          }
          return oContents;
  }
  GetMoto ()
  {
      var motos = homeJsonData.moto_tiles;
      var oMotos=[];
          for(var i = 0; i < motos.length; i++){
            oMotos.push(<MotoTile title={motos[i].title} description={motos[i].description}/>);
          }
          return oMotos;
  }
  render() {
    return (
      <div class="container">
        {this.GetContent()}
        <div class="row">
          {this.GetMoto()}
      </div>
      </div>
    );
  }
}

export default Home;
