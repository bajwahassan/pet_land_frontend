import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {


  render() {
    return (
      <Router>
      <NavBar />
        <div className="App">

        </div>
      </Router>
    );
  }
}

export default App;
