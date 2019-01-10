import React from 'react';
import { Consumer } from '../Context';

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
              <ul>
                {images.map((image, index) => (
                  <li key={index} >
                    <img 
                      src={image} 
                      alt={project.description} />
                  </li>
                ))}
              </ul>
            </div>
          </main>
        );
      }}
    </Consumer>
  );
}
 
export default Project;