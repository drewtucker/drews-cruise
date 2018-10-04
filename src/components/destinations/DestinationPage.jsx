import React from 'react';
import MediaQuery from 'react-responsive';
import DestinationCarousel from '../destinations/DestinationCarousel';
import DestinationInfo from './DestinationInfo';


class DestinationPage extends React.Component {
  render() {

    const {
      title = '',
      bannerImage1,
      bannerImage2,
      bannerImage3,
      bannerImage4,
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula elit sed convallis ornare. Pellentesque sit amet sem et odio sagittis pretium vel vitae ante. Curabitur augue tortor, eleifend nec dolor eu, varius malesuada nisi. Quisque eu tellus ac tortor lacinia sodales. Proin rhoncus felis in convallis convallis. Sed ante tellus, consectetur eget lorem nec, hendrerit lacinia ante. Sed sed consequat massa, et consectetur lorem. Nam hendrerit in quam quis aliquam.Donec nec maximus nunc.Sed ac nisl quis lectus ultrices consequat in vitae arcu.In aliquet dui velit, at condimentum ante hendrerit bibendum.Nulla vel rutrum nulla, at feugiat neque.Maecenas vitae dui vitae nisi dictum bibendum et eu velit.Aliquam viverra mauris quis lacinia egestas.Duis consectetur, ex convallis efficitur mattis, mi arcu malesuada elit, sagittis condimentum ex nulla quis erat.Integer id convallis enim.Proin feugiat et est eget dignissim.',
      activity1 = '',
      activity2 = '',
      activity3 = '',
      activity4 = '',
      view,
    } = this.props;

    return (
      <div>
      <MediaQuery minWidth={200} id='dest-wrapper-standard'>
        <div style={wrapperStyles}>
        <DestinationCarousel title={title} image1={bannerImage1} image2={bannerImage2} image3={bannerImage3} image4={bannerImage4} />
        </div>
          <DestinationInfo destDescription={description} activity1={activity1} activity2={activity2} activity3={activity3} activity4={activity4} />
      </MediaQuery>
      <style>{`

        #dest-wrapper-standard {
          background-color: white;
        }

      `}</style>
      </div>
      );
    }
};

var wrapperStyles = {
  margin: 'auto',
  maxWidth: '900px',
}

export default DestinationPage;

