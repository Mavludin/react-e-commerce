import React from 'react';

import classes from '../modules/HomePage.module.css';
import mutualClasses from '../modules/App.module.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

class HomePage extends React.Component {

    state = {
        ProductData: [],
        amountOfProducts: 0
    }

    componentDidMount() {
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
            .then(response => {
                console.log(response.data);

                this.setState({ ProductData: response.data})
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {

        const clothesDataRender = this.state.ProductData.map(item => {
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
            }


        });

        const AccessoriesDataRender = this.state.ProductData.map(item => {
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
            }
        });

        return (
            <div className="App">

                <Header />

                <main >

                    <div className={mutualClasses.Container}>

                        <div className={classes.Products}>

                            <h1 className={classes.ClothesHeading}>Clothing for Men and Women</h1>

                            <div className={classes.Clothes}>
                                {clothesDataRender}
                            </div>

                            <h2 className={classes.AccessoriesHeading}>Accessories for Men and Women</h2>

                            <div className={classes.Accessories}>
                                {AccessoriesDataRender}
                            </div>

                        </div>

                    </div>

                </main>

                <Footer />

            </div>

        )
    }
}

export default HomePage;