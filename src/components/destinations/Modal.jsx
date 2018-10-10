import React from 'react';
import MediaQuery from 'react-responsive';

class Modal extends React.Component {
  render() {
    
    return(
      <div>
        <MediaQuery minWidth={400}>
          <div className='modal-wrapper'>
            
          </div>
        </MediaQuery>
        <style>{`
          .modal-wrapper {
            width: 100px;
            height: 100px;
            background-color: blue;
            transition: all .8s;
            border-radius: 10px;
          }

          .modal-wrapper:hover {
            width: 400px;
            height: 200px;
          }
        `}</style>
      </div>
      )
    }
    }

export default Modal;