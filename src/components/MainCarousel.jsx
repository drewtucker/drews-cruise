import React from 'react';
import Slider from 'react-slick';
import slide1 from './../img/carousel/italy.jpg';
import slide2 from './../img/carousel/globe.jpg';
import award from './../img/icons/award.png';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends React.Component {
  render() {

    var CarouselSettings = {
      controls: false,
      interval: 8000,
    }

    return(
      <div style={WrapperStyles}>
      <Carousel {...CarouselSettings}>
          <Carousel.Item>
            <img className='award' src={award} />
            <img  src={slide1} />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='hover-trigger'>
            <Link to='/destinations'>
            <p style={Slide2Text}>Explore with us</p>
            <div className='hover-content'>
              <p className='hover-caption'>See Destinations</p>
              <i className='material-icons'>arrow_forward_ios</i>
            </div>
            <img  src={slide2} />
            </Link>
          </Carousel.Item>
      </Carousel>
      <style>{`
          .hover-content {
            display: block;
            position: absolute;
            margin-top: 22%;
            width: 4%;
            background-color: darkgray;
            height: 40%;
            transition: width 1s;
            border: 0.5px solid white;
            border-left: none;
            border-right: 5px solid #60989C;
            border-radius: 1.5px;
            overflow: hidden;
            box-shadow: 4px 8px 16px 0px rgba(0,0,0,0.2);
          }

          .hover-trigger:hover .hover-content {
            display: block;
            position: absolute;
            width: 50%;
            z-index: 3;
          }

          .hover-trigger:hover .hover-caption {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .hover-caption {
            display: none;
            font-size: 3.8vw;
            font-family: Montserrat, sans-serif;
            font-weight: bold;
            font-style: italic;
            width: 100%;
            height: 100%;
            text-align: center;
            overflow: hidden;
            color: white;
            
          }

          .hover-content i {
            position: absolute;
            right: 0%;
            bottom: 45%;
            color: white;
            font-size: 15px;
          }

          .award {
            width: 30vw;
            z-index: 10;
            position: absolute;
            right: 30px;
            top: 20px;
          }
      `}</style>
      </div>
    )
  }
}

var WrapperStyles = {
  maxWidth: '750px',
  minWidth: '300px', 
  backgroundColor: 'darkgray',
  padding: '0px',
  borderRadius: '2px'
  
}

var Slide1Text = {

}

var Slide2Text = {
  position: 'fixed',
  width: '100%',
  margin: 'auto',
  fontSize: '5em',
  color: 'white',
  textShadow: '1px 1px 2px black',
  fontFamily: 'tempo, sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
}


export default MainCarousel;