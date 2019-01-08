import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = () => {
  return ( 
    <header>
      <div className="header-main">
        <h1 className='logo'>Hello, I'm <span>Jordan Mor!</span></h1>
        <div className="tagline">Web Developer | Life-long Learner</div>
        <div className="social-icons">
          <a className="social-icon" href="https://twitter.com/imjordanmor"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
          <a className="social-icon" href="https://www.linkedin.com/in/jordanmor/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a className="social-icon" href="https://github.com/jordanmor"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        </div>
        <div className="button-group flex-center">
          <button><span>Portfolio</span><i className="btn1"></i></button>
          <button><span>About Me</span><i className="btn2"></i></button>
        </div>
      </div>
    </header>
   );
}
 
export default Landing;