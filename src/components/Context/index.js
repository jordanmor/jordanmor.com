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
    if(this.state.menuIsOpen) {
      this.setState({ menuIsOpen: false });
    }
  }

  toggle3D = async() => {
    await this.setState( prevState => ({ threeD: !prevState.threeD }));
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
          toggle3D: this.toggle3D
        }
      }}>
        { this.props.children }
      </PortfolioContext.Provider>
     );
  }
}

export const Consumer = PortfolioContext.Consumer;