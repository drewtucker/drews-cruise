import React from 'react';
import MediaQuery from 'react-responsive';
import alaskaCard from '../img/alaska-card.jpg';
import caribbeanCard from '../img/caribbean-card.jpg';
import hawaiiCard from '../img/hawaii-card.jpg';
import newEnglandCard from '../img/new-england-card.jpg';
import thailandCard from '../img/thailand-card.jpg';
import norwayCard from '../img/norway-card.jpg';
import cubaCard from '../img/cuba-card.jpg';
import destinationsBG from '../img/destinations-bg.jpg';
import destinationsBanner from '../img/destinations-banner.jpg';


const cards = { 'Alaska': alaskaCard, 'Caribbean': caribbeanCard, 'Hawaii': hawaiiCard, 'New England': newEnglandCard, 'Thailand': thailandCard, 'Norway': norwayCard, 'Cuba': cubaCard};

function DestinationsMain(){
  return(
    <div className='flex-container'>
      <MediaQuery maxWidth={737} className='mobile'>
      {Object.keys(cards).map(card => (
        <div key={card} className='destination-card-mobile'>
        <h2 className='destination-card-text'>{card}</h2>
        <img src={cards[card]} />
        </div>
      ))}
      </MediaQuery>
      <MediaQuery minWidth={738} >
      <div className='banner'>
      <p>Destinations</p>
      <img src={destinationsBanner}/>
      </div>
      <div className='standard'>
        {Object.keys(cards).map(card => (
          <div key={card} className='destination-card-standard'>
            <h2 className='destination-card-text'>{card}</h2>
            <img src={cards[card]} />
          </div>
        ))}
        </div>
      </MediaQuery>



        <style>{
            `

          

            .banner {
              align-self: center;
              z-index: 1;
              border-left: 5px solid black;
              outline: 5px solid gray;
              padding: 10px;
            }

            .banner img {
              max-width: 785px;
            }

            .banner p {
              display: inline;
              color: white;
              font-size: 60px;
              text-shadow: 1px 1px 1px black;
              letter-spacing: 1.5px;
              font-weight: bold;
              left: 250px;
              top: 250px;
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
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            .mobile {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding: 5px;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            .destination-card-mobile {
              display: flex;
              justify-content: center;
              align-items: center;
              max-height: 175px;
              max-width: 350px;
              margin: 5px;
              background-color: white;
              z-index: 0;
              border: 0.5px solid gray;
            }

            .destination-card-mobile:hover {
              opacity: 0.8;
              border: 2px solid orange;
            }

            .destination-card-standard:hover {
              opacity: 0.8;
              border: 2px solid orange;
            }

            .mobile img {
              max-height: 175px;
              width: 100vw;
            }

            .standard img {
              max-height: 175px;
              width: 100vw;
            }

            .standard {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              max-width: 785px;
              background-color: lightgray;
              border-radius: 10px;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            .destination-card-standard {
              display: flex;
              justify-content: center;
              align-items: center;
              max-height: 175px;
              width: 350px;
              margin: 5px;
              background-color: white;
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
