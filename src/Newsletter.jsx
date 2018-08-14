import React, { Component } from 'react';
import newsletterJsonData from "./content/json/newsletter.json";
import ParaContent from './ParaContent';
import ImageTile from './ImageTile';

class Newsletter extends Component {
  GetContent()
  {
    return <ParaContent title={newsletterJsonData.title} content={newsletterJsonData.content}/>;
  }
  GetNewsletters()
  {
      var newsletters = newsletterJsonData.newsletters;
      var oNewsletters=[];
          for(var i = 0; i < newsletters.length; i++){        
            oNewsletters.push(<ImageTile title={newsletters[i].title} subtitle={newsletters[i].subtitle} imageurl={newsletters[i].imageurl}/>);
          }
          return oNewsletters;
  }
  render() {
    return (
        <div id="nyd-content-section" className="nyd-section-gray">
          {this.GetContent()}
          <div className="container">
            <form method="post" action="form-to-email.php" name="NewletterForm" enctype="text/plain">
              <div className="row">
                <div className="form-group">
                  <input type="text" className="form-control subscribe-panel subscribe-panel-width" placeholder="Email" name="email"/>
                </div>
                <div className="form-group">
                  <input type="submit" value="Subscribe Now" className="btn btn-primary subscribe-panel "/>
                </div>
              </div>
            </form>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12">
              <ul id="nyd-portfolio-list">
                {this.GetNewsletters()}
              </ul>		
            </div>
          </div>
        </div>
    );
  }
}

export default Newsletter;
