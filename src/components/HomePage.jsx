import React from 'react';
import bgImage from '../img/single-boat-bg.jpeg';
import Carousel from '../components/Carousel.jsx';

function HomePage() {

  return(
    <div id='home-page-wrapper' style={homePageStyles}>
      <div style={CarouselStyles}>
        <Carousel/>
      </div>
    </div>
  );
}

export default HomePage;

var homePageStyles = {

  backgroundColor: 'darkgray',
  backgroundSize: 'cover',

  backgroundPosition: '80% 30%',
  width: '100vw',
  height: '100vw',
  paddingBottom: '200px',
}

var CarouselStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '10rem',
}
