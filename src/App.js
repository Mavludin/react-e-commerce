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
    cartCount : 0
  }

  updateCartCount = (count) => {
    console.log('count=>', count);
    this.setState({cartCount: count})
  }

  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
}


scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
// run this method to execute scrolling. 

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header amountOfProducts={this.state.cartCount} />
          <div>
              <Switch>
                <Route path="/thank" component={Thank} />
                <Route path="/details/:productId" render={(props) => <Details {...props} updateCartCount={this.updateCartCount} />}/>
                <Route path="/checkout" component={Checkout} />
                <Route path="/" component={HomePage} />
              </Switch>
          </div>
          <Footer />

          <img className={classes.EdyodaLogo} ref={this.myRef} src="https://i.imgur.com/OKAY6Fl.png" alt="Edyoda logo"></img>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
