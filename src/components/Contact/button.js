import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ title, icon, url }) => {
  return ( 
    <li className="btn">
      <a href={url} alt={title}>
        <FontAwesomeIcon icon={icon}/>
        <h1>{title}</h1>
      </a>
    </li>
   );
}
 
export default Button;