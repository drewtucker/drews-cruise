import React from 'react';

class DestinationCard extends React.Component {
  render() {
    const {
      image,
      text = '',

    } = this.props;

    return(
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '175px',
        width: '369px',
        margin: '0.5vw',
        zIndex: '0',
        border: '0.5px solid gray',
        }}>
        <img src={image} />

        <h2 style={{
          margin: '0',
          zIndex: '1',
          position: 'absolute',
          color: 'white',
          textShadow: '1px 1px 20px black',
          fontWeight: 'bold',}}>{text}</h2>
      </div>
    );
  }
}


export default DestinationCard;