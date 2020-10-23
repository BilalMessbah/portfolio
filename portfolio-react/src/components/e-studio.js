import React from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card, Avatar, Row, Col } from 'antd';
import Icon, { createFromIconfontCN } from '@ant-design/icons';
import jsx from './img/e-studio/jsx.png';
import laravel from './img/e-studio/laravel.png';
import sql from './img/e-studio/mysql.png';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});
const { Meta } = Card;

export default class Estudio extends React.Component {

    state = {
        loading: true,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <Switch checked={!loading} onChange={this.onChange} />

                <Card
                    style={{ display: 'contents', width: '100%', height: 300, marginTop: 0 }}
                    actions={[
                        <>
                       <Row>
                                <Col span={8}>
                                    <img className="logo-jsx" src={jsx}></img>
                                </Col>
                                <Col span={8}>
                                    <img className="logo-laravel" src={laravel}></img>
                                </Col>
                                <Col span={8}>
                                    <img className="logo-sql" src={sql}></img>
                                </Col>
                            </Row>
                        </>
                    ]}
                >
                    <Skeleton loading={loading} avatar active>

                        <Meta
                            avatar={
                                <Avatar style={{ width: 100, height: 100 }} src={require('./img/e-studio/E_STUDIO1.png')} />
                            }
                            title="E-commerce / E-studio"
                            description={[
                                <div>
                                    Realisation d'un site e-commerce à l'aide de professeurs de l'école de marketting ESSEC. Mise en relation entre particulier et labels/agences de studios pour location de studios d'enregistrements.
                            <br></br>Paiements : Stripe / Paypal<br></br>
                            Connection: authentification / facebook<br></br>
                            Panel Administrateur<br></br>
                            Techno : Laravel/Reactjs
                                </div>
                            ]}
                        />
                    </Skeleton>
                </Card>
                {/* <div className="icons-list">
                     <IconFont type="icon-javascript" ></IconFont> 
                </div> */}
            </>
        );
    }
}