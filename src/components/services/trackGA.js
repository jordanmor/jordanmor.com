import { changeTitle } from './changeTitle';
import ReactGA from 'react-ga';

export function trackGA(history) {
  // Initialize GA and declare title on first load and on page refresh
  changeTitle(window.location.pathname);
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  // Change title & track GA when history detects location change 
  history.listen( (location, action) => {
    changeTitle(location.pathname);
    ReactGA.pageview(location.pathname + location.search);
    console.log('historyGA inner function fired');
  });
}