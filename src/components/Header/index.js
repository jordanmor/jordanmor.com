import React from 'react';
import { Consumer } from '../Context';
import MediaQuery from 'react-responsive';
import Nav from './nav';
import MenuButton from './menuButton';
import Logo from './logo';
import ThreeDButton from './threeDBtn';
// import ProjectLinks from '../Project/projectLinks';

const Header = ({ path }) => {
  let classNames = '';
  if(path === '/') {
    classNames = 'header-wrapper-out fade-out';
  } else if (path === '/about' || path === '/contact') {
    classNames = 'header-wrapper-in fade-in header-about';
  } else {
    classNames = 'header-wrapper-in fade-in';
  }

  // Internet Explorer 6-11
  const isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge 20+
  const isEdge = !isIE && !!window.StyleMedia;

  return (
    <Consumer>
      { ({ menuIsOpen, threeD, actions }) => {
        return ( 
          <div className={classNames} >
            <header className={ menuIsOpen ? "open" : null }>
              <div className={threeD && path.includes("/portfolio-3D") ? "threeD-fixed" : null}>
                {!isIE && !isEdge 
                  ? 
                    <ThreeDButton 
                    path={path}
                    classNames="threeD sm-screens"
                    />
                  :
                    null
                }
                <Logo closeMenu={actions.closeMenu} />

                <MediaQuery maxWidth={768}>
                  <MenuButton toggleMenu={actions.toggleMenu} />
                </MediaQuery>

                <Nav 
                  closeMenu={actions.closeMenu}
                  toggle3D={actions.toggle3D}
                  path={path}
                  threeD={threeD}
                />
              </div>
            </header>
            
            {/* <ProjectLinks path={path} menuIsOpen={menuIsOpen} /> */}

          </div>
        );
      }}
    </Consumer>
  );
}
 
export default Header;