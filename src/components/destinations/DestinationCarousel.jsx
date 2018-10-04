import React from 'react';
import { Carousel } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

class DestinationCarousel extends React.Component {
  render() {

    const {
      title,
      image1,
      image2,
      image3,
      image4,
      caption1,
      caption2,
      caption3,
      caption4,
      subCap1,
      subCap2,
      subCap3,
      subCap4,
    } = this.props;



    return (
    <div>
      <MediaQuery minWidth={400} style={{paddingTop: '100px'}}></MediaQuery>
      <p style={CarouselTitle}>{title}</p>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} src={image1}/>
            <Carousel.Caption>
              <h3>{caption1}</h3>
              <p>{subCap1}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src={image2} />
            <Carousel.Caption>
              <h3>{caption2}</h3>
              <p>{subCap2}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src={image3} />
            <Carousel.Caption>
              <h3>{caption3}</h3>
              <p>{subCap3}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src={image4} />
            <Carousel.Caption>
              <h3>{caption4}</h3>
              <p>{subCap4}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
    )
  }
}

var CarouselTitle = {
  position: 'absolute',
  color: 'white',
  zIndex: '3',
  width: '100%',
  maxWidth: '900px',
  textAlign: 'center',
  marginTop: '5vw',
  textShadow: '1px 1px 5px black',
  fontFamily: 'Cinzel, serif',
  fontSize: '60px',
}

export default DestinationCarousel;