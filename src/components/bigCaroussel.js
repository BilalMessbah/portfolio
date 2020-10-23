import React, { Component } from 'react';
import { Carousel } from 'antd';
import Img1 from './img/e-studio/react-js.png';
import Img2 from './img/e-studio/Node.svg';

import Caroussel from './caroussel';
import Caroussel2 from './caroussel2';

export default class BigCaroussel extends React.Component {
    onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    render() {
        return (
            <div >
                <link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css"></link>
                <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css"></link>
                <Carousel autoplay>
                    <div>
                        <Caroussel />
                    </div>
                    <div>
                        <Caroussel2 />
                    </div>
                </Carousel>
            </div>
        );
    }
}