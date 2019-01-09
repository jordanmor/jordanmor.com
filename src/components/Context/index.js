import React, { Component } from 'react';

const PortfolioContext = React.createContext();

export class Provider extends Component {
  state = { 
    projects: [],
    menuIsOpen: false
   }

  toggleMenu = () => {
    this.setState( prevState => ({menuIsOpen: !prevState.menuIsOpen }));
  }

  render() { 
    return ( 
      <PortfolioContext.Provider value={{
        projects: this.state.projects,
        menuIsOpen: this.state.menuIsOpen,
        actions: {
          toggleMenu: this.toggleMenu
        }
      }}>
        { this.props.children }
      </PortfolioContext.Provider>
     );
  }
}

export const Consumer = PortfolioContext.Consumer;