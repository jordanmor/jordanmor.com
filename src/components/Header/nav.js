import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ closeMenu }) => {
  return ( 
    <div className="nav-wrapper">
      <nav>
        <NavLink onClick={ closeMenu } to="/portfolio">Portfolio</NavLink>
        <NavLink onClick={ closeMenu } to="/about">About Me</NavLink>
        <NavLink onClick={ closeMenu } to="/contact">Contact Me</NavLink>
      </nav>
    </div>
   );
}
 
export default Nav;