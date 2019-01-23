import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = () => {
  return ( 
    <div className="social-icons">
      <a className="social-icon" href="https://github.com/jordanmor"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      <a className="social-icon" href="https://www.linkedin.com/in/jordanmor/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      <a className="social-icon" href="https://twitter.com/imjordanmor"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
    </div>
   );
}
 
export default SocialIcons;