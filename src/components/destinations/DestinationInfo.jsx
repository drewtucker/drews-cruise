import React from 'react';
import MediaQuery from 'react-responsive';


class DestinationInfo extends React.Component {
  
  constructor(props) {
    super(props);
      const {
        destDescription = '',
        activity1,
        activity2,
        activity3,
        activity4,
      } = this.props;

    this.state = {
      infoSelected: false,
      activitiesSelected: false,
    }
  }
  
  // TOGGLES FOR SHOWING/HIDING INFO AND DESTINATIONS

  onInfoClick(e) {
    if(this.state.infoSelected === false){
      this.setState({infoSelected: true});
      e.currentTarget.style.height = '100%';
      const description = document.getElementsByClassName('dest-description')[0];
      description.style.cssText = 'height: 100%; display: block;';
    }
    else {
      this.setState({infoSelected: false});
      e.currentTarget.style.height = '20%';
      const description = document.getElementsByClassName('dest-description')[0];
      description.style.cssText = 'height: 0%;';
    }
  }

  onActivitiesClick(e) {
    if(this.state.activitiesSelected === false){
      this.setState({activitiesSelected: true});
      e.currentTarget.style.height = '100%';
    }
    else { 
      this.setState({activitiesSelected: false});
      e.currentTarget.style.height = '20%';
    }
  }


  render() {
    return (
      <div>
      <MediaQuery minWidth={400}>
        <div className='dest-info-wrapper'>

        <div className='info-box' onClick={this.onInfoClick.bind(this)}>
          <p>About</p>
          <p className='dest-description'>{this.props.destDescription}</p>
        </div>

        <div className='dest-activities-wrapper' onClick={this.onActivitiesClick.bind(this)}>
          <p>Experiences</p>
        </div>
        </div>
      </MediaQuery>
      <style>{`
        .dest-info-wrapper {
          width: 900px;
          height: 300px;
          display: flex;
          margin: auto;
        }
        
        .dest-activities-wrapper {
          display: flex;
          justify-content: center;
          width: 900px;
          height: 20%;
          max-width: 50vw;
          background-color: orange;
          transition: height 0.8s;
        }

        .dest-description {
          transition: height 0.8s;
          display: none;
          height: 0%;
        }

        .info-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 900px;
          height: 20%;
          max-width: 50vw;
          background-color: darkgray;
          transition: height 1s;
          margin-bottom: 50px;
        }
        
        .info-box:click {
          height: 100%;
        }
        
        `}</style>      
    </div>
  );
}
}

export default DestinationInfo;