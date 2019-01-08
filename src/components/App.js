import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Background from './background';
import Landing from './landing';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Background />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
