import React from 'react';
import alaskaCard from '../img/alaska-card.jpg';
import caribbeanCard from '../img/caribbean-card.jpg';
import hawaiiCard from '../img/hawaii-card.jpg';
import newEnglandCard from '../img/new-england-card.jpg';
import thailandCard from '../img/thailand-card.jpg';
import norwayCard from '../img/norway-card.jpg';
import cubaCard from '../img/cuba-card.jpg';

import destinationsBG from '../img/destinations-bg.jpg';

function DestinationsMain(){
  return(
    <div>
      <div id='destinations-background' style={backgroundStyles}>
        <div id='destinations-header'>
          <h3>Oh, Where to Go?</h3>
        </div>
        <div id='destinations-wrapper' className='flex-container'>
            <div className='destination-card'>
              <h2 className='destination-card-text'>Alaska</h2>
              <img src={alaskaCard}></img>
            </div>
            <div className='destination-card'>
              <h2 className='destination-card-text'>Caribbean</h2>
              <img src={caribbeanCard}></img>
            </div>
            <div className='destination-card'>
              <h2 className='destination-card-text'>Thailand</h2>
              <img src={thailandCard}></img>
            </div>
            <div className='destination-card'>
              <h2 className='destination-card-text'>Hawaii</h2>
              <img src={hawaiiCard}></img>
            </div>
            <div className='destination-card'>
              <h2 className='destination-card-text'>New England</h2>
              <img src={newEnglandCard}></img>
            </div>
            <div className='destination-card'>
              <h2 className='destination-card-text'>Norway</h2>
              <img src={norwayCard}></img>
            </div>
            <div className='destination-card'>
              <h2 className='destination-card-text'>Cuba</h2>
              <img src={cubaCard}></img>
            </div>
            <div className='destination-card'>
              <img src={alaskaCard}></img>
            </div>
            <div className='destination-card'>

              <img src={caribbeanCard}></img>
            </div>
        </div>



        <style>{
            `

            img {
              height: 175px;
              width: 369px;
            }

            #destinations-header {
              display: flex;
              justify-content: center;
              position: relative;
              left: 33%;
              width: 33%;
              border-radius: 15px;
              color: white;
              padding-top: 5vw;
            }
            .flex-container {
              @media screen and (max-width: 800px) {
                    background-color: pink;
                };
              position: absolute;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding: 0.5vw;
              left: 7%;
              right: 7%;
              background-color: white;
              border-radius: 15px;
              border: 1px solid lightgray;
            }

            .destination-card {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 175px;
              width: 369px;
              margin: 0.5vw;
              background-color: orange;
              z-index: 0;
              border: 0.5px solid gray;
            }
            .destination-card-text {
              margin: 0;
              z-index: 1;
              position: absolute;
              color: white;
              text-shadow: 1px 1px 20px black;
              font-weight: bold;
            }
            #destinations-background {
              background-image: url(${destinationsBG});            background-position: 10% 0%;
              height: 100%;
              width: 100%;
            }`}
          </style>
        </div>
      </div>
    );
  }

  var backgroundStyles = {
    backgroundImage: `url(${destinationsBG})`,
    backgroundSize: 'cover',
    backgroundPosition: '10% 0%',
    width: '100vw',
    height: '100vw',
  }

  export default DestinationsMain;
