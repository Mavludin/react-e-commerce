import React from 'react';

import classes from '../modules/Header.module.css';
import mutualClasses from '../modules/App.module.css';

import avatar from '../img/avatar.jpg';

const Header = () => {
  return (
        <header>

        <div className={[mutualClasses.Container, classes.HeaderWrap].join(' ')}>

            <div className={classes.HeaderLeft}>
                <div className={classes.Logo}>
                    <a href="/">Shop<span>Lane</span></a>
                </div>
                <nav className={classes.TopMenu}>
                    <ul>
                        <li><a href="#clothes-heading">Clothing</a></li>
                        <li><a href="#accessories-heading">Accessories</a></li>
                    </ul>
                </nav>
            </div>

            <div className={classes.HeaderRight}>

                <form>
                    <i className="fas fa-search"></i>
                    <input type="search" name="search" placeholder="Search for Clothing and Accessories" />
                </form>

                <div className={classes.Cart}>
                    <a href="checkout.html"><i className="fas fa-cart-arrow-down" ><span></span></i></a>
                    <img className={classes.Avatar} src={avatar} />
                </div>

            </div>

        </div>

    </header>
  );
}

export default Header;
