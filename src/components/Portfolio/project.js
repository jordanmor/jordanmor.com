import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context';
import CarouselResponsive from '../common/carouselResponsive';
import Technologies from '../common/technologies';

const Project = ({ match }) => {
  return (
    <Consumer>
      { ({ projects }) => {
        const project = projects.filter(project => project.id === match.params.id)[0];
        const images = project.image_urls.slice(1); // remove the first main image from image array

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
          <main className="project-wrapper">
            <div className="project">

              <div className="links-project">
                <Link to={`/portfolio/project/${prevProjectID}`} className="btn">⇐ Prev Project</Link>
                <Link to={`/portfolio/project/${nextProjectID}`} className="btn">Next Project ⇒</Link>
              </div>

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