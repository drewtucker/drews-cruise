import React from 'react';
import bgImage from '../img/single-boat-bg.jpeg';
import MainCarousel from './MainCarousel';
import MainBanner from '../components/MainBanner';
import Greeting from '../components/Greeting';

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
  backgroundColor: 'lightgray'
}

var CarouselStyles = {
  alignSelf: 'center',
  padding: '20px 0px 20px 0px',
}
