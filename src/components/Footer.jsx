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
        <li><a className='footer-button'>Facebook</a></li>
        <li><a className='footer-button'>Twitter</a></li>
        <li><a className='footer-button'>Instagram</a></li>
      </ul>
      <style>{`
          #footer-wrapper {
            display: flex;
            width: 100%;
            border: 2px solid black;
            justify-content: space-around;
            bottom: 0;
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
