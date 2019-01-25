import React from 'react';
import { NavLink } from 'react-router-dom';
import ThreeDButton from './threeDBtn';

const Nav = ({ closeMenu, threeD, path }) => {
  return ( 
    <div className="nav-wrapper">
      <nav>
        <ThreeDButton 
          path={path}
          classNames="threeD lg-screens"
        />
        <NavLink onClick={ closeMenu } to={threeD ? "/portfolio-3D" : "/portfolio"}>Portfolio</NavLink>
        <NavLink onClick={ closeMenu } to="/about">About Me</NavLink>
        <NavLink onClick={ closeMenu } to="/contact">Contact Me</NavLink>
      </nav>
    </div>
   );
}
 
export default Nav;