import React from 'react';
import classes from './App.module.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Containers/Homepage/HomePage';
import Details from './Containers/Details/Details';
import Checkout from './Containers/Checkout/Checkout';
import Thank from './Containers/Thank/Thank';
import Footer from './Components/Footer/Footer';

import { Endpoints } from './utils/RouterEndpoints';

class App extends React.Component {

  clothes = React.createRef();
  accessories = React.createRef();

  render() {

    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header clothes={this.clothes} accessories={this.accessories} />
          <main>
            <Switch>
              <Route exact path={`${Endpoints.THANK}`} component={Thank} />
              <Route exact path={`${Endpoints.DETAILS}:productId`} component={Details} />
              <Route exact path={Endpoints.CHECKOUT} component={Checkout} />
              <Route exact path={Endpoints.HOMEPAGE} render={(props) => (<HomePage clothes={this.clothes} accessories={this.accessories} {...props} />)} />
            </Switch>
          </main>
          <Footer />

          <img className={classes.EdyodaLogo} src="https://i.imgur.com/OKAY6Fl.png" alt="Edyoda logo"></img>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
