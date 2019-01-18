import React from 'react';
import { Consumer } from '../Context';
import ProjectLinks from './projectLinks';
import CarouselResponsive from '../common/carouselResponsive';
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

              <div className="card">
                <div className="container">
                  <h1>{project.project_name}</h1>

                  <CarouselResponsive 
                    images={images}
                    description={project.description}
                  />

                  <div className="description">
                    <p>{project.description}</p>
                    <div className="links-external">
                      <a href={project.live_link} className="btn">Live Demo</a>
                      <a href={project.github_link} className="btn">Github Repo</a>
                    </div>
                  </div>

                </div>
              </div> 

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