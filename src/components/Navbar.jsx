import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

function Navbar() {

  return <div>
      {/* STANDARD LAYOUT */}

      <div className="navbar-standard">
        <MediaQuery minWidth={738}>
          <div id="navbar-wrapper-left">
            <Link to="/">
              <div id="navbar-logo">
                <a>Casimir Cruises</a>
              </div>
            </Link>
          </div>

          <div id="navbar-wrapper-right">
            <Link to="/destinations">
              <div class="navbar-icon-wrapper">
                <a href="#">
                  <i class="fa fa-ship" id="ship-icon" />
                  <span class="navbar-text">Destinations</span>
                </a>
              </div>
            </Link>
            <div class="navbar-icon-wrapper">
              <a href="#">
                <i class="material-icons">question_answer</i>
                <span class="navbar-text">Contact</span>
              </a>
            </div>
            <div class="navbar-icon-wrapper">
              <a href="#">
                <i class="material-icons">person_outline</i>
                <span class="navbar-text">Log In</span>
              </a>
            </div>
          </div>
        </MediaQuery>
      </div>

      {/* MOBILE LAYOUT*/}

      <div class="navbar-mobile">
        <MediaQuery maxWidth={737}>
          <MediaQuery minWidth={400}>
            <Link to="/">
              <p id="mobile-logo">CC</p>
            </Link>
          </MediaQuery>

          <div id="mobile-icons-wrapper">
            <Link to="/destinations">
              <div class="navbar-icon-wrapper">
                <a href="#">
                  <i class="fa fa-ship" id="ship-icon" />
                  <span class="navbar-text">Destinations</span>
                </a>
              </div>
            </Link>
            
            <div class="navbar-icon-wrapper">
              <a href="#">
                <i class="material-icons">question_answer</i>
                <span class="navbar-text">Contact</span>
              </a>
            </div>

            <div class="navbar-icon-wrapper">
              <a href="#">
                <i class="material-icons">person_outline</i>
                <span class="navbar-text">Log In</span>
              </a>
            </div>
          </div>
        </MediaQuery>
      </div>

      <style>{`

        .navbar-standard {
          display: flex;
          justify-content: space-between;
          background-color:  #ffa366;
          border-bottom: 3px solid #9BD7D5;
          
        }

        .navbar-mobile {
          display: flex;
          justify-content: center;
          background-color:  #ffa366;
          color: white;
          text-decoration: none;
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
          width: 75px;
          color: white;
          margin-left: 20px;
          margin-right: 20px;
          padding-bottom: 8px;
          padding-top: 8px;
          text-decoration: none;
          
        }
        
        .navbar-icon-wrapper:hover {
          background-color: white;
          color: #129793;
          opacity: 0.70;
          border-radius: 8px;
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
        }

        #ship-icon {
          margin-top: 2px;
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


        .navbar-dropdown {
          display: block;
          justify-content: center;
          backgroundColor: blue;
          width: 200px;
          maxHeight: 150px;
          color: beige;

        }

        
        `}</style>
    </div>; 
}


export default Navbar;
