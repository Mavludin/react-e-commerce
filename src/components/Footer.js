import React from "react";

import classes from "../modules/Footer.module.css";
import mutualClasses from "../modules/App.module.css";

const Footer = () => {
  return (
    <footer>

      <div className={[mutualClasses.Container, classes.FooterWrap].join(" ")}>

        <div>
          <h3>Online store</h3>
          <ul>
            <li><a href="/#">Men clothing</a></li>
            <li><a href="/#">Women clothing</a></li>
            <li><a href="/#">Men accessories</a></li>
            <li><a href="/#">Women accessories</a></li>
          </ul>
        </div>

        <div>
          <h3>Online store</h3>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Partners</h3>
          <ul>
            <li><a href="/#">Zara</a></li>
            <li><a href="/#">Pantaloons</a></li>
            <li><a href="/#">Levis</a></li>
            <li><a href="/#">Ucb</a></li>
            <li><a href="/#">+ Many more</a></li>
          </ul>
        </div>
        <div>
          <h3>Address</h3>
          <ul>
            <li><a href="/#">Building 101</a></li>
            <li><a href="/#">Central Avenue</a></li>
            <li><a href="/#">LA - 902722</a></li>
            <li><a href="/#">United States</a></li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
