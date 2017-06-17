import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
// import About from './About';

export default function App() {
  return (
    <div>
      <h1>TonyHYK Personal Page Stub</h1>
      <Link to="/example">TestLink</Link>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
