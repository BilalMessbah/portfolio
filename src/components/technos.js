import React, { Component } from 'react';
import { Progress, Row, Col } from 'antd';

import Progress_user from './progress';

import php from './img/Tweet_academie/php2.png';
import css from './img/Tweet_academie/css.png';
import click from './img/Tweet_academie/click.png';
import react from './img/e-studio/reactjs-fill.png';
import node from './img/e-studio/Nodejs.png';
import sql from './img/e-studio/my-SQL.png';
import js from './img/e-studio/javascript.png';
import mangodb from './img/e-studio/mongodb.png';

export default class Tech extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={php} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={75} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={node} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={50} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={js} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={60} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={react} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={75} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={css} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={100} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={sql} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={80} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                        <img src={mangodb} className="tech"></img>
                        <hr />
                        <Progress type="circle" percent={80} />
                    </Col>

                    <Col xxl={{ span: 3}} xl={{ span: 3}} lg={{ span: 3}} md={{ span: 10}} sm={{ span: 12}} xs={{ span: 24}}>
                    <img src={click} className="tech"></img>
                        <hr />
                        <Progress_user />
                    </Col>
                </Row>
            </>
        )
    }
}