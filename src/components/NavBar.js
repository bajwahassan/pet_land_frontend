import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <NavLink to="/" className="navbar-brand">Pet Land</NavLink>
          </div>
            <ul class="nav navbar-nav">
              <li><NavLink to="/pets/new">Add Pet</NavLink></li>
              <li><NavLink to="/pets">All Pets</NavLink></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
