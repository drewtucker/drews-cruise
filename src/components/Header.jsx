import React from 'react';

function Header() {
  return(
    <div id='header-wrapper' style={headerStyles} className='w3-container'>
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
            color: white;
            background-color: #ff8c1a;
            padding: 1.5vw;
            border-radius: 10px;
            font-size: 2.5vw

             }

          #sub-heading {

          }
            `}
      </style>
    </div>
  );
}

export default Header;


var headerStyles = {
  position: 'fixed',
  top: '10%',
  right: '75%',
  left: '20%',
  width: '70%',
  textAlign: 'center',
  color: 'white',
}

var innerWrapperStyles = {
  boxShadow: '0.5px 0.5px 20px 0.5px white',

  background: 'rgba(150, 150, 150, 0.3)',
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
