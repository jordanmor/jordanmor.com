import React from 'react';
import { Consumer } from '../Context';
import Card from './card';
import Technologies from '../common/technologies';
import Footer from '../footer';

const Project = ({ match }) => {
  return (
    <div className="page">
      <Consumer>
        { ({ projects }) => {
          const project = projects.filter(project => project.id === match.params.id)[0];
          const images = project.image_urls.slice(1); // remove the first main image from image array

          return ( 
            <main className="project-wrapper">
              <div className="project">

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
      <Footer />
    </div>
  );
}
 
export default Project;