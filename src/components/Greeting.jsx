import React from 'react';


function Greeting() {
  return (
    <div>
      <div className='wrapper'>
        <h1>Ahoy!</h1>
        <p>Welcome to Casimir Cruises. Since 1893, we've been providing once in a lifetime experiences in exotic locations all around the globe. </p>
        <p> Offering world-class service and top of the line ameneties, our ships are ready and waiting to take you away on the vacation of your dreams.</p>
        <p>Let's go away for a while.</p>
      </div>
      <style>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 300px;
          height: 400px;
          background-color: lightgray;
          margin: 50px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}


export default Greeting;