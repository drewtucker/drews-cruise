import React from 'react';
import DestinationPage from '../DestinationPage.jsx';
import * as firebase from 'firebase';

var db = firebase.database();
var storage = firebase.storage();

class NewEngland extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "test",
      activity1: "",
      activity2: "",
      activity3: "",
      activity4: "",
      image1: '',
      image2: '',
      image3: '',
      image4: ''
    };

  }

  componentDidMount() {
    const descrRef = db.ref("/casimir-cruises/destinations/new_england/about");
    const activityRef = db.ref("casimir-cruises/destinations/new_england/activities");
    const imageRef = storage.ref("/destinationPage/new_england");
    let descr = [];
    let activities = [];
    let images = [];
    // QUERY DATABASE TO RETRIEVE DESTINATION INFO AND UPDATE STATE WITH NEW DATA
    descrRef.once('value', (snapshot) => {
      descr.push(snapshot.val());
      this.setState({ description: descr[0] });
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
    });
    //RETRIEVE CAROUSEL IMAGES
    imageRef.child('/new_england1.jpg').getDownloadURL().then((url) => {
      this.setState({
        image1: url
      })
    })
    imageRef.child('/new_england2.jpg').getDownloadURL().then((url1) => {
      this.setState({
        image2: url1
      })
    })
    imageRef.child('/new_england3.jpg').getDownloadURL().then((url2) => {
      this.setState({
        image3: url2
      })
    })
    imageRef.child('/new_england4.jpg').getDownloadURL().then((url3) => {
      this.setState({
        image4: url3
      })
    })
  }
  render() {

    const {
      title = 'New England',
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
        bannerImage1={this.state.image1}
        bannerImage2={this.state.image2}
        bannerImage3={this.state.image3}
        bannerImage4={this.state.image4}
      />
    )
  };

}

export default NewEngland;