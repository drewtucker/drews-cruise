import React from 'react';
import bannerImg from '../img/main-banner.jpg';
import MediaQuery from 'react-responsive';

function MainBanner() {
  return (
    <div>
      <div style={imageStyles} id='banner-image'>
        <img src={bannerImg}></img>
        <div id='banner-sub-text-wrapper'>
        <MediaQuery minWidth={620}>
        <p className='banner-sub-text'>We'll take you there.</p>
        </MediaQuery>
        <MediaQuery maxWidth={619}>
        <p className='banner-sub-text-mobile'>We'll take you there.</p>
        </MediaQuery>
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
          text-shadow: 1px 1px 1px black;
        }

        .banner-sub-text-mobile {
          z-index: 3;
          color: white;
          font-size: 5vw;
          margin-bottom: 450px;
          text-shadow: 1px 1px 1px black;
        }

        #banner-sub-text-wrapper {
          font-family: Montserrat, sans-serif;
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