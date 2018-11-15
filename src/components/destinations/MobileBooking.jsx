import React from 'react';
import Calendar from 'react-calendar';


class MobileBooking extends React.Component {
  constructor(props) {
    super(props);
    const { } = this.props;

    this.state = {
      selected: false,
      price: 0,
      total: 0,
      basicSelected: false,
      suiteSelected: false,
      presidentialSelected: false,
      confirmed: false,
    }
  }

  handleAccomodationSelect(e) {
    const target = e.target;
    return target.name === 'accomodation-basic' ? this.setState({ basicSelected: true, suiteSelected: false, presidentialSelected: false, price: 85 })
      : target.name === 'accomodation-suite' ? this.setState({ suiteSelected: true, basicSelected: false, presidentialSelected: false, price: 255 })
        : target.name === 'accomodation-pres' ? this.setState({ presidentialSelected: true, basicSelected: false, suiteSelected: false, price: 450 })
          : null;
  }

  handleDates(datesArray) {
    let oneDay = 24 * 60 * 60 * 1000;
    let dayCount = Math.round(Math.abs((datesArray[0].getTime() - datesArray[1].getTime()) / (oneDay)));
    this.setState({
      total: (dayCount * this.state.price),
    })

  }



  render() {
    return (
      <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', marginTop: '30px' }}>
        <div className='accomodations'>
          <div>
            <label>Basic - $85/night</label>
            <br />
            <input
              name='accomodation-basic'
              type='checkbox'
              checked={this.state.basicSelected}
              onChange={this.handleAccomodationSelect.bind(this)} />
          </div>
          <div>
            <label>Suite - $255/night</label>
            <br />
            <input
              name='accomodation-suite'
              type='checkbox'
              checked={this.state.suiteSelected}
              onChange={this.handleAccomodationSelect.bind(this)} />
          </div>
          <div>
            <label>Presedential Suite - $400/night</label>
            <br />
            <input
              name='accomodation-pres'
              type='checkbox'
              checked={this.state.presidentialSelected}
              onChange={this.handleAccomodationSelect.bind(this)} />
          </div>
        </div>
        <div className='calendar'>
          <Calendar selectRange={true} returnValue={'range'} onChange={this.handleDates.bind(this)} />
        </div>
        <div className='price'>
          <p style={{fontWeight: 'bold', paddingTop: '10px'}}>Total: $ {this.state.total + ".00"}</p>
        </div>
        <div className='confirm-button' style={{ width: '100px', height: '50px', display: 'flex', backgroundColor: '#29293d', color: 'white', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',}}>
          <p>Confirm</p>
        </div>
      </div>
    )
  }
}

export default MobileBooking;