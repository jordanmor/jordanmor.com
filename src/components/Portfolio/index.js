import React from 'react';
import { range } from 'lodash';
import PortfolioItems from './portfolioItems';

const Portfolio = () => {
  const projects = range(16);
  return (
    <div className="page">
      <main>
        {/* <h1>Portfolio</h1> */}
        <div className="portfolio-container">
          <ul className="portfolio">
            {projects.map((project, index) => (
              <PortfolioItems
                key={index}
                index={index}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
   );
}
 
export default Portfolio;