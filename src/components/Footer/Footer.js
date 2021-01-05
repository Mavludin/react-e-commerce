import { Link } from 'react-router-dom';

import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={`container ${classes.Footer}`}>

        <div>
          <h3>Online store</h3>
          <ul>
            <li><Link to="/">Men clothing</Link></li>
            <li><Link to="/">Women clothing</Link></li>
            <li><Link to="/">Men accessories</Link></li>
            <li><Link to="/">Women accessories</Link></li>
          </ul>
        </div>

        <div>
          <h3>Online store</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Partners</h3>
          <ul>
            <li><Link to="/">Zara</Link></li>
            <li><Link to="/">Pantaloons</Link></li>
            <li><Link to="/">Levis</Link></li>
            <li><Link to="/">Ucb</Link></li>
            <li><Link to="/">+ Many more</Link></li>
          </ul>
        </div>
        <div>
          <h3>Address</h3>
          <ul>
            <li><Link to="/">Building 101</Link></li>
            <li><Link to="/">Central Avenue</Link></li>
            <li><Link to="/">LA - 902722</Link></li>
            <li><Link to="/">United States</Link></li>
          </ul>
        </div>

      </div>

    </footer>
  );
};