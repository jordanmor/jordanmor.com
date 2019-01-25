import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ project }) => {

  const {id, image_urls, project_name } = project;

  return (
    <React.Fragment>
      <li>
        <Link to={`/portfolio/project/${id}`}>
          <img src={process.env.PUBLIC_URL + image_urls[0]} alt={project_name}/>
        </Link>
      </li>
    </React.Fragment>
  );
}
 
export default PortfolioItem;