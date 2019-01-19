import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ closeMenu }) => {
  return ( 
    <div className="logo">
      <Link to="/" onClick={ closeMenu }>
        <h1>Jordan Mor</h1>
      </Link>
    </div>
   );
}
 
export default Logo;