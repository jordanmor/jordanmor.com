import React from 'react';
import { Consumer } from '../Context';
import PortfolioItem3D from './portfolioItem3D';
import Footer from '../footer';

const Portfolio3D = () => {

  return (
    <Consumer>
      { ({ projects, actions }) => {
        return (
          <div className="page">
            <main className="portfolio-3D">
              <div className="container">
                <ul>
                  {projects.map( project => (
                    <PortfolioItem3D
                      key={project.id}
                      project={project}
                      closeMenu={actions.closeMenu}
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