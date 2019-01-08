import React, { Component } from 'react';
import Background from './background';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
