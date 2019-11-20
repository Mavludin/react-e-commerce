import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Details from './components/Details';
import Checkout from './components/Checkout';
import Thank from './components/Thank';
import Footer from './components/Footer';

import classes from './modules/App.module.css';

class App extends React.Component {

  state = {
    topCounter: localStorage.getItem('amountOfProducts')
  }

  render() {

    console.log(this.state.topCounter);

    return (
      <BrowserRouter>
        <div className="App">
          <Header amountOfProducts={this.state.topCounter} />
          <div>
              <Switch>
                <Route path="/thank" component={Thank} />
                <Route path="/details/:productId" component={Details} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" component={HomePage} />
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
