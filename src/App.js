import React from 'react';
import logo from './logo.svg';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import HomePage from './components/HomePage';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/details/:productId" component={Details} />
            <Route path="/" component={HomePage} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
