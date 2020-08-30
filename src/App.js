import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Pets from './components/Pets';
import AddPet from './components/AddPet'
import Contact from './components/Contact'
import './App.css';


import Home from './components/Home';

class App extends Component {


  render() {

    return (
      <div className="bg">

      <Router>
      <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/pets/new" component={AddPet} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
