import React from 'react';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom';

const ThreeDButton = ({ path, classNames }) => {
  if (path !== "/portfolio" && path !== "/portfolio-3D") return null;

  return ( 
    <Consumer>
      {({ threeD, actions }) => {
        return (
          <Link 
            className={classNames}
            onClick={ actions.toggle3D } 
            to={threeD ? "/portfolio" : "/portfolio-3D"}
          >
          {threeD ? "2D" : "3D"}
          </Link>
        );
      }}
    </Consumer>
   );
}
 
export default ThreeDButton;