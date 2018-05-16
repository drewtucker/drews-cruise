import React from 'react';

function Header() {
  return(
    <div id='header-wrapper' style={headerStyles}>
      <div id='header-inner-wrapper'>
        <div id='header-nav' class='flex-container' style={navStyles}>
          <div><a href='#'>Item One</a></div>
          <div><a>Item Two</a></div>
          <div><a>Item Three</a></div>
        </div>
      </div>

      <style>{`
          a {color: white;}
            `}
      </style>
    </div>
  );
}

export default Header;


var headerStyles = {
  position: 'fixed',
  top: '25%',
  right: '75%',
  left: '25%',

  width: '50%'

}

var navStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  padding: '3vw',
  height: '12vw',
  border: '2px solid',
  borderRadius: '10px',
}
