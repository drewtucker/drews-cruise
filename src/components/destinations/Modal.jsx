import React from 'react';
import MediaQuery from 'react-responsive';
import Calendar from 'react-calendar';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    const { } = this.props;

    this.state = {
      selected: false,
      price: 0,
      total: 0,
      dates: [new Date(), new Date()],
      basicSelected: false,
      suiteSelected: false,
      presidentialSelected: false,
      startDay: Date(),
      endDay: Date(),
    }
  }

  onModalClick(e) {
    const wrapper = document.getElementsByClassName('modal-wrapper')[0];
    const modalButtonText = document.getElementById('modal-button-text');
    const modalContentWrapper = document.getElementsByClassName('modal-content-wrapper')[0];
    const modalContentCenter = document.getElementsByClassName('modal-content-center')[0];
    const modalContentLeft = document.getElementsByClassName('modal-content-left')[0];
    const modalContentRight = document.getElementsByClassName('modal-content-right')[0];
    const modalCalendars = document.getElementsByClassName('modal-calendars')[0];
    const modalExitIcon = document.getElementById('modal-exit-icon');

    if (this.state.selected === false) {
      this.setState({ selected: true });
      wrapper.style.cssText = 'height: 500px; width: 800px; display: flex; flex-direction: column; justify-content: space-evenly; cursor: auto;';
      modalButtonText.style.cssText = 'display: none;';
      modalContentWrapper.style.cssText = 'display: flex; justify-content: space-around; flex-direction: row; width: 100%; align-items: center;';
      modalContentCenter.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100%; width: 350px;';
      modalContentLeft.style.cssText = 'display: flex;';
      modalContentRight.style.cssText = 'display: flex;';
      modalCalendars.style.cssText = '';
      modalExitIcon.style.cssText = 'display: block;'

    }
    else {
      this.setState({ selected: false });
      wrapper.style.cssText = 'height: 100px; width: 150px; :hover {width: 200px;}';
      wrapper.style.cssText = '';
      modalButtonText.style.cssText = 'display: block;';
      modalContentWrapper.style.cssText = 'display: none;';
      modalExitIcon.style.cssText = 'display: none;'

    }
  }

  handleAccomodationSelect(e) {
    const target = e.target;
    return target.name === 'accomodation-basic' ? this.setState({ basicSelected: true, suiteSelected: false, presidentialSelected: false, price: 85 })
      : target.name === 'accomodation-suite' ? this.setState({ suiteSelected: true, basicSelected: false, presidentialSelected: false, price: 255 })
        : target.name === 'accomodation-pres' ? this.setState({ presidentialSelected: true, basicSelected: false, suiteSelected: false, price: 450 })
          : null;
  }

  handleDates(datesArray){
    let oneDay = 24 * 60 * 60 * 1000;
    let dayCount = Math.round(Math.abs((datesArray[0].getTime() - datesArray[1].getTime()) / (oneDay)));
    this.setState({
      total: (dayCount * this.state.price),
    })

  }

  render() {

    return (
      <div>
        <MediaQuery minWidth={400}>
          <div className='modal-wrapper'>
            <p id='modal-button-text' onClick={this.onModalClick.bind(this)}>Book It!</p>
            <i className='material-icons' id='modal-exit-icon' onClick={this.onModalClick.bind(this)}>highlight_off</i>
            <div className='modal-content-wrapper'>

            {/* ACCOMODATION SELECTION FORM  */}
              <div className='modal-content-left'>
              <div>
                  <label>Basic - $85/night</label>
                  <br/>
                  <input
                      name='accomodation-basic'
                      type='checkbox'
                      checked={this.state.basicSelected}
                      onChange={this.handleAccomodationSelect.bind(this)} />
              </div>
              <div>
                  <label>Suite - $255/night</label>
                  <br/>
                  <input
                      name='accomodation-suite'
                      type='checkbox'
                      checked={this.state.suiteSelected}
                      onChange={this.handleAccomodationSelect.bind(this)} />
              </div>
              <div>
                  <label>Presedential Suite - $400/night</label>
                  <br/>
                  <input
                      name='accomodation-pres'
                      type='checkbox'
                      checked={this.state.presidentialSelected}
                      onChange={this.handleAccomodationSelect.bind(this)} />
              </div>
              </div>

              {/* CALENDAR WIDGET */}
              <div className='modal-content-center'>
                <h2 id='modal-title-text'>Select Dates:</h2>
                <div className='modal-calendars'>
                  <Calendar selectRange={true} returnValue={'range'} onChange={this.handleDates.bind(this)} />
                </div>
                <div id='confirmation-button'>
                  <p>Confirm</p>
                </div>
              </div>

              {/* PRICE DISPLAY */}
              <div className='modal-content-right'>
                <p>Total: $ {this.state.total}</p>
              </div>
            </div>
          </div>
        </MediaQuery>
        <style>{`
          .modal-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 100px;
            background-color: #29293d;
            transition: all .5s;
            border-radius: 6px;
            margin: 20px;
            cursor: pointer;
          }

          #modal-button-text {
            color: white;
            font-size: 2rem;
            text-align: center;
            font-family: Montserrat, sans-serif;
          }

          .modal-content-wrapper {
            height: 100%;
          }

          .modal-content-center {
              transition: .5s ease-out;
              display: none;
              width: 100%;
              z-index: 1000;
              background-color: #29293d;
              border: none;
            }

          .modal-content-left {
            flex-direction: column;
            justify-content: space-between;
            color: white;
            display: none;
            width: 225px;
            height: 240px;
            text-align: center;
          }

          .modal-content-right {
            display: none;
            justify-content: center;
            color: white;
            width: 225px;
                        font-family: Montserrat, sans-serif;

          }
          #modal-exit-icon {
            display: none;
            align-self: flex-end;
            color: white;
          }
          #modal-exit-icon:hover {
            cursor: pointer;
          }


          #modal-title-text {
            color: white;
          }

          #confirmation-button {
            transition: all .2s;
            background-color: #ffa366;
            margin-top: 20px;
            border-radius: 6px;
            padding: 10px;
            font-size: 1.5rem;
          }

          .modal-wrapper:hover {
            width: 200px;
            height: 100px;
          }

          .modal-wrapper:hover #modal-button-text {
            color: #66c1ff;
          }

          #confirmation-button:hover {
            color: white;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default Modal;