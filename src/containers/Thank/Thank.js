import React from 'react';

import classes from './Thank.module.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const Thank = () => {
    return (
        <React.Fragment>
            <CheckCircleIcon />
            <h1>Order Placed Successfully!!!</h1>
            <p className={classes.Desc}>We have sent you an email with the order details.</p>
        </React.Fragment>
    );
}