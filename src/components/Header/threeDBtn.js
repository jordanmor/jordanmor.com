import React from 'react';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom';

const ThreeDButton = ({ path, classNames }) => {
  if (path !== "/portfolio") return null;
  
  return ( 
    <Consumer>
      {({ threeD, actions }) => {
        return (
          <Link 
            className={classNames}
            onClick={ actions.togglePortfolioBtn } 
            to="/portfolio"
          >
          {threeD ? "2D" : "3D"}
          </Link>
        );
      }}
    </Consumer>
   );
}
 
export default ThreeDButton;