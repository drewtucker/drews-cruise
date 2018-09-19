import React from 'react';
import bgImage from '../img/single-boat-bg.jpeg';
import MainCarousel from './MainCarousel';
import MainBanner from '../components/MainBanner';


function HomePage() {

  return(
    <div>

    <div>
      <MainBanner />
    </div>
    <div id='home-page-wrapper' style={homePageStyles}>
    <div>
    </div>
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
  justifyContent: 'center',
  alignItems: 'center',
}

var CarouselStyles = {
  alignSelf: 'center',
  padding: '20px 0px 20px 0px',
}
