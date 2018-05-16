import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <style jsx global> {`
          body {
            margin: 0;
            padding: 0;
          }`}
      </style>
      <Header/>
      <HomePage/>
      </div>
    );
  }
}

export default App;
