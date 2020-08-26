import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './Header.module.css';
import mutualClasses from "../../App.module.css";

import avatar from '../../assets/images/avatar.jpg';

import Scroll from 'react-scroll';

import { withRouter, Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';

const TopBar = (props) => {

    const [hiddenMenuClasses, setHiddenMenuClasses] = useState([classes.HiddenMenu]);
    const [boxShadow, setBoxShadow] = useState('none');

    const totalCount = useSelector(state => state.totalCount)

    const overlay = React.createRef();

    const showHiddenMenu = () => {
        let updatedClasses = hiddenMenuClasses;
        updatedClasses = [classes.HiddenMenu, classes.ShowHiddenMenu].join(' ')
        setHiddenMenuClasses(updatedClasses)
        overlay.current.style.display = 'block';
    }

    const closeHiddenMenu = () => {
        let updatedClasses = hiddenMenuClasses;
        updatedClasses = [classes.HiddenMenu];
        setHiddenMenuClasses(updatedClasses)
        overlay.current.style.display = 'none';
    }

    const scrollToClothing = () => {
        if (props.location.pathname !== "/") {
            props.history.push('/');
            setTimeout(() => Scroll.animateScroll.scrollTo(parseInt(props.clothes.current.offsetTop - 90)), 500)
        } else Scroll.animateScroll.scrollTo(parseInt(props.clothes.current.offsetTop - 90));
    }

    const scrollToAccessories = () => {
        if (props.location.pathname !== "/") {
            props.history.push('/');
            setTimeout(() => Scroll.animateScroll.scrollTo(parseInt(props.accessories.current.offsetTop - 90)), 500)
        } else Scroll.animateScroll.scrollTo(parseInt(props.accessories.current.offsetTop - 90));
    }

    const ifCartNotEmpty = (e) => {
        if (props.totCount === 0) {
            e.preventDefault();
        }
    }

    const handleBoxShadow = () => {
        if (window.scrollY > 0 && window.innerWidth >= 600) {
            setBoxShadow('rgb(204, 204, 204) 0px 2px 10px')
        } else {
            setBoxShadow('none')
        }
    }

    useEffect(()=>{

        window.addEventListener('scroll', handleBoxShadow)

        return () => window.removeEventListener('scroll', handleBoxShadow)

    }, [boxShadow])

    let counterClass = "";

    if (localStorage[('amountOfProducts')] > 0) {
        counterClass = classes.Counter;
    }

    return (

        <header style={{ boxShadow: boxShadow }}>

            <div className={[mutualClasses.Container, classes.HeaderWrap].join(' ')}>

                <div onClick={showHiddenMenu} className={classes.Hamb}>
                    <div className={classes.Bar1}></div>
                    <div className={classes.Bar2}></div>
                    <div className={classes.Bar3}></div>
                </div>

                <div className={classes.HiddenCart}>

                    <Link onClick={(e) => ifCartNotEmpty(e)} to='/checkout'>
                        <ShoppingCartIcon />
                        <span className={counterClass}>
                            {totalCount > 0 ? totalCount : localStorage[('amountOfProducts')]}
                        </span>
                    </Link>

                    <img className={classes.Avatar} src={avatar} alt="Avatar" />
                </div>

                <div className={hiddenMenuClasses}>

                    <div className={classes.Logo}>
                        <Link onClick={closeHiddenMenu} to="/">Shop<span>Lane</span></Link>
                    </div>
                    <nav className={classes.TopMenu}>
                        <ul>
                            <li><Link onClick={() => { closeHiddenMenu(); scrollToClothing() }} to="/">Clothing</Link></li>
                            <li><Link onClick={() => { closeHiddenMenu(); scrollToAccessories() }} to="/">Accessories</Link></li>
                        </ul>
                    </nav>

                    <div onClick={closeHiddenMenu}>
                        <HighlightOffIcon />
                    </div>

                    <form>
                        <SearchIcon />
                        <input type="search" name="search" placeholder="Search for Clothing and Accessories" />
                    </form>

                </div>

                <div className={classes.HeaderLeft}>

                    <div className={classes.Logo}>
                        <Link to="/">Shop<span>Lane</span></Link>
                    </div>
                    <nav className={classes.TopMenu}>
                        <ul>
                            <li><Link onClick={scrollToClothing} to="/">Clothing</Link></li>
                            <li><Link onClick={scrollToAccessories} to="/">Accessories</Link></li>
                        </ul>
                    </nav>

                </div>

                <div className={classes.HeaderRight}>

                    <form>
                        <SearchIcon />
                        <input type="search" name="search" placeholder="Search for Clothing and Accessories" />
                    </form>

                    <div className={classes.Cart}>

                        <Link onClick={(e) => ifCartNotEmpty(e)} to='/checkout'>
                            <ShoppingCartIcon />
                            <span className={counterClass}>
                                {totalCount > 0 ? totalCount : localStorage[('amountOfProducts')]}
                            </span>
                        </Link>

                        <img className={classes.Avatar} src={avatar} alt="Avatar" />
                    </div>

                </div>

            </div>

            <div ref={overlay} onClick={closeHiddenMenu} className={classes.Overlay}></div>

        </header>

    );
}

export const Header = withRouter(TopBar)