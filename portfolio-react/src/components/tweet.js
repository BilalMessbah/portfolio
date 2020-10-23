import React from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card, Avatar, Col, Row } from 'antd';
import Icon, { createFromIconfontCN } from '@ant-design/icons';
import php from './img/Tweet_academie/php.png';
import poo from './img/Tweet_academie/phppoo.png';
import sql from './img/e-studio/mysql.png';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});
const { Meta } = Card;

export default class Tweet extends React.Component {

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
                                    <img className="logo-jsx" src={php}></img>
                                </Col>
                                <Col span={8}>
                                    <img className="logo-laravel" src={poo}></img>
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
                                <Avatar style={{ width: 80, height: 90 }} src={require('./img/Tweet_academie/twitter.png')} />
                            }
                            title="Tweet_academy"
                            description={[
                                <div>
                                    Réalisation d'une A.P.I faisant office de réseau social ayant les mêmes fonctionnalités que Twitter.<br></br>
                                Possibiliter de tweeter, commenter, liker, retweeter, pin un tweet... Ainsi qu'un un espace personnel afin de s'abonnés à d'autres comptes<br></br> Messagerie pour discuter ||
                                Dark theme/ couleur de la police: bleu, vert, violet, rouge<br></br>Projet réalisé entièrement en PHP orienté objet avec une architecture MVC. <br></br>
                                Voici les identifiants pour se connecter avec un compte visiteur :<br></br> pseudo : visitor, mdp: 12345678. Voici le lien pour s'y rendre <a href="http://tweet-academie-42.herokuapp.com/index.php" target="_blank">Twitter_academy A.P.I</a>
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