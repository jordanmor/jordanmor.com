import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './common/socialIcons';

const Landing = () => {
  return ( 
    <div className="page">
      <div className="landing">
        <div className="container">
          <h1 className='title'>Hello, I'm <span>Jordan Mor!</span></h1>
          <div className="tagline">Web Developer | Life-long Learner</div>

          <SocialIcons />
          
          <div className="btn-group flex-center">
            <Link to="/portfolio" className="btn flex-center"><span>Portfolio</span><i className="shine"></i></Link>
            <Link to="/about" className="btn flex-center"><span>About Me</span><i className="shine two"></i></Link>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Landing;