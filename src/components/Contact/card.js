import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, icon, url }) => {
  return ( 
    <li className="card">
      <a href={url} alt={title}>
        <div className="container">
          <FontAwesomeIcon icon={icon}/>
          <h1>{title}</h1>
        </div>
      </a>
    </li>
   );
}
 
export default Card;