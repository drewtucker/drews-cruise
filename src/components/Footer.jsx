import React from 'react';

function Footer() {
  return(
    <div id='footer-wrapper'>
      <ul>
        <h5>Twitter</h5>
        <li>Testy boy</li>
      </ul>
      <ul>
        <h5>Facebook</h5>
      </ul>
      <ul>
        <h5>Instagram</h5>
      </ul>
      <ul>
        <h5>Contact Us</h5>
        <li><a class='footer-button'>Facebook</a></li>
        <li><a class='footer-button'>Twitter</a></li>
        <li><a class='footer-button'>Instagram</a></li>
      </ul>
      <style>{`
          #footer-wrapper {
            display: flex;
            border: 2px solid black;
            justify-content: space-around;
          }
          ul {
            list-style-type: none;
          }
          .footer-button {
            font-size: 1vw;
            background-color: white;
            color: black;
            padding: 0;
            
          }

            `}
      </style>
    </div>
  );
}

export default Footer;
