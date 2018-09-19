import React from 'react';
import Slider from 'react-slick';
import slide1 from './../img/carousel/italy.jpg';
import slide2 from './../img/carousel/globe.jpg';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends React.Component {
  render() {

    var CarouselSettings = {
      controls: false,
    }

    return(
      <div style={WrapperStyles}>
      <Carousel {...CarouselSettings}>
          <Carousel.Item>
            <img width={900} height={500} src={slide1} />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src={slide2} />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      </div>
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

export default MainCarousel;