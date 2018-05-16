import React from 'react';
import bgImage from '../img/single-boat-bg.jpeg';


function HomePage() {

  return(
    <div id='home-page-wrapper' style={homePageStyles}>
      <div>

      </div>
    </div>
  );
}

export default HomePage;

var homePageStyles = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  width: '100vw',
  height: '100vw'
}
