import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from './components/Context';
import { createBrowserHistory } from 'history';
import { trackGA } from './components/services/trackGA';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import './background.css';

const history = createBrowserHistory();
trackGA(history); // Google Analytics tracking

ReactDOM.render(
<Provider>
  <Router history={history}>
    <App history={history}/>
  </Router>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
