import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './contact';

const MainComponents = () => {
  return ( 
    <React.Fragment>
      <Header />
      <Switch>
        <Route exaxt path='/portfolio' component={Portfolio}></Route>
        <Route exaxt path='/about' component={About}></Route>
        <Route exaxt path='/contact' component={Contact}></Route>
      </Switch>
    </React.Fragment>
   );
}
 
export default MainComponents;