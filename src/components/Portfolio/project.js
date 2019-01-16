import React from 'react';
import { Consumer } from '../Context';
import { Carousel } from 'react-responsive-carousel';
import { SVGs } from '../../assets/svgs';

const Project = ({ match }) => {
  return (
    <Consumer>
      { ({ projects }) => {
        const project = projects.filter(project => project.id === match.params.id)[0];
        const images = project.image_urls.slice(1);
        const skills = project.technologies;
        console.log(SVGs);
        return ( 
          <main>
            <div className="project">
              <h1>{project.project_name}</h1>
              <Carousel className="carousel-container" showStatus={false} autoPlay interval={8000} infiniteLoop={true} >
                {images.map((image, index) => (
                  <div key={index} >
                    <img 
                      src={image} 
                      alt={project.description} />
                  </div>
                ))}
              </Carousel>
              <div className="project-info">
                  <p>{project.description}</p>
              </div>
              <div className="skills">
                  <h2>Technologies Used</h2>
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index}>
                        <div className="skills-icon">
                          {SVGs[skill]}
                        </div>
                        <div className="skills-name">
                          <p>{skill}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          </main>
        );
      }}
    </Consumer>
  );
}
 
export default Project;