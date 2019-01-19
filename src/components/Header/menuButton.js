import React from 'react';

const MenuButton = ({ toggleMenu }) => {
  return ( 
    <button onClick={ toggleMenu } className="menu-btn">
      <span className="menu-lines"></span>
    </button>
   );
}
 
export default MenuButton;