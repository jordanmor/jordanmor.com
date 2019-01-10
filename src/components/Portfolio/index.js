import React from 'react';
import { Consumer } from '../Context';
import PortfolioItems from './portfolioItems';

const Portfolio = () => {

  return (
    <Consumer>
      { ({ projects }) => {
        return (
          <div className="page">
            <main>
              {/* <h1>Portfolio</h1> */}
              <div className="portfolio-container">
                <ul className="portfolio">
                  {projects.map( project => (
                    <PortfolioItems
                      key={project.id}
                      id={project.id}
                      mainImage={project.image_urls[0]}
                      description={project.description}
                    />
                  ))}
                </ul>
              </div>
            </main>
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default Portfolio;