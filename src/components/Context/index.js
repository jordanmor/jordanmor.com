import React, { Component } from 'react';

const PortfolioContext = React.createContext();

export class Provider extends Component {
  state = { 
    projects: []
   }

  render() { 
    return ( 
      <PortfolioContext.Provider value={{
        projects: this.state.projects
      }}>
        { this.props.children }
      </PortfolioContext.Provider>
     );
  }
}

export const Consumer = PortfolioContext.Consumer;