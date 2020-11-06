import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import classes from './Checkout.module.css';
import { endpoints } from '../../utils/routerEndpoints';

export const Checkout = () => {

    const onOrderPlaced = useDispatch();

    const backToDetails = (id) => {
        window.open(`${endpoints.DETAILS}${id}`, "_self");
    }

    const onPlaceOrder = () => {
        localStorage.clear();
        onOrderPlaced({ type: 'ORDER_PLACED' });
    }

    let arrayOfValues = [];
    for (let i in localStorage) {
        if (localStorage.hasOwnProperty(i) && JSON.parse(localStorage[i]).amount) {
            arrayOfValues.push(JSON.parse(localStorage[i]));
        }

    }

    const arrayOfProducts = arrayOfValues.map(item => {

        return (
            <div onClick={() => backToDetails(item.id)} className={classes.Item} key={item.id}>
                <img src={item.thumbnail} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{`x${item.amount}`}</p>
                <p className={classes.Desc}>Amount: Rs {item.price}</p>
            </div>
        )

    });

    const totalPrice = arrayOfValues.reduce((acc, item) => {
        return acc + (item.price * item.amount);
    }, 0);

    return (
        <div className={classes.Checkout}>
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
                        <Link to={endpoints.THANK}><button onClick={onPlaceOrder}>Place Order</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}