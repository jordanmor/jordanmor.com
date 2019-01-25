import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ project }) => {

  const {id, image_urls, project_name } = project;

  return (
    <React.Fragment>
      <li className="flip-container">
        <div className="flipper">
          <div className="front">
            <img src={process.env.PUBLIC_URL + image_urls[0]} alt={project_name}/>
          </div>
          <div className="back photo-desc">
            <h3>{project_name}</h3>
            {/* <p>Aenean lacinia bibendu</p> */}
            <Link className="btn-secondary" to={`/portfolio/project/${id}`}>View Project</Link>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}
 
export default PortfolioItem;