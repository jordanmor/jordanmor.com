import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Background from './background';
import Landing from './landing';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

library.add(fab, faEnvelope); // make font-awesome brand icons available to components

const App = ({ location }) => {
  return (
    <React.Fragment>
      <Background />
      <Header path={location.pathname} />
      <Route render={({location}) => (
        <TransitionGroup component={null}> {/* avoid wrapping div */}
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
        >
          <Switch location={location}>
            <Route 
              path='/portfolio/project/:id'
              render={ props => <Project {...props} /> }> 
            </Route>
            <Route exaxt path='/portfolio' component={Portfolio}></Route>
            <Route exaxt path='/about' component={About}></Route>
            <Route exaxt path='/contact' component={Contact}></Route>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
    </React.Fragment>
  );
}

export default withRouter(App);