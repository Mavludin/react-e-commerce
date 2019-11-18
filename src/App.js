import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import Details from './components/Details';
import Checkout from './components/Checkout';
import Thank from './components/Thank';

import classes from './modules/App.module.css';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/thank" component={Thank} />
            <Route path="/details/:productId" component={Details} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={HomePage} />
          </Switch>

          <img className={classes.EdyodaLogo} src="https://i.imgur.com/OKAY6Fl.png" alt="Edyoda logo"></img>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
