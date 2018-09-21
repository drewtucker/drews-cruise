import React from 'react';
import bannerImg from '../img/main-banner.jpg';

function MainBanner() {
  return (
    <div>
      <div style={imageStyles} id='banner-image'>
        <img src={bannerImg}></img>
        <div id='banner-sub-text-wrapper'>
        <p className='banner-sub-text'>We'll take you there.</p>
        </div>
      </div>
      <style>{`
        #banner-image img {
          width: 100%;
          margin-top: -35%;
          display: block;
          z-index: -1;
          overflow: hidden;
        }

        .banner-sub-text {
          z-index: 3;
          color: white;
          font-size: 5vw;
        }

        #banner-sub-text-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          bottom: 5%;
          position: absolute;
        }
      `}</style>
    </div>
  );
}


var imageStyles = {

}

export default MainBanner;