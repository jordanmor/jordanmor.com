import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Background from './background';
import Landing from './landing';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './contact';
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
            <Route exaxt path='/portfolio' component={Portfolio}></Route>
            <Route exaxt path='/about' component={About}></Route>
            <Route exaxt path='/contact' component={Contact}></Route>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;