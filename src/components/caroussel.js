import React, { Component } from 'react';
import { Carousel } from 'antd';
import Img1 from './img/e-studio/react-js.png';
import Img2 from './img/e-studio/Node.svg';


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Caroussel = () => {
   const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

        return (
            <div >
            <Carousel autoplay>
                <div>
                <img class="fit-picture1" alt="example" src={Img1} />
                </div>
                <div>
                <img class="fit-picture1" alt="example" src={Img2} />
                </div>
            </Carousel>
            </div>
        );
}
export default Caroussel;