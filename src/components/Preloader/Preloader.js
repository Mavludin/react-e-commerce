import React from 'react';

import classes from './Preloader.module.css';

import preloaderIcon from '../../assets/images/preloader.gif';

export const Preloader = ({ visible, children }) => {

    return (
        visible ?
            <div className={classes.Preloader}>
                <img src={preloaderIcon} alt="Preloader Icon" />
            </div>
            :
            children
    )

}