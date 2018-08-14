import React, { Component } from 'react';

class ProjectTile extends Component {
  
render() {
    return (
        <div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="nyd-blog animate-box">
                    <a href="#"><img class="img-responsive" src={this.props.imageurl} alt={this.props.image_alttext}/></a>
                    <div class="blog-text">
                        <div class="prod-title">
                            <h3><a href="">{this.props.title}</a></h3>
                            <span class="posted_by">{this.props.date}</span>
                            <p>{this.props.brief_description}</p>
                            <p><a href="#">Learn More...</a></p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
  }
}

export default ProjectTile;
