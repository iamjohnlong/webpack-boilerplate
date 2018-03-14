import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from 'views/Main';
import styles from './global.css';

const App = () => (
  <Router>
    <div className={styles.padding}>
      <Link to="/">Main</Link>
      <Route exact path="/" component={Main} />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();
