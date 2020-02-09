import React from 'react';

import classes from './HomePage.module.css';
import mutualClasses from '../../App.module.css';

import { Link } from 'react-router-dom';
import { getProductDataForHomePage } from '../../Utils/APIController';
import Preloader from '../../Components/Preloader/Preloader';

import Slider from '../../Components/Slider/Slider';

class HomePage extends React.Component {

    setMainTagMarginTop = () => {
        const headerHeight = window.getComputedStyle(document.querySelector('header')).height;
        const mainTag = document.querySelector('main');
        mainTag.style.marginTop = headerHeight;
    }

    state = {
        ProductData: [],
        amountOfProducts: 0,
        showLoader: true
    }

    componentDidMount() {
        getProductDataForHomePage()
            .then(response => {
                console.log(response)
                this.setState({ ProductData: response, showLoader: false })
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

            <main>
                
                <Preloader visible={this.state.showLoader} > 
                
                    <div className={mutualClasses.Container}>

                        <Slider />

                        <div className={classes.Products}>

                            <h1 ref={this.props.clothes} className={classes.ClothesHeading}>Clothing for Men and Women</h1>

                            <div className={classes.Clothes}>
                                {clothesDataRender}
                            </div>

                            <h2 ref={this.props.accessories} className={classes.AccessoriesHeading}>Accessories for Men and Women</h2>

                            <div className={classes.Accessories}>
                                {AccessoriesDataRender}
                            </div>

                        </div>

                    </div>

                </Preloader>

            </main>

        )
    }
}

export default HomePage;