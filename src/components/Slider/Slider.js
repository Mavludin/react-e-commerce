import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import classes from './Slider.module.css';

import One from '../../assets/images/1.png';
import Two from '../../assets/images/2.png';
import Three from '../../assets/images/3.png';
import Four from '../../assets/images/4.png';

export const Slider = () => {
    return (
        <Carousel
            showIndicators={false}
            autoPlay={true}
            className={classes.Slider}
        >
            <div>
                <img src={One} alt="First Slide" />
            </div>
            <div>
                <img src={Two} alt="Second Slide" />
            </div>
            <div>
                <img src={Three} alt="Third Slide" />
            </div>
            <div>
                <img src={Four} alt="Fourth Slide" />
            </div>
        </Carousel>
    );
}