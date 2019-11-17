import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

import classes from '../modules/Checkout.module.css';
import mutualClasses from '../modules/App.module.css';

class Details extends React.Component {


    render() {

        let arrayOfValues = [];
        for (let i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
                arrayOfValues.push(JSON.parse(localStorage[i]));
            }

        }

        console.log(arrayOfValues)

        const arrayOfProducts = arrayOfValues.map(item => {

            if (item.thumbnail) {

                return (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <div className={classes.Item}>
                            <img src={item.thumbnail} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p>{`x${item.amount}`}</p>
                            <p className={classes.Desc}>Amount: Rs {item.price}</p>
                        </div>
                    </Link>
                )

            }
        });

        return (

            <div className="App" >
                <Header />

                <main>
                    <div className={[mutualClasses.Container, classes.Checkout].join(' ')} >
                        <h1>Checkout</h1>
                        <p className={classes.TotalItems}>Total items: {localStorage['amountOfProducts']}</p>
                        <div className={classes.KindaBlock}>

                            <div className={classes.LeftCheck}>
                                {arrayOfProducts}
                            </div>

                            <div className={classes.RightCheck}>
                                <div className={classes.Total}>
                                    <h2>Total amount</h2>
                                    <p className={classes.Desc}>Total price: <span>9999</span></p>
                                    <a href="thank.html"><button>Place Order</button></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                <Footer />

            </div>
        );
    }
}

export default Details;