import React, { useState, useEffect } from 'react';

import classes from './HomePage.module.css';
import mutualClasses from '../../App.module.css';

import { Link } from 'react-router-dom';
import { getProductDataForHomePage } from '../../utils/APIController';
import {Preloader} from '../../components/Preloader/Preloader';

import {Slider} from '../../components/Slider/Slider';

export const HomePage = ({ clothes, accessories }) => {

    const [productData, setProductData] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        getProductDataForHomePage()
            .then(response => {
                setProductData(response);
                setShowLoader(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const clothesDataRender = productData.map(item => {
        if (!item.isAccessory) {
            return (
                <figure key={item.id} id={item.id}>
                    <Link to={`/details/${item.id}`}>
                        <img src={item.preview} alt={item.name} />
                    </Link>
                    <figcaption>
                        <h4>{item.name}</h4>
                        <p className={classes.Brand}>{item.brand}</p>
                        <p className={classes.Price}>{item.price}</p>
                    </figcaption>
                </figure>
            )
        } else return false;
    });

    const accessoriesDataRender = productData.map(item => {
        if (item.isAccessory) {
            return (
                <figure key={item.id} id={item.id}>
                    <Link to={`/details/${item.id}`}>
                        <img src={item.preview} alt={item.name} />
                    </Link>
                    <figcaption>
                        <h4>{item.name}</h4>
                        <p className={classes.Brand}>{item.brand}</p>
                        <p className={classes.Price}>{item.price}</p>
                    </figcaption>
                </figure>
            )
        } else return false;
    });

    return (

        <Preloader visible={showLoader} >

            <div className={mutualClasses.Container}>

                <Slider />

                <div className={classes.Products}>

                    <h1 ref={clothes} className={classes.ClothesHeading}>Clothing for Men and Women</h1>

                    <div className={classes.Clothes}>
                        {clothesDataRender}
                    </div>

                    <h2 ref={accessories} className={classes.AccessoriesHeading}>Accessories for Men and Women</h2>

                    <div className={classes.Accessories}>
                        {accessoriesDataRender}
                    </div>

                </div>

            </div>

        </Preloader>

    )
}