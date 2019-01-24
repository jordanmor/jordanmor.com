import React, { Component } from 'react';
import { projects } from '../../data/data.json';

const PortfolioContext = React.createContext();

export class Provider extends Component {
  state = { 
    projects,
    menuIsOpen: false,
    threeD: false
   }

  toggleMenu = () => {
    this.setState( prevState => ({ menuIsOpen: !prevState.menuIsOpen }));
  }

  closeMenu = () => {
    this.setState({ menuIsOpen: false });
  }

  togglePortfolioBtn = () => {
    this.setState( prevState => ({ threeD: !prevState.threeD }));
  }

  render() { 
    return ( 
      <PortfolioContext.Provider value={{
        projects: this.state.projects,
        menuIsOpen: this.state.menuIsOpen,
        threeD: this.state.threeD,
        actions: {
          toggleMenu: this.toggleMenu,
          closeMenu: this.closeMenu,
          togglePortfolioBtn: this.togglePortfolioBtn
        }
      }}>
        { this.props.children }
      </PortfolioContext.Provider>
     );
  }
}

export const Consumer = PortfolioContext.Consumer;