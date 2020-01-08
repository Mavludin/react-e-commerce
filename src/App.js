import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Containers/Homepage/HomePage';
import Details from './Containers/Details/Details';
import Checkout from './Containers/Checkout/Checkout';
import Thank from './Containers/Thank/Thank';
import Footer from './Components/Footer/Footer';

import classes from './App.module.css';

import {Endpoints} from './Utils/RouterEndpoints';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div>
              <Switch>
                <Route path={`${Endpoints.THANK}`} component={Thank} />
                <Route path={`${Endpoints.DETAILS}:productId`} component={Details} />
                <Route path={Endpoints.CHECKOUT} component={Checkout} />
                <Route path={Endpoints.HOMEPAGE} component={HomePage} />
              </Switch>
          </div>
          <Footer />

          <img className={classes.EdyodaLogo} src="https://i.imgur.com/OKAY6Fl.png" alt="Edyoda logo"></img>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
