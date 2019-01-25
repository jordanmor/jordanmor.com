import React from 'react';
import { Consumer } from '../Context';
import PortfolioItem3D from './portfolioItem3D';
import Footer from '../footer';

const Portfolio3D = () => {

  return (
    <Consumer>
      { ({ projects }) => {
        return (
          <div className="page">
            <main className="portfolio-3D">
              <div className="container">
                <ul>
                  {projects.map( project => (
                    <PortfolioItem3D
                      key={project.id}
                      project={project}
                    />
                  ))}
                </ul>
              </div>
            </main>
            <Footer />
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default Portfolio3D;