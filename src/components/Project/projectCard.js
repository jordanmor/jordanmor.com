import React from 'react';
import CarouselResponsive from '../common/carouselResponsive';

const ProjectCard = ({ project, images }) => {
  return ( 
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
   );
}
 
export default ProjectCard;