import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = () => {
  return ( 
    <div className="page">
      <div className="landing">
        <div className="container">
          <h1 className='title'>Hello, I'm <span>Jordan Mor!</span></h1>
          <div className="tagline">Web Developer | Life-long Learner</div>
          <div className="social-icons">
            <a className="social-icon" href="https://twitter.com/imjordanmor"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
            <a className="social-icon" href="https://www.linkedin.com/in/jordanmor/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a className="social-icon" href="https://github.com/jordanmor"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          </div>
          <div className="flex-center">
            <Link to="/portfolio" className="btn flex-center"><span>Portfolio</span><i className="shine"></i></Link>
            <Link to="/about" className="btn flex-center"><span>About Me</span><i className="shine two"></i></Link>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Landing;