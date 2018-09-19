import React from 'react';
import Slider from 'react-slick';
import slide1 from './../img/carousel/italy.jpg';
import slide2 from './../img/carousel/globe.jpg';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true, 
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      speed: 500,
      autoplaySpeed: 100000,
      centerMode: false,
    };

    return(
      <MediaQuery minWidth={600}>

      <div style={WrapperStyles}>
      <Slider {...settings}>
        <Link to='/'>
        <div>
          <p id='slide1Text'></p>
          <img src={slide1} style={Slide1Styles}></img>
        </div>
        </Link>
          <Link to='/destinations'>
        <div>
          <div style={slide2Banner}>
          <p style={slide2TextStyles}>Destinations</p>
          </div>
          <img src={slide2} style={GlobeStyles}></img>
        </div>
          </Link>
      </Slider>
      <style>{`
        .slick-list {
          width: auto;
          padding: 0px 0px;
        }
        `}</style>
      </div>
        </MediaQuery>
    )
  }
}

var WrapperStyles = {
  maxWidth: '750px',  
  backgroundColor: 'darkgray',
  padding: '0px',
  
}

var Slide1Styles = {
  maxWidth: '750px',
  margin: 'auto',
  paddingTop: '0px',
  marginTop: '0px',
  opacity: '1',
  zIndex: '1',
}

var GlobeStyles = {
  maxWidth: '750px',
  margin: 'auto',
  zIndex: '0.9',
}

var slide2Banner = {

}

var slide2TextStyles = {
  position: 'absolute',
  margin: '0px',
  top: '80px',
  left: '90px',
  color: 'white',
  fontSize: '50px',
  fontWeight: '50',
  letterSpacing: '1px',
  fontFamily: 'Arial, serif',

}

export default Carousel;