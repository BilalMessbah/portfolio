import React from 'react';
import { Row, Col } from 'antd';
import Profil from './Profil';
import MenuCoter from './menu';

const Index = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Row >
                <Col span={6} >
                    <MenuCoter/>
                </Col>

                <Col span={12}>
                   
                    <a href="#intro">   
                       
                    </a>
                    <div className="form-group" id="intro">
                        <label>BIEN JOUER BG :</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Nom"
                        ></input>
                    </div>
                </Col>

                <Col span={6}>
                <Profil />
                </Col>
            </Row>
        </div>
    )
}
export default Index;