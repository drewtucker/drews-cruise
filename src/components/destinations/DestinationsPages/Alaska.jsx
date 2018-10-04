import React from 'react';
import DestinationPage from '../DestinationPage.jsx';
import alaska1 from '../../../img/banner/alaska1.jpg';
import alaska2 from '../../../img/banner/alaska2.jpg';
import alaska3 from '../../../img/banner/alaska3.jpg';
import alaska4 from '../../../img/banner/alaska4.jpg';
import * as firebase from 'firebase';
import firebaseConfig from '../../../firebase/firebaseConfig.js';

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

class Alaska extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "test",
      activity1: "",
      activity2: "",
      activity3: "",
      activity4: "",
    };

  }
  
  componentDidMount() {
    const descrRef = db.ref("/casimir-cruises/destinations/alaska/about");
    const activityRef = db.ref("casimir-cruises/destinations/alaska/activities");
    let descr = [];
    let activities = [];
    // QUERY DATABASE TO RETRIEVE DESTINATION INFO AND UPDATE STATE WITH NEW DATA
    descrRef.once('value', (snapshot) => {
      descr.push(snapshot.val());
      this.setState({description: descr[0]});
    });
    activityRef.once('value', (snapshot) => {
      snapshot.forEach((activity) => {
        activities.push(activity.val());
      });
      this.setState({
        activity1: activities[0],
        activity2: activities[1],
        activity3: activities[2],
        activity4: activities[3],
      })
    })    
  }
  
  render(){
    
    const {
      title = 'Alaska',
    } = this.props;

    return (
    // PROPS DISTRIBUTED TO DESTINATIONPAGE COMPONENT
    <DestinationPage 
      title={title} 
      description={this.state.description} 
      activity1={this.state.activity1} 
      activity2={this.state.activity2}
      activity3={this.state.activity3}
      activity4={this.state.activity4}
      bannerImage1={alaska1} 
      bannerImage2={alaska2} 
      bannerImage3={alaska3} 
      bannerImage4={alaska4}
      />
  )
};

}

export default Alaska;