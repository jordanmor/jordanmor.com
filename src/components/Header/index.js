import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Consumer } from '../Context';

const Header = () => {
  return (
    <Consumer>
      { ({ menuIsOpen, actions }) => {
        return ( 
          <header className={ menuIsOpen ? "header open" : "header" }>
            <div className="logo">
              <Link to="/">
                <h1>Jordan Mor</h1>
              </Link>
            </div>
            <button onClick={ actions.toggleMenu } className="nav-icon">
              <span className="menu-lines"></span>
            </button>
            <nav>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/about">About Me</NavLink>
              <NavLink to="/contact">Contact Me</NavLink>
            </nav>
          </header>
        );
      }}
    </Consumer>
  );
}
 
export default Header;