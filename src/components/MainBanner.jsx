import React from 'react';
import bannerImg from '../img/main-banner.jpg';

function MainBanner() {
  return (
    <div>
      <div style={imageStyles} id='banner-image'>
        <p>Test</p>
        <img src={bannerImg}></img>
      </div>
      <style>{`
        #banner-image img {
          width: 100%;
          margin-top: -35%;
          display: block;
          z-index: -1;
          
        }
      `}</style>
    </div>
  );
}


var imageStyles = {

}

export default MainBanner;