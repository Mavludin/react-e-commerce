import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

import classes from '../modules/Checkout.module.css';
import mutualClasses from '../modules/App.module.css';

class Details extends React.Component {

    BackToDetails = (id) => {
        window.open(`details/${id}`, "_self");
    }

    OnPlaceOrder = () => {
        localStorage.clear();
    }

    render() {

        let arrayOfValues = [];
        for (let i in localStorage) {
            if (localStorage.hasOwnProperty(i) && JSON.parse(localStorage[i]).amount) {
                arrayOfValues.push(JSON.parse(localStorage[i]));
            }

        }

        const arrayOfProducts = arrayOfValues.map(item => {

                return (
                    <div onClick={()=>this.BackToDetails(item.id)} className={classes.Item} key={item.id}>
                        <img src={item.thumbnail} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{`x${item.amount}`}</p>
                        <p className={classes.Desc}>Amount: Rs {item.price}</p>
                    </div>
                )

        });

        const totalPrice = arrayOfValues.reduce((acc, item) => {
            return acc + (item.price*item.amount);
        }, 0);

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
                                    <p className={classes.Desc}>Total price: <span>{totalPrice}</span></p>
                                    <Link to="/thank"><button onClick={this.OnPlaceOrder}>Place Order</button></Link>
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