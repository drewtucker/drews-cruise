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
import newZealandCard from './../../img/new-zealand-card.jpg';
import norwayCard from './../../img/norway-card.jpg';
import thailandCard from './../../img/thailand-card.jpg';


const cards = { 'Alaska': alaskaCard, 'Caribbean': caribbeanCard, 'Cuba': cubaCard, 'Hawaii': hawaiiCard, 'New England': newEnglandCard, 'New Zealand': newZealandCard, 'Norway': norwayCard, 'Thailand': thailandCard,  };

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
            <p>Where to go?</p>
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
              z-index: 0;
              margin-top: 74px;
              width: 785px;
              height: 300px;
              overflow: hidden;
              border-radius: 2px;
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

            .sub-banner {
              margin: 20px;
              padding: 10px;
              border-radius: 2px;
              z-index: 0;
            }

            .sub-banner-text {
              color: #29293d;
              letter-spacing: 0.1px;
              font-size: 2.5rem;
              font-weight: bold;
              font-family: Montserrat, sans-serif;
            }

            .flex-container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              background-image: linear-gradient(to bottom, white, #b3e0ff);
              z-index: 0;
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
              transition: all 0.8s;
              color: black;
              text-shadow: 1px 1px 20px black;
              font-family: Montserrat, sans-serif;
              font-style: italic;
              font-weight: bold;
              letter-spacing: 0.5px;
            }
            
            .hover-content-button {
              background-color: #fff166;
              border-radius: 5px;
              border: 1px solid white;
              text-align: center;
              width: 0px;
              height: 0px;
              transition: height 0.8s, width 0.8s;
            }
            
            .hover-content p {
              margin: 0px;
              height: 0px;
              width: 0px;
              transition: height 0.8s, width 0.8s;
            }
            
            .hover-content-button i {
              margin-top: 3.75px;
              height: 0px; 
              width: 0px;
              transition: height 0.8s, width 0.8s;
            }

            .destination-card-standard:hover .hover-content {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 10;
              width: 350px;
              height: 175px;
            }
          
           .destination-card-standard:hover .hover-content-button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 200px;
              height: 50px;
            }

            .destination-card-standard:hover .hover-content-button-text {
              width: auto;
              height: auto;
            }

            .destination-card-standard:hover .hover-content-button i {
              width: auto;
              height: auto;
            }
            `}
          </style>
        </div>
    );
   }
  }


  export default DestinationsMain;
