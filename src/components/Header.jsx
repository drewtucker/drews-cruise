import React from 'react';
import bgImage from '../img/single-boat-bg.jpeg';

function Header() {
  return(
    <div id='header-wrapper' style={headerStyles} className='w3-container'>
      <div id='blur-wrapper'>

      <div id='header-inner-wrapper' className='w3-center w3-animate-top' style={innerWrapperStyles}>
        <div id='header-nav' className='flex-container' style={navStyles}>
          <div><a href='#'>Destinations</a></div>
          <div><a href='#'>Packages</a></div>
          <div><a href='#'>Log In</a></div>
        </div>
      </div>
      <h1 id='sub-heading'>Let's go away for a while.</h1>




      <style>{`
          a {
            text-decoration: none;
            color: white;
            background-color: #ff8c1a;
            padding: 1.5vw;
            border-radius: 10px;
            font-size: 2.5vw;
             }

          a:hover {
            color: black;
          }



            `}
      </style>
    </div>
    </div>
  );
}

export default Header;


var headerStyles = {
  position: 'fixed',
  top: '10%',
  right: '65%',
  left: '15%',
  width: '70%',
  textAlign: 'center',
  color: 'white',
  zIndex: '1',
}

var innerWrapperStyles = {
  width: '100%',
  height: '100%',

  background: 'rgba(170, 170, 170, 0.3)',
  borderRadius: '10px',
}

var navStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  textAlign: 'center',
  alignItems: 'center',
  padding: '3vw',
  height: '12vw',

  borderRadius: '10px',

}
