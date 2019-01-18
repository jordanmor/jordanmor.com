import React from 'react';
import { SVGs } from '../../assets/svgs';

const Technologies = ({ technologies, title }) => {
  return ( 
    <div className="technologies">
      <h2>{title}</h2>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>
            <div className="icon">
              {SVGs[technology]}
            </div>
            <div className="name">
              <p>{technology}</p>
            </div>
          </li>
        ))}
      </ul>
    </div> 
   );
}
 
export default Technologies;