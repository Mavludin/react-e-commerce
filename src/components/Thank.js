import React from 'react';

import Header from './Header';
import Footer from './Footer';

import classes from '../modules/Thank.module.css';
import mutualClasses from '../modules/App.module.css';

class Details extends React.Component {

    render() {

        return (

            <div>
                <Header />

                <main>
                    <div className={[mutualClasses.Container, classes.Thank].join(' ')} >
                        <i class="fas fa-check-circle" aria-hidden="true"></i>
                        <h1>Order Placed Successfully!!!</h1>
                        <p className={classes.Desc}>We have sent you an email with the order details</p>
                    </div>
                </main>

                <Footer />

            </div>
        );
    }
}

export default Details;