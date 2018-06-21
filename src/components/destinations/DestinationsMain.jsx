import React from 'react';
import alaskaCard from '../../img/alaska-card.jpg';
import caribbeanCard from '../../img/caribbean-card.jpg';
import destinationsBG from '../../img/destinations-bg.jpg';
import hawaiiCard from '../../img/hawaii-card.jpg';
import newEnglandCard from '../../img/new-england-card.jpg';
import norwayCard from '../../img/norway-card.jpg';
import thailandCard from '../../img/thailand-card.jpg';
import '../templateCSS.css';
import DestinationCard from './DestinationCard';

function DestinationsMain(){
  return(
    <div>
      <div id='destinations-background' style={backgroundStyles}>
        <div id='destinations-header'>
          <h3>Oh, Where to Go?</h3>
        </div>
        <div id='destinations-wrapper' className='flex-container'>
          <div>
          <DestinationCard image={alaskaCard} text={"Alaska"} />
          </div>
          <div>
            <DestinationCard image={caribbeanCard} text={"Caribbean"} />
          </div>
          <div>
            <DestinationCard image={hawaiiCard} text={"Hawaii"} />
          </div>
          <div>
            <DestinationCard image={newEnglandCard} text={"New England"} />
          </div>
          <div>
            <DestinationCard image={norwayCard} text={"Norway"} />
          </div>
          <div>
            <DestinationCard image={thailandCard} text={"Thailand"} />
          </div>
        </div>



        <style>{
            `

            img {
              height: 175px;
              width: 369px;
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
