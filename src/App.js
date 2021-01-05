import { createRef } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './containers/Homepage/HomePage';
import { Details } from './containers/Details/Details';
import { Checkout } from './containers/Checkout/Checkout';
import { Thank } from './containers/Thank/Thank';
import { Footer } from './components/Footer/Footer';

import { endpoints } from './utils/routerEndpoints';

const App = () => {

  const clothes = createRef();
  const accessories = createRef();

  return (
    <BrowserRouter>
      <div className='App'>
        <Header clothes={clothes} accessories={accessories} />
        <main>
          <div className="container">
            <Switch>
              <Route exact path={`${endpoints.THANK}`} component={Thank} />
              <Route exact path={`${endpoints.DETAILS}:productId`} component={Details} />
              <Route exact path={endpoints.CHECKOUT} component={Checkout} />
              <Route 
                exact path={endpoints.HOMEPAGE} 
                render={(props) => (<HomePage clothes={clothes} accessories={accessories} {...props} />)} 
              />
            </Switch>
          </div>
        </main>
        <Footer />

        <img className='edYodaLogo' src="https://i.imgur.com/OKAY6Fl.png" alt="EdYoda logo"></img>

      </div>
    </BrowserRouter>
  );

}

export default App;
