import React from 'react';
import { Consumer } from '../Context';
import PortfolioItem from './portfolioItem';
import Footer from '../footer';

const Portfolio = () => {

  return (
    <Consumer>
      { ({ projects, actions }) => {
        return (
          <div className="page">
            <main className="portfolio">
              <div className="container">
                <ul>
                  {projects.map( project => (
                    <PortfolioItem
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
 
export default Portfolio;