import React from 'react';
import { Consumer } from './Context';
import { Link } from 'react-router-dom';
import SocialIcons from './common/socialIcons';

const Landing = () => {
  return ( 
    <div className="page">
    <div className="landing">
        <h1 className='title'>Hello, I'm <span>Jordan Mor!</span></h1>
        <div className="tagline">Web Developer | Life-long Learner</div>

        <SocialIcons />
        
        <div className="btn-group">
          <Consumer>
            {({ threeD }) => {
              return (
                <Link to={threeD ? "/portfolio-3D" : "/portfolio"} className="btn">
                  <span>Portfolio</span>
                  <i className="shine"></i>
                </Link>
              );
            }}
          </Consumer>
          
          <Link to="/about" className="btn">
            <span>About Me</span>
            <i className="shine two"></i>
          </Link>
        </div>
      </div>
    </div>
   );
}
 
export default Landing;