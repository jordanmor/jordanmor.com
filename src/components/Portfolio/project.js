import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context';
import { Carousel } from 'react-responsive-carousel';
import { SVGs } from '../../assets/svgs';

const Project = ({ match }) => {
  return (
    <Consumer>
      { ({ projects }) => {
        const project = projects.filter(project => project.id === match.params.id)[0];
        const images = project.image_urls.slice(1); // remove the first main image from image array
        const skills = project.technologies;

        let prevProjectID = '', nextProjectID = '';
        const projectIndex = projects.indexOf(project);

        if (projectIndex === 0) {
          prevProjectID = projects[projects.length - 1].id;
        } else {
          prevProjectID = projects[projectIndex - 1].id;
        }
        if (projectIndex === projects.length - 1) {
          nextProjectID = projects[0].id;
        } else {
          nextProjectID = projects[projectIndex + 1].id;
        }

        return ( 
          <main>
            <div className="project">
              <h1>{project.project_name}</h1>
              <div className="links">
                <Link to={`/portfolio/project/${prevProjectID}`} className="btn">⇐ Prev Project</Link>
                <Link to={`/portfolio/project/${nextProjectID}`} className="btn">Next Project ⇒</Link>
              </div>
              <Carousel className="carousel-container carousel-mobile" showThumbs={false} showStatus={false} autoPlay interval={8000} infiniteLoop={true} >
                {images.map((image, index) => (
                  <div key={index} >
                    <img 
                      src={`${image.match(/\/images\/.+\/project/g)[0]}-mobile-${index + 1}.png` } 
                      alt={project.description} />
                  </div>
                ))}
              </Carousel>
              <Carousel className="carousel-container carousel-desktop" showThumbs={false} showStatus={false} autoPlay interval={8000} infiniteLoop={true} >
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
                  <div className="links external">
                    <a href={project.live_link} className="btn">Live Demo</a>
                    <a href={project.github_link} className="btn">Github Repo</a>
                  </div>
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