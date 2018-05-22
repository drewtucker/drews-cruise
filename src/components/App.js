import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import DestinationsMain from './DestinationsMain';
import { Switch, Route } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";




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
