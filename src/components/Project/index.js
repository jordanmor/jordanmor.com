import React from 'react';
import { Consumer } from '../Context';
import ProjectLinks from './projectLinks';
import ProjectCard from './projectCard';
import Technologies from '../common/technologies';

const Project = ({ match }) => {
  return (
    <Consumer>
      { ({ projects }) => {
        const project = projects.filter(project => project.id === match.params.id)[0];
        const images = project.image_urls.slice(1); // remove the first main image from image array

        return ( 
          <main className="project-wrapper">
            <div className="project">

              <ProjectLinks 
                project={project} 
                projects={projects} 
              />

              <ProjectCard 
                project={project}
                images={images}
              />

              <Technologies 
                technologies={project.technologies}
                title="Technologies Used"
              />

            </div>
          </main>
        );
      }}
    </Consumer>
  );
}
 
export default Project;