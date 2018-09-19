import React from 'react';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';
import DestinationCarousel from '../destinations/DestinationCarousel';

class DestinationPage extends React.Component {
  render() {
    const {
      title = '',
      bannerImage1,
      bannerImage2,
      bannerImage3,
      bannerImage4,
      description = '',
      activity1 = '',
      activity2 = '',
      activity3 = '',
      view,
    } = this.props;

    return (
      <div>
      <MediaQuery minWidth={200} id='dest-wrapper-standard'>
        <div style={wrapperStyles}>
        <DestinationCarousel title={title} image1={bannerImage1} image2={bannerImage2} image3={bannerImage3} image4={bannerImage4} />
        </div>
      </MediaQuery>
      <style>{`

        #dest-wrapper-standard {
          background-color: beige;
        }

      `}</style>
      </div>
      );
    }
};

var wrapperStyles = {
  margin: 'auto',
  maxWidth: '900px',
  marginTop: '50px',
}
export default DestinationPage;