import React from 'react';
import { Consumer } from '../Context';
import Nav from './nav';
import MenuButton from './menuButton';
import Logo from './logo';
import ProjectLinks from './projectLinks';

const Header = ({ path }) => {
  const classNames = path === '/' ? 'header-wrapper-out fade-out' : 'header-wrapper-in fade-in';

  return (
    <Consumer>
      { ({ menuIsOpen, actions }) => {
        return ( 
          <div className={classNames} >
            <header className={ menuIsOpen ? "open" : null }>

              <Logo closeMenu={actions.closeMenu} />

              <MenuButton toggleMenu={actions.toggleMenu} />

              <Nav closeMenu={actions.closeMenu} />

            </header>

            <ProjectLinks path={path} menuIsOpen={menuIsOpen} />

          </div>
        );
      }}
    </Consumer>
  );
}
 
export default Header;