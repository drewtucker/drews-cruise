import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DestinationsMain from '../components/destinations/DestinationsMain';
import Footer from './Footer';
import HomePage from './HomePage';
import Navbar from './Navbar';




class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/destinations' component={DestinationsMain} />
      </Switch>
      <Footer/>
      <style jsx global> {`body { margin: 0; padding: 0;}`}</style>
      </div>
    );
  }




}



export default App;
