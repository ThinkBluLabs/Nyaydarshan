import React, { Component } from 'react';
import projectsJsonData from "./content/json/projects.json";
import ParaContent from './ParaContent';
import ProjectTileRow from './ProjectTileRow';

class Projects extends Component {

GetContent()
{
	return <ParaContent title={projectsJsonData.title} content={projectsJsonData.content}/>;
}
GetProjects()
{
	var projects = projectsJsonData.projects;
	var oProjects=[];
	for(var i = 0; i < Math.ceil(projects.length/2); i++){        
		oProjects.push(<ProjectTileRow i={i}/>);
	}
	return oProjects;
}



render() {
    return (
        <div id="nyd-content-section" className="nyd-section-gray">
        	{this.GetContent()}
			<div class="container">
				<div class="row row-bottom-padded-md">
					{this.GetProjects()}
				</div>
			</div>
		</div>
    );
  }
}

export default Projects;
