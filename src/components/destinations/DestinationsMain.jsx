import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import alaskaCard from './../../img/alaska-card.jpg';
import caribbeanCard from './../../img/caribbean-card.jpg';
import cubaCard from './../../img/cuba-card.jpg';
import destinationsBanner from './../../img/destinations-banner.jpg';
import destinationsBG from './../../img/destinations-bg.jpg';
import hawaiiCard from './../../img/hawaii-card.jpg';
import newEnglandCard from './../../img/new-england-card.jpg';
import norwayCard from './../../img/norway-card.jpg';
import thailandCard from './../../img/thailand-card.jpg';


const cards = { 'Alaska': alaskaCard, 'Caribbean': caribbeanCard, 'Cuba': cubaCard, 'Hawaii': hawaiiCard, 'New England': newEnglandCard, 'Thailand': thailandCard, 'Norway': norwayCard, };

class DestinationsMain extends React.Component{
  render(){
    const {
      route,
    } = this.props;
  
  return(
    <div className='flex-container'>
      <MediaQuery maxWidth={737} className='mobile'>
      {Object.keys(cards).map(card => (
        <Link to={'/' + card}>
        <div key={card} className='destination-card-mobile'>
        <h2 className='destination-card-text'>{card}</h2>
        <img src={cards[card]} />
        </div>
        </Link>
      ))}
      </MediaQuery>
      <MediaQuery minWidth={738} >
      <div className='banner'>
      <div className='banner-text-wrapper'>
        <p>Destinations</p>
      </div>
      <img src={destinationsBanner}/>
      </div>
      <div className='sub-banner'>
        <div className='sub-banner-text'>
          
        </div>
      </div>
      <div className='standard'>
        {Object.keys(cards).map(card => (
          <Link to={'/' + card}>
          <div key={card} className='destination-card-standard'>
            <h2 className='destination-card-text'>{card}</h2>
            <img src={cards[card]} />
            <div className='hover-content'>
              <div className='hover-content-button'>
                <p className='hover-content-button-text'>Explore</p>
                <i className="material-icons">arrow_right</i>
              </div>
            </div>
          </div>
          </Link>
        ))}
        </div>
      </MediaQuery>



        <style>{
            `
            .banner {
              z-index: 1;
              margin-top: 74px;
              width: 785px;
              height: 300px;
              overflow: hidden;
              border-radius: 10px;
            }

            .banner img {
              width: 785px;
              height: 500px;
              padding-bottom: 50px;
            }

            .banner-text-wrapper {
              position: absolute;
              width: 750px;
              height: 300px;
              margin: auto;
            }

            .banner p {
              color: white;
              font-size: 60px;
              text-shadow: 1px 1px 20px black;
              letter-spacing: 1px;
              font-weight: bold;
              margin-left: 300px;
              margin-top: 100px;
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
            }

            .destination-card-standard:hover {
              opacity: 0.8;
            }

            .destination-card-standard:hover .hover-content {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 10;
              width: 100%;
            }
            
            .destination-card-standard:hover .hover-content-button {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: navy;
              width: 200px;
              height: 50px;
            }

            .mobile img {
              max-height: 175px;
              width: 300px;
            }

            .standard img {
              max-height: 175px;
              width: 50vw;
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
            
            .hover-content {
              display: none;
              width: 0px;
              transition: width 0.8s;
              color: white;
              text-shadow: 1px 1px 20px black;
              font-family: Montserrat, sans-serif;
              font-style: italic;
              letter-spacing: 0.5px;
            }
            
            .hover-content-button {
              border-radius: 5px;
              border: 1px solid white;
              text-align: center;
              width: 0px;
              transition: width 0.8s;
            }

            .hover-content p {
              margin: 0px;
            }

            .hover-content-button i {
              margin-top: 3.75px;
            }
            `}
          </style>
        </div>
    );
   }
  }


  export default DestinationsMain;
