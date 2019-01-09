import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Consumer } from '../Context';

const Header = ({ path }) => {
  return (
    <Consumer>
      { ({ menuIsOpen, actions }) => {
        return ( 
          <div className={path === '/' ? 'header-wrapper-out fade-out' : 'header-wrapper-in fade-in'} >
            <header className={ menuIsOpen ? "header open" : "header" }>
              <div className="logo">
                <Link to="/" onClick={ actions.closeMenu }>
                  <h1>Jordan Mor</h1>
                </Link>
              </div>
              <button onClick={ actions.toggleMenu } className="nav-icon">
                <span className="menu-lines"></span>
              </button>
              <nav>
                <NavLink onClick={ actions.closeMenu } to="/portfolio">Portfolio</NavLink>
                <NavLink onClick={ actions.closeMenu } to="/about">About Me</NavLink>
                <NavLink onClick={ actions.closeMenu } to="/contact">Contact Me</NavLink>
              </nav>
            </header>
          </div>
        );
      }}
    </Consumer>
  );
}
 
export default Header;