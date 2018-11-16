import React from 'react';
import MainCarousel from './MainCarousel';
import MainBanner from '../components/MainBanner';
import Greeting from '../components/Greeting';
import * as firebase from 'firebase';
import firebaseConfig from '../constants/firebaseConfig';

function HomePage() {

  return(
    <div>

    <div>
      <MainBanner />
    </div>
    <div id='home-page-wrapper' style={homePageStyles}>
    
    <Greeting />
      <div style={CarouselStyles}>
        <MainCarousel/>
      </div>
    </div>
    </div>
  );
}

export default HomePage;

var homePageStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#e3f2ff'
}

var CarouselStyles = {
  alignSelf: 'center',
  padding: '20px 0px 20px 0px',
}
