import React from 'react';
import MediaQuery from 'react-responsive';
import firebase from '../constants/firebaseConfig';

const storage = firebase.storage();
class MainBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ''
    };

  }
  componentDidMount() {
    const imageRef = storage.ref("/banners");
    imageRef.child('main-banner.jpg').getDownloadURL().then((url) => {
      this.setState({ imageURL: url })
    });
  }
  render() {

    return (
      <div>
      <div id='banner-image'>
        <img src={this.state.imageURL}></img>
        <div id='banner-sub-text-wrapper'>
        <MediaQuery minWidth={620}>
        <p className='banner-sub-text'>We'll take you there.</p>
        </MediaQuery>
        <MediaQuery maxWidth={619}>
        <p className='banner-sub-text-mobile'>We'll take you there.</p>
        </MediaQuery>
        </div>
      </div>
      <style>{`
        #banner-image img {
          width: 100%;
          margin-top: -35%;
          display: block;
          z-index: -1;
          overflow: hidden;
        }
        
        .banner-sub-text {
          z-index: 3;
          color: white;
          font-size: 5vw;
          text-shadow: 1px 1px 1px black;
        }
        
        .banner-sub-text-mobile {
          z-index: 3;
          color: white;
          font-size: 5vw;
          margin-bottom: 450px;
          text-shadow: 1px 1px 1px black;
        }
        
        #banner-sub-text-wrapper {
          font-family: Montserrat, sans-serif;
          display: flex;
          justify-content: center;
          width: 100%;
          bottom: 5%;
          position: absolute;
        }
        `}</style>
    </div>
  );
}

}

export default MainBanner;