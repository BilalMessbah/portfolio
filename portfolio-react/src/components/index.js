import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import 'normalize.css';

import Img from './img/profil/inspiration.jpg'

import Profil from './Profil';
import Navbar from './navbar';
import Estudio from './e-studio';
import Tweet from './tweet';
import SlideStudio from './slideStudio';
import SlideTweet from './slideTweet';
import Parcours from './parcours';
import Tech from './technos';

const Index = () => {
    return (
        <div style={{ backgroundColor: 'white' }} id={'home'}>
            <Navbar />
            <Row >
                <Col xxl={{ span: 18}} xl={{ span: 24}}  lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24}} xs={{ span: 24}}>
                    <Row >
                        <Col xxl={{ span: 12}} xl={{ span: 24}}  lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24}} xs={{ span: 24}}>
                            <img className="tech" src={Img}></img>
                        </Col>

                        <Col xxl={{ span: 12}} xl={{ span: 24}} xs={{ span: 24}}>
                            <Parcours />
                        </Col>
                    </Row>
                    <hr />
                <div id={'technos'}>
                <Tech />
                </div>
                
                </Col>
                <br></br>
                <Col xxl={{ span: 6}} xl={{ span: 24}}  lg={{ span: 24}} sm={{ span: 24}} xs={{ span: 24}}>
                    <Profil />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xl={{ span: 24}} id={'productions'} lg={{ span: 24}} md={{ span: 24}} xs={{ span: 24}}>
                    <SlideTweet />
                </Col>
                <Col  xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}} xs={{ span: 24}}>
                    <Tweet />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}} xs={{ span: 24}}>
                    <SlideStudio />
                </Col>
                <Col  xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}} xs={{ span: 24}}>
                    <Estudio />
                </Col>
            </Row>
        </div>
    )
}
export default Index;