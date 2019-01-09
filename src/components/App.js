import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Background from './background';
import Landing from './landing';
import MainComponents from './mainComponents';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Background />
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route component={MainComponents} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;