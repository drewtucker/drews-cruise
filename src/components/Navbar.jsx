import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

function Navbar() {


  return <div>
      {/* STANDARD LAYOUT */}

      <div class="navbar-standard">
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
            <div class="dropdown">

              <div class="navbar-icon-wrapper">
                <a href="#">
                  <i class="fa fa-ship" id="ship-icon" />
                  <span class="navbar-text">Destinations</span>
                </a>
              </div>
              <div class="dropdown-content">
                <Link to='/alaska'>Alaska</Link>
                <a href='#'>Caribbean</a>
                <a href='#'>Hawaii</a>
                <a href="#">New England</a>
                <a href="#">Thailand</a>
                <a href="#">Norway</a>
                <a href="#">Cuba</a>
              </div>
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

    <MediaQuery maxWidth={736}>
      <Link to="/" class='mobile-sub-logo'>
        <p class="mobile-sub-logo">Casimir Cruises</p>
        <br/>
      </Link>
    </MediaQuery>

      <style>{`

        .navbar-standard {
          display: flex;
          justify-content: space-between;
          background-color:  #ffa366;
          border-bottom: 3px solid #60989C;
          
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
          width: 150px;
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
          overflow: hidden;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #c9c9c9;
          width: 150px;
          z-index: 2;
          box-shadow: 4px 8px 16px 0px rgba(0,0,0,0.2);
          border-radius: 1px;
          max-height: 0px;
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
          display: block;
          max-height: 800px;
        }

        .dropdown: hover {
          
        }

        
        `}</style>
    </div>; 
}


export default Navbar;
