import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';


export default class Parcours extends Component {
    render() {
        return (
            <>
                <Row>
                  
                    <Col xxl={{ span: 24 }} xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}}>
                        <h3>Bonjour et Bienvenue dans mon portfolio</h3>
                        <hr className="hr"></hr>
                        <p>
                            Bonjour et bienvenue dans mon portfolio, Je suis Bilal Messbah, intégrateur-développeur Web en formation de 2 ans au Samsung Campus by EPITECH.
                            Bonne visite!
                        </p>
                    </Col>
                </Row>

                <Row>
                   
                    <Col xxl={{ span: 24 }} xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}}>
                        <Divider style={{ color: 'red', fontWeight: 'bold' }}>Formation</Divider>
                        <p>
                            Samsung Campus, c’est une école pas comme les autres : une pédagogie par projets, un apprentissage collaboratif et une autonomie grandissante.
    <br></br>La deuxième année rime avec mise en application en entreprise :
    je suis donc à la recherche d’un contrat de professionnalisation de 12 mois à partir de novembre 2020 <br></br> avec un rythme de 3 semaines en entreprise et 1 en formation.
    <br></br><strong>DÉVELOPPEUR-INTÉGRATEUR WEB - TITRE NIVEAU III RNCP ( NIVEAU 5 EUROPÉEN) - BAC +2</strong>
                        </p>
                    </Col>
                </Row>

                <Row>
                    
                    <Col xxl={{ span: 24 }} xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}}>
                        <Divider style={{ color: 'red', fontWeight: 'bold' }}>Diplôme</Divider>
                        <p>
                            Niveau Bac S spécialité science de l'ingénieur option informatique et science du numérique.</p>
                    </Col>
                </Row>

                <Row>
                  
                    <Col xxl={{ span: 24 }} xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}}>
                        <Divider orientation="left" style={{ color: 'red', fontWeight: 'bold' }}>
                            Interêt professionnel
    </Divider>
                        <p>
                            Pour moi le code c’est simplifier les taches des utilisateurs, être au service du client est la raison primaire pour les différents langages que nous utilisons.
    <br></br>Une entreprise qui met l'accent sur ses clients est un plus!
    </p>
                    </Col>
                </Row>

                <Row>
                    
                    <Col xxl={{ span: 24 }} xl={{ span: 24}} lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24}} xs={{ span: 24}}>
                        <Divider orientation="right" style={{ color: 'red', fontWeight: 'bold' }}>
                            Expériences professionnelles
    </Divider>
                        <p>
                            Responsable transports | Start Shuttle : 2017 - 2019<br></br>
      Préparateur de commande | Amazon : 2019 <br></br>
      Suivez mes projets disponibles sur GitHub :D
    </p>
                    </Col>
                </Row>
            </>
        )
    }
}