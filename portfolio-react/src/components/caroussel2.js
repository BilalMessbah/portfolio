import React, { Component } from 'react';
import { Carousel } from 'antd';
import Img1 from './img/Tweet_academie/Capture.PNG';
import Img2 from './img/Tweet_academie/Capture2.PNG';
import Img3 from './img/Tweet_academie/Capture3.PNG';
import Img4 from './img/Tweet_academie/Capture4.PNG';
import Img5 from './img/Tweet_academie/Capture5.PNG';
import Img6 from './img/Tweet_academie/Capture6.PNG';

const Caroussel2 = () => {
    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img class="fit-picture2" alt="example" src={Img1} />
                </div>
                <div>
                    <img class="fit-picture2" alt="example" src={Img2} />
                </div>
                <div>
                    <img class="fit-picture2" alt="example" src={Img3} />
                </div>
                <div>
                    <img class="fit-picture2" alt="example" src={Img4} />
                </div>
                <div>
                    <img class="fit-picture2" alt="example" src={Img5} />
                </div>
                <div>
                    <img class="fit-picture2" alt="example" src={Img6} />
                </div>
            </Carousel>
        </div>
    );
}
export default Caroussel2;