import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import boatImg from '../img/icons/boat.png';

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    }
  }

  //GOOGLE SIGN-IN HANDLERS

  googleSignIn() {
    this.setState({
      isLoggedIn: true,
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user.displayName;
      console.log(user);
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("ERRORRRRR" + errorCode + " " + errorMessage)
    });
  }

  googleSignOut() {
    this.setState({
      isLoggedIn: false,
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.signOut();

  }

  render() {

    //CONDITIONAL RENDERING FOR SIGN-IN ICON
    const isLoggedIn = this.state.isLoggedIn;
    let signInIcon;

    if (isLoggedIn) {
      signInIcon = <div className="navbar-icon-wrapper" onClick={() => { this.googleSignOut() }}>
        <a href="#" >
          <i className="material-icons">person</i>
          <span className="navbar-text">Signed In</span>
        </a>
      </div>
    }
    else {
      signInIcon = <div className="navbar-icon-wrapper" onClick={() => { this.googleSignIn() }}>
        <a href="#" >
          <i className="material-icons">person_outline</i>
          <span className="navbar-text">Log In</span>
        </a>
      </div>
    }


    return <div>
      {/* STANDARD LAYOUT */}

      <div className="navbar-standard">
        <MediaQuery minWidth={738}>
          <div id="navbar-wrapper-left">
            <Link to="/">
              <div id="navbar-logo">
                <p>Casimir Cruises</p>
              </div>
            </Link>
            <img src={boatImg} className='boat-icon' />
          </div>

          <div id="navbar-wrapper-right">
            <Link to="/destinations" className='dropdown'>
              <div className="dropdown">

                <div className="navbar-icon-wrapper">
                  <a href="#">
                    <i className="fa fa-ship" id="ship-icon" />
                    <span className="navbar-text">Destinations</span>
                  </a>
                </div>
                <div className="dropdown-content">
                  <Link to='/alaska'>Alaska</Link>
                  <Link to='/caribbean'>Caribbean</Link>
                  <Link to='/cuba'>Cuba</Link>
                  <Link to='/hawaii'>Hawaii</Link>
                  <Link to={'/new england'}>New England</Link>
                  <Link to={'/new zealand'}>New Zealand</Link>
                  <Link to='/norway'>Norway</Link>
                  <Link to='/thailand'>Thailand</Link>
                </div>
              </div>
            </Link>
            <div className="navbar-icon-wrapper">
              <a href="#">
                <i className="material-icons">question_answer</i>
                <span className="navbar-text">Contact</span>
              </a>
            </div>
            {signInIcon}
          </div>
        </MediaQuery>
      </div>

      {/* MOBILE LAYOUT*/}

      <div className="navbar-mobile">
        <MediaQuery maxWidth={737}>

          <div id="mobile-icons-wrapper">
            <Link to='/'><img src={boatImg} className='boat-icon-mobile' /> </Link>

            <Link to="/destinations">
              <div className="navbar-icon-wrapper">
                <i className="fa fa-ship" id="ship-icon" />
                <span className="navbar-text">Destinations</span>
              </div>
            </Link>

            <div className="navbar-icon-wrapper">
              <a href="#">
                <i className="material-icons">question_answer</i>
                <span className="navbar-text">Contact</span>
              </a>
            </div>

            <div className="navbar-icon-wrapper">
              <a href="#">
                <i className="material-icons">person_outline</i>
                <span className="navbar-text">Log In</span>
              </a>
            </div>
          </div>
        </MediaQuery>
      </div>

      <MediaQuery maxWidth={736}>
        <Link to="/" className='mobile-sub-logo'>
          <p className="mobile-sub-logo">Casimir Cruises</p>
          <br />
        </Link>
      </MediaQuery>

      <style>{`

.navbar-standard {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  background-color:  #ffa366;
  border-bottom: 5px solid #66c1ff;
  z-index: 10;
}

.navbar-mobile {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  background-color:  #ffa366;
  color: white;
  text-decoration: none;
  z-index: 10;
}

#mobile-icons-wrapper {
  display: flex;
}

#mobile-logo {
  display: flex;
  justify-content: flex-start;
  margin-right: 15px;
  text-decoration: none;
}


.mobile-sub-logo {
  display: block;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  background-color: darkgray;
  font-family: Cinzel, serif;
}

#navbar-wrapper-right {
  display: flex;
  justify-content: space-between;
  
  background-color:  #ffa366;
  padding: 3px 0px 3px 0px;
}

#navbar-wrapper-right i {
  max-width: 50px;
}

#navbar-wrapper-left {
  display: flex;
  justify-content: flex-end;
  margin-left: 50px;
  color: white;
  text-decoration: none;
}


.navbar-icon-wrapper {
  justify-content: center;
  text-align: center;
  width: 100px;
  color: white;
  padding-bottom: 8px;
  padding-top: 8px;
  text-decoration: none;
  
}

.navbar-icon-wrapper:hover {
  background-color: white;
  color: #60989C;
  opacity: 1;
  border-radius: 2px;
}

#navbar-wrapper-right a {
  text-decoration: none;
}

#navbar-wrapper-left a {
  text-decoration: none;
}

.navbar-mobile a {
  text-decoration: none;
}

.navbar-text {
  display: block;
  font-size: 9px;
  text-decoration: none;
  margin: auto;
  width: 100%;
}

#ship-icon {
  margin-top: -1px;
  font-size: 23px;
  padding-bottom: 6.55px;
}

#navbar-logo {
  color: white;
  margin-top: 18px;
  font-family: Cinzel, serif;
  text-decoration: none;
  font-size: 20px;
} 

.dropdown {
  float: left;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #c9c9c9;
  width: 100px;
  z-index: 4;
  box-shadow: 4px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 1px;
  max-height: 0px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

}

.dropdown-content a {
  float: none;
  color: black;
  max-height: 100px;
  padding: 12px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.dropdown-content a:hover {
  background-color: #60989C;
  transition: .15s ease-out;
}

.dropdown:hover .dropdown-content {
  margin-top: 10px;
  display: block;
  max-height: 800px;
  z-index: 5;
}

.boat-icon {
  max-height: 40px;
  margin: auto;
  position: absolute;
  bottom: -8px;
  left: 240px;
}

.boat-icon-mobile {
  max-height: 40px;
  margin: auto;
  margin-right: 10px;
  margin-top: 6px;
}


`}</style>
    </div>;
  }

}

export default Navbar;
