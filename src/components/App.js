import React, { Component } from 'react';
import Background from './background';
import Header from './Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab);

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
