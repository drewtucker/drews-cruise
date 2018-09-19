import React from 'react';
import bgImage from '../img/single-boat-bg.jpeg';
import MainCarousel from './MainCarousel';

function HomePage() {

  return(
    <div id='home-page-wrapper' style={homePageStyles}>
      <div style={CarouselStyles}>
        <MainCarousel/>
      </div>
    </div>
  );
}

export default HomePage;

var homePageStyles = {

  backgroundColor: 'beige',
  backgroundSize: 'cover',

  backgroundPosition: '80% 30%',
  width: '100vw',
  height: '100vw',
  paddingBottom: '200px',
}

var CarouselStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
}
