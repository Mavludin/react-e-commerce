import React from 'react';
import {connect} from 'react-redux';

import classes from './Header.module.css';
import mutualClasses from "../../App.module.css";

import { Link } from 'react-router-dom';

import avatar from '../../img/avatar.jpg';

class Header extends React.Component {

    state = {
        hiddenMenuClasses : [classes.HiddenMenu],
        boxShadow: 'none'
    }

    showHiddenMenu = () => {
        let updatedClasses = this.state.hiddenMenuClasses;
        updatedClasses = [classes.HiddenMenu, classes.ShowHiddenMenu].join(' ')
        this.setState({hiddenMenuClasses: updatedClasses})
    }

    closeHiddenMenu = () => {
        let updatedClasses = this.state.hiddenMenuClasses;
        updatedClasses = [classes.HiddenMenu];
        this.setState({hiddenMenuClasses: updatedClasses})
    }

    listenScrollEvent = e => {
        if (window.scrollY > 10 && window.innerWidth >= 600) {
          this.setState({boxShadow: 'rgb(204, 204, 204) 0px 2px 10px'})
        } else {
          this.setState({boxShadow: 'none'})
        }
    }
    
    render() {

        let CounterClass = "";

        if (localStorage[('amountOfProducts')] > 0) {
            CounterClass = classes.Counter;
        }

        return (

            <header style={{boxShadow: this.state.boxShadow}}>

                <div className={[mutualClasses.Container, classes.HeaderWrap].join(' ')}>

                    <div onClick={this.showHiddenMenu} className={classes.Hamb}>
                        <div className={classes.Bar1}></div>
                        <div className={classes.Bar2}></div>
                        <div className={classes.Bar3}></div>
                    </div>

                    <div className={classes.HiddenCart}>

                        <Link to='/checkout'>
                            <i className="fas fa-cart-arrow-down" >
                                <span className={CounterClass}>
                                    {this.props.totCount > 0 ? this.props.totCount : localStorage[('amountOfProducts')]}
                                </span></i>
                        </Link>

                        <img className={classes.Avatar} src={avatar} alt="Avatar" />
                    </div>


                    <div className={this.state.hiddenMenuClasses}>

                        <div className={classes.Logo}>
                            <Link to="/">Shop<span>Lane</span></Link>
                        </div>
                        <nav className={classes.TopMenu}>
                            <ul>
                            <li><Link to="/">Clothing</Link></li>
                            <li><Link to="/">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div onClick={this.closeHiddenMenu}>
                            <i className="fas fa-window-close"></i>
                        </div>

                        <form>
                            <i className="fas fa-search"></i>
                            <input type="search" name="search" placeholder="Search for Clothing and Accessories" />
                        </form>

                    </div>

                    <div className={classes.HeaderLeft}>

                        <div className={classes.Logo}>
                            <Link to="/">Shop<span>Lane</span></Link>
                        </div>
                        <nav className={classes.TopMenu}>
                            <ul>
                                <li><Link to="/">Clothing</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                            </ul>
                        </nav>

                    </div>

                    <div className={classes.HeaderRight}>

                        <form>
                            <i className="fas fa-search"></i>
                            <input type="search" name="search" placeholder="Search for Clothing and Accessories" />
                        </form>

                        <div className={classes.Cart}>

                            <Link to='/checkout'>
                                <i className="fas fa-cart-arrow-down" >
                                    <span className={CounterClass}>
                                        {this.props.totCount > 0 ? this.props.totCount : localStorage[('amountOfProducts')]}
                                    </span>
                                </i>
                            </Link>

                            <img className={classes.Avatar} src={avatar} alt="Avatar" />
                        </div>

                    </div>

                </div>

            </header>
         
        );

    }
}

const mapGlobalStateToProps = (globalState) => {
    return {
        totCount: globalState.totalCount
    }
}

export default connect(mapGlobalStateToProps)(Header);
