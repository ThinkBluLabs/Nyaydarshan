import React, { Component } from 'react';
import projectsJsonData from "./content/json/projects.json";
import ProjectTile from './ProjectTile';

class FlipCardRow extends Component {
    GetRowComponents()
    {
        var rowVal = this.props.i;
        rowVal = rowVal * 2;
        var projects = projectsJsonData.projects;
        var oProjects=[];
        for(var i = 0; i < 2; i++){        
            oProjects.push(<ProjectTile title={projects[i+rowVal].title} date={projects[i+rowVal].date} brief_description={projects[i+rowVal].brief_description} imageurl={projects[i+rowVal].imageurl} image_alttext={projects[i+rowVal].image_alttext}/>);
        }
        return oProjects;
    }

  render() {
    return (
        <div>
            {this.GetRowComponents()} 
            <div class="clearfix visible-sm-block"></div>
        </div>
    );
  }
}

export default FlipCardRow;
