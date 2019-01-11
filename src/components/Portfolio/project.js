import React from 'react';
import { Consumer } from '../Context';
import { Carousel } from 'react-responsive-carousel';

const Project = ({ match }) => {
  return (
    <Consumer>
      { ({ projects }) => {
        const project = projects.filter(project => project.id === match.params.id)[0];
        const images = project.image_urls.slice(1);
        return ( 
          <main>
            <div className="project">
              <h1>{project.project_name}</h1>
              <Carousel showStatus={false} autoPlay interval={8000} infiniteLoop={true} >
                {images.map((image, index) => (
                  <div key={index} >
                    <img 
                      src={image} 
                      alt={project.description} />
                  </div>
                ))}
              </Carousel>
            </div>
          </main>
        );
      }}
    </Consumer>
  );
}
 
export default Project;