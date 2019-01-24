import React from 'react';
import { Consumer } from '../Context';
import PortfolioItem from './portfolioItem';
import Footer from '../footer';

const Portfolio = () => {

  return (
    <Consumer>
      { ({ projects }) => {
        return (
          <div className="page">
            <main className="portfolio">
              <div className="container">
                <ul>
                  {projects.map( project => (
                    <PortfolioItem
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
 
export default Portfolio;