import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import Img1 from './img/e-studio/logo.png';
import Img2 from './img/e-studio/login.PNG';
import Img3 from './img/e-studio/lorem.PNG';
import Img4 from './img/e-studio/register.PNG';
import Img5 from './img/e-studio/accueil.PNG';

export default class SlideStudio extends Component {
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
                    <img src={Img5} alt='home' data-action="http://localhost/Premiere_annee/portfolio/portfolio/src/components/img/e-studio/accueil.PNG" />
                    <img src={Img1} alt='logo' data-action="http://localhost/Premiere_annee/portfolio/portfolio/src/components/img/e-studio/logo.png" />
                    <img src={Img2} alt='login' data-action="http://localhost/Premiere_annee/portfolio/portfolio/src/components/img/e-studio/login.PNG" />
                    <img src={Img3} alt='description' data-action="http://localhost/Premiere_annee/portfolio/portfolio/src/components/img/e-studio/lorem.PNG" />
                    <img src={Img4} alt='register' data-action="http://localhost/Premiere_annee/portfolio/portfolio/src/components/img/e-studio/register.PNG" />
                </Coverflow>
            </StyleRoot>
            
          //  document.querySelector('.example_2')
        );
    }
}