import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem3D = ({ project }) => {

  const {id, image_urls, project_name } = project;

  return ( 
    <React.Fragment>
      <li className="cube-container">
        <div className="photo-cube">

          <img className="front"src={process.env.PUBLIC_URL + image_urls[0]} alt={project_name} />
          <div className="back photo-desc">
            <h3>{project_name}</h3>
            {/* <p>Aenean lacinia bibendu</p> */}
            <Link className="btn-secondary" to={`/portfolio/project/${id}`}>View Project</Link>
          </div>
          <img className="left" src={process.env.PUBLIC_URL + `${image_urls[1].match(/\/images\/.+\/project/g)[0]}-mobile-2.png` }  alt={project_name} />
          <img className="right" src={process.env.PUBLIC_URL + `${image_urls[1].match(/\/images\/.+\/project/g)[0]}-mobile-3.png` } alt={project_name} />

        </div>
      </li>
    </React.Fragment>
  );
}
 
export default PortfolioItem3D;