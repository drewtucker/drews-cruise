import React from 'react';
import MediaQuery from 'react-responsive';

class DestinationInfo extends React.Component {
  
  constructor(props) {
    super(props);
      const {
        destination,
        destDescription,
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
  
  // TOGGLES FOR SHOWING/HIDING INFO and ACTIVITIES

  onInfoClick(e) {
    const description = document.getElementsByClassName('dest-description')[0];
    const title = document.getElementsByClassName('dest-description-title')[0];
    const wrapper = document.getElementsByClassName('dest-info-wrapper')[0];
    if(this.state.infoSelected === false){
      this.setState({infoSelected: true});
      e.currentTarget.style.height = '95vh';
      wrapper.style.cssText = 'height: 600px; margin-bottom: 50px;';
      description.style.cssText = 'height: 600px; display: block; overflow-y: scroll;' ;
      title.style.cssText = 'font-weight: bold;';
    }
    else {
      this.setState({infoSelected: false});
      e.currentTarget.style.height = '50px';
      if(this.state.activitiesSelected != true){
        wrapper.style.height = '200px';
      }
      description.style.cssText = 'height: 0%;';
      title.style.cssText = 'font-weight: normal;';
    }
  }

  onActivitiesClick(e) {
    const title = document.getElementsByClassName('dest-activities-title')[0];
    const bullets = document.getElementsByClassName('dest-activities-bullet-wrapper')[0];
    const wrapper = document.getElementsByClassName('dest-info-wrapper')[0];
    if(this.state.activitiesSelected === false){
      this.setState({activitiesSelected: true});
      e.currentTarget.style.height = '600px';
      wrapper.style.height = '600px';
      bullets.style.cssText = 'display: flex; flex-direction: column;';
      title.style.cssText = 'font-weight: bold;';
    }
    else { 
      this.setState({activitiesSelected: false});
      e.currentTarget.style.height = '70px';
      if(this.state.infoSelected != true) {
        wrapper.style.height = '200px';
      }
      bullets.style.cssText = 'display: none;';
      title.style.cssText = 'font-weight: normal;';
    }
  }


  render() {
    return (
      <div>
      <MediaQuery minWidth={400}>
        <div className='dest-info-wrapper'>

        <div className='info-box' onClick={this.onInfoClick.bind(this)}>
          <p className='dest-description-title'>About</p>
          <p className='dest-description'>{this.props.destDescription}</p>
        </div>

        <div className='dest-activities-wrapper' onClick={this.onActivitiesClick.bind(this)}>
          <p className='dest-activities-title'>Experiences</p>
          <ul className='dest-activities-bullet-wrapper'>
            <li className='dest-activities-bullet'>{this.props.activity1}</li>
            <li className='dest-activities-bullet'>{this.props.activity2}</li>
            <li className='dest-activities-bullet'>{this.props.activity3}</li>
            <li className='dest-activities-bullet'>{this.props.activity4}</li>
          </ul>
        </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={399}>
        <div className='mobile-wrapper'>
          <div className='mobile-info-wrapper'>
            <p className='mobile-info-title'>About</p>
            <p className='mobile-info-about'>{this.props.destDescription}</p>
          </div>
          <div className='mobile-activities-wrapper'>
            <p className='mobile-activities-title'>Experiences</p>
            <ul className='mobile-activities-bullet-wrapper'>
              <li className='mobile-activities-bullet'>{this.props.activity1}</li>
              <li className='mobile-activities-bullet'>{this.props.activity2}</li>
              <li className='mobile-activities-bullet'>{this.props.activity3}</li>
              <li className='mobile-activities-bullet'>{this.props.activity4}</li>
            </ul>
          </div>
        </div>
      </MediaQuery>
      <style>{`

        .mobile-wrapper {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .mobile-info-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 50%;
          width: 100%;
          background-color: #EDDE8F;
          align-items: center;
          text-align: center;
          font-size: 1rem;
        }

        .mobile-info-title {
          font-family: Montserrat, sans-serif;
          font-size: 2rem;
          font-weight: bold;
          border-bottom: 1px solid black;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border-top: 1px solid black;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          margin-top: 10px;
        }

        .mobile-info-about {
          font-weight: bold;
          font-family: Montserrat, sans-serif;

        }

        .mobile-activities-wrapper {
          height: 50%;
          width: 100%;
          background-color: #79BA67;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Montserrat, sans-serif;

        }

        .mobile-activities-title {
          font-family: Montserrat, sans-serif;
          font-size: 2rem;
          border-bottom: 1px solid black;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border-top: 1px solid black;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          font-weight: bold;
          margin-top: 10px;
        }
        
        .mobile-activities-bullet {
          list-style-type: square;
          justify-content: space-around;
          font-size: 1.1rem;
          font-weight: bold;
          margin: 20px 0px 20px 0px;
        }

        .dest-info-wrapper {
          width: 900px;
          height: 200px;
          display: flex;
          margin: auto;
          overflow: hidden;
          transition: height 1s;
        }
        
        .dest-activities-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 900px;
          height: 70px;
          max-width: 50vw;
          background-color: #79BA67;
          transition: height 0.8s;
          border-bottom-left-radius: 31px;
          border-bottom-right-radius: 31px;
          font-family: Montserrat, sans-serif;
          font-size: 2rem;
          cursor: pointer;
        }

        .dest-activities-bullet-wrapper {
          display: none;
          justify-content: space-around;
          font-size: 1.2rem;
          font-weight: bold;
          list-style-type: square;
          height: 100%;
        }

        .dest-activities-title:hover { 
          font-size: 2.1rem;
        }

        .dest-description {
          transition: height 1s;
          display: none;
          height: 0%;
          width: 100%;
          text-align: center;
          font-size: 1rem;
          font-weight: bold;

        }

        .dest-description-title:hover {
          font-size: 2.1rem;
        }

        .info-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 900px;
          height: 50px;
          max-width: 50vw;
          background-color: #EDDE8F;
          transition: height 1s;
          border-bottom-left-radius: 40px;
          font-family: Montserrat, sans-serif;
          font-size: 2rem;
        }
        
        .info-box:hover {
          cursor: pointer;
        }
        
        `}</style>      
    </div>
  );
}
}

export default DestinationInfo;