import React from 'react';

import classes from './Preloader.module.css';

import preloaderIcon from '../../img/preloader.gif';

const Preloader = (props) => {

    return (

        props.visible ?
            <div className={classes.Preloader}>
                <img src={preloaderIcon} alt="Preloader Icon" />
            </div>
            :
            props.children

    )

}

export default Preloader;