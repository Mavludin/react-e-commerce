import React from 'react';

import classes from '../../App.module.css'

const Preloader = (props) => {
 
    return (

        props.visible ?
        <div className={classes.Container}>
            <h1> Getting data... </h1>
        </div>
        :
        props.children

    )

}

export default Preloader;