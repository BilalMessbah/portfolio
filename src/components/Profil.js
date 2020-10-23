import React, { Component } from 'react';
import { Image, Card, Avatar, Layout, Row, Col, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, ContactsOutlined, PhoneOutlined, TagOutlined, DesktopOutlined } from '@ant-design/icons';
import Img from "./img/profil/profil.webp";
import Img2 from "./img/profil/blanc.png";
const { Header, Content, Sider } = Layout;

const { Meta } = Card;

export default class Profil extends Component {
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
        <Card

style={{
  padding: 0,
}}

        id="intro"
    cover={
      <img
        alt="example"
        src={Img}
        />
    }
    actions={[
      <>
      <strong><a className="desc" href="http://localhost/CV Bilal MESSBAH - EPITECH-min.pdf" target="_blank">Télécharger mon CV</a></strong>
        <Button className="btn" icon={<TagOutlined />} href="https://www.google.com/search?q=Paris+17" target="_blank">Paris 75017</Button><br></br>
        <Button className="btn" icon={<GithubOutlined />} href="https://github.com/BilalMessbah" target="_blank">github.com/BilalMessbah</Button><br></br>
        <Button className="btn" icon={<LinkedinOutlined />} href="https://linkedin.com/in/bilal-messbah" target="_blank">linkedin.com/in/bilal-messbah</Button><br></br>
        Clickez pour m'envoyer un mail : <Button className="ico" href="mailto:bilal.messbah@epitech.eu" ><ContactsOutlined />bilal.messbah@epitech.eu<br></br></Button>
        <div className="ico"><PhoneOutlined />0695836317<br></br></div>
    </>
      ]}
  >
    <Meta
      
       avatar={<img src={Img2} width={170} height={170}
      />} 
      
      title="Développeur/Intégrateur web"
      description={[
        <div className="desc">
          <h1><strong>BILAL MESSBAH</strong> <br></br></h1>
          Etudiant en développement web en recherche d'alternance <br></br>afin de simplifier les tâches de mes clients. <br></br><br></br>
          Centre d'interêt: sport, cinéma.<br></br>
          Anglais Niveau B2 <br></br> Allemand Niveau B1 <br></br> Arabe Niveau B1<br></br>
        </div>
      ]}
    />
    
  </Card>
  <Layout>
  <Content
          className="site-layout-background"
          style={{
            margin: 0,
            minHeight: 280,
          }}
        >
        </Content>
        </Layout>
      </>
    );
  }
}
