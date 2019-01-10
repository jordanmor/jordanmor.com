import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItems = ({ mainImage, description, id }) => {
  return ( 
    <React.Fragment>
      <li>
        <Link to={`/portfolio/project/${id}`}>
          <img src={process.env.PUBLIC_URL + mainImage} alt={description}/>
        </Link>
      </li>
    </React.Fragment>
   );
}
 
export default PortfolioItems;