import React, { Component } from 'react';
import { projects } from '../../Data/data.json';

const PortfolioContext = React.createContext();

export class Provider extends Component {
  state = { 
    projects,
    menuIsOpen: false
   }

  toggleMenu = () => {
    this.setState( prevState => ({menuIsOpen: !prevState.menuIsOpen }));
  }

  closeMenu = () => {
    this.setState({ menuIsOpen: false });
  }

  render() { 
    return ( 
      <PortfolioContext.Provider value={{
        projects: this.state.projects,
        menuIsOpen: this.state.menuIsOpen,
        actions: {
          toggleMenu: this.toggleMenu,
          closeMenu: this.closeMenu
        }
      }}>
        { this.props.children }
      </PortfolioContext.Provider>
     );
  }
}

export const Consumer = PortfolioContext.Consumer;