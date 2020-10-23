import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import { Row, Col } from 'antd';

import Img1 from './img/Tweet_academie/Capture.PNG';
import Img2 from './img/Tweet_academie/Capture2.PNG';
import Img3 from './img/Tweet_academie/Capture3.PNG';
import Img4 from './img/Tweet_academie/Capture4.PNG';
import Img5 from './img/Tweet_academie/Capture5.PNG';
import Img6 from './img/Tweet_academie/Capture6.PNG';

export default class SlideTweet extends Component {
    render() {

        return (
            <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    infiniteScroll
                    enableHeading
                    media={{
                        '@media (max-width: 900px)': {
                            width: '600px',
                            height: '300px'
                        },
                        '@media (min-width: 900px)': {
                            width: '960px',
                            height: '600px'
                        }
                    }}
                >
                    <img src={Img1} alt='login' data-action="http://localhost/Premiere_annee/portfolio/portfolio/portfolio-react/src/components/img/Tweet_academie/Capture1.PNG" />
                    <img src={Img2} alt='home page' data-action="http://localhost/Premiere_annee/portfolio/portfolio/portfolio-react/src/components/img/Tweet_academie/Capture2.PNG" />
                    <img src={Img3} alt='dark theme/colors' data-action="http://localhost/Premiere_annee/portfolio/portfolio/portfolio-react/src/components/img/Tweet_academie/Capture3.PNG" />
                    <img src={Img4} alt='messagerie' data-action="http://localhost/Premiere_annee/portfolio/portfolio/portfolio-react/src/components/img/Tweet_academie/Capture4.PNG" />
                    <img src={Img5} alt='profil' data-action="http://localhost/Premiere_annee/portfolio/portfolio/portfolio-react/src/components/img/Tweet_academie/Capture5.PNG" />
                    <img src={Img6} alt='settings' data-action="http://localhost/Premiere_annee/portfolio/portfolio/portfolio-react/src/components/img/Tweet_academie/Capture6.PNG" />
                </Coverflow>
            </StyleRoot>
          //  document.querySelector('.example')
        );
    }
}