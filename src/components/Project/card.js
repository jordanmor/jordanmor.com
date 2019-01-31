import React from 'react';
import CarouselResponsive from '../common/carouselResponsive';
import ProjectLinks from './projectLinks';

const Card = ({ project, images, match }) => {
  return ( 
    <div className="card">
      <ProjectLinks match={match} />
      <div className="container">
        <h1>{project.project_name}</h1>

        <CarouselResponsive 
          images={images}
          description={project.description}
        />

        <div className="description">
          <p className="main-text">{project.description}</p>
          <div className="links-external">
            {project.live_link && <a href={project.live_link} className="btn">Live Demo</a>}
            <a href={project.github_link} className="btn">Github Repo</a>
          </div>
        </div>

      </div>
    </div>   
   );
}
 
export default Card;