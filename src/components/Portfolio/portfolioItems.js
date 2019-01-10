import React from 'react';

const PortfolioItems = ({ index }) => {
  return ( 
    <React.Fragment>
      <li>
        <img src={`https://via.placeholder.com/350.png?text=Project${index + 1}`} alt={`Project${index + 1}`}/>
      </li>
    </React.Fragment>
   );
}
 
export default PortfolioItems;