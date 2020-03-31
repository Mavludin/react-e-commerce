import React from 'react';

import classes from './Thank.module.css';
import mutualClasses from '../../App.module.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class Details extends React.Component {

    render() {
        return (
            <div className={[mutualClasses.Container, classes.Thank].join(' ')} >
                <CheckCircleIcon />
                <h1>Order Placed Successfully!!!</h1>
                <p className={classes.Desc}>We have sent you an email with the order details.</p>
            </div>
        );
    }
}

export default Details;