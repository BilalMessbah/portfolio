import React, { Component } from 'react';
import { Card, Avatar, Layout, Row, Col, Button } from 'antd';
import { ContactsOutlined, PhoneOutlined, TagOutlined, DesktopOutlined } from '@ant-design/icons';
import Img from "./profil.webp";
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
        id="intro"
    
    cover={
      <img
        alt="example"
        src={Img}
      />
    }
    actions={[
      
        <Button icon={<PhoneOutlined />}>0695836317</Button>
     
    
      ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Bilal Messbah"
      description="Je suis un développeur Web FullStack prêt à accélerer vos projets en alternance"
    />
  </Card>
  <Layout>
  <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            
    {/* <Row>
        <Col span={24} >
        <PhoneOutlined /> 0695836317<br></br>
        </Col>
        <Col span={24} >
        <TagOutlined /> 52 Rue Mstislav Rostropovitch 75017, Paris<br></br>
        </Col>
        <Col span={24} >
        <ContactsOutlined />bilal.messbah@epitech.eu<br></br>
        </Col>
        <Col span={24} >
        <ContactsOutlined />github.com/BilalMessbah<br></br>
        </Col>
        <Col span={24} >
        <ContactsOutlined />linkedin.com/in/bilal-messbah
        </Col>
    </Row> */}
        </Content>
        </Layout>
      </>
    );
  }
}
