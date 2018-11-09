import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DestinationsMain from './../components/destinations/DestinationsMain';
import Footer from './Footer';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Alaska from './destinations/DestinationsPages/Alaska';
import Caribbean from './destinations/DestinationsPages/Caribbean';
import Cuba from './destinations/DestinationsPages/Cuba';
import Hawaii from './destinations/DestinationsPages/Hawaii';
import NewEngland from './destinations/DestinationsPages/NewEngland';
import NewZealand from './destinations/DestinationsPages/NewZealand';
import Norway from './destinations/DestinationsPages/Norway';


class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/destinations' component={DestinationsMain} />
        <Route path='/Alaska' component={Alaska} title={'Alaska'}/>
        <Route path='/Caribbean' component={Caribbean} />
        <Route path='/Cuba' component={Cuba} />
        <Route path='/Hawaii' component={Hawaii} />
        <Route path='/New England' component={NewEngland} />
        <Route path='/New Zealand' component={NewZealand} />
        <Route path='/Norway' component={Norway} />
      </Switch>
      <Footer/>
      <style jsx global> {`body { margin: 0; padding: 0;}`}</style>
      </div>
    );
  }




}



export default App;
