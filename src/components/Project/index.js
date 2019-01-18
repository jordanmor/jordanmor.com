import React from 'react';
import { Consumer } from '../Context';
import ProjectLinks from './projectLinks';
import Card from './card';
import Technologies from '../common/technologies';

const Project = ({ match }) => {
  return (
    <div className="page">
      <Consumer>
        { ({ projects }) => {
          const project = projects.filter(project => project.id === match.params.id)[0];
          const images = project.image_urls.slice(1); // remove the first main image from image array

          return ( 
            <main className="wrapper">
              <div className="project">

                <ProjectLinks 
                  project={project} 
                  projects={projects} 
                />

                <Card 
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
    </div>
  );
}
 
export default Project;