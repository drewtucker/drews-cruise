import React from 'react';
import fb from './../img/icons/fb.png';
import linked from './../img/icons/linked.png';
import twitter from './../img/icons/twitter.png';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';



function Footer() {
  return(
  <div>
      <MediaQuery minWidth={738} id='footer-wrapper-standard'>
      <div id='footer-standard-left'>
        <Link to='/'>Legal Notices</Link>
        <Link to='/'>Privacy Notice</Link>
        <Link to='/'>Contact Us</Link>
      </div>
      <div id='footer-standard-right'>
        <a href='https://www.facebook.com'><img src={fb}/></a>
      <a href='https://www.twitter.com'><img src={twitter}/></a>
      <a href='https://www.linkedin.com/in/drewtuckerdev/'><img src={linked}/></a>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={737} id='footer-wrapper-mobile'>
      <div>
      <a href='https://www.facebook.com'><img src={fb}/></a>
      <a href='https://www.twitter.com'><img src={twitter}/></a>
      <a href='https://www.linkedin.com/in/drewtuckerdev/'><img src={linked}/></a>
      </div>
    </MediaQuery>
      <MediaQuery maxWidth={737} id='footer-mobile-links'>
        <a href='#'>Legal Notice</a>
        <a href='#'>Privacy Notice</a>
        <p>Created by Drew Tucker 2018 All rights reserved.</p>
      </MediaQuery>
      <style>{`
          #footer-wrapper-standard {
            display: flex;
            width: 100%;
            bottom: 0;
            justify-content: space-between;
            align-items: center;
            background-color: #ffa366;
            color: white;
            opacity: 1;
            flex-wrap: nowrap;
          }

          #footer-standard-left a{
            margin: 0px 35px 0px 35px;
             text-decoration: none;
          }

          #footer-standard-left a:hover {
            text-decoration: underline;
          }

          #footer-standard-right img{
            margin: 5px 20px 5px 20px;
            flex-wrap: nowrap;
          }

          #footer-wrapper-standard img {
            max-height: 40px;
          }

          #footer-wrapper-standard img:hover {
            max-height: 42px;
            margin: 3px 20px 3px 18px;
          }
          

          #footer-wrapper-mobile {
            display: flex;
            width: 100%;
            padding: 5px;
            justify-content: space-around;
            bottom: 0;
            background-color: #ffa366;
            z-index: 4;
          }

          #footer-wrapper-mobile img {
            max-height: 50px;
          }

          #footer-mobile-links {
            display: flex;
            justify-content: space-around;
            font-size: 10px;
            padding: 0px 20px 0px 20px;
            text-align: center;
          }

          #footer-mobile-links a {
            text-decoration: none;
            align-self: center;
          }

          ul {
            list-style-type: none;
          }
            `}
      </style>
    </div>
  );
}

export default Footer;
