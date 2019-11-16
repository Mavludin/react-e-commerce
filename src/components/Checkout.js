import React from 'react';

import Header from './Header';
import Footer from './Footer';

import classes from '../modules/Checkout.module.css';
import mutualClasses from '../modules/App.module.css';

class Details extends React.Component {


    render() {


        return (

            <div className="App">
                <Header />

                <main>
                    <div className={[mutualClasses.Container, classes.Details].join(' ')} >


                    </div>
                </main>

                <Footer />

            </div>
        );
    }
}

export default Details;