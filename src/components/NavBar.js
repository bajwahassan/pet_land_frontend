import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" >
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/" className="navbar-brand">Pet Land</NavLink>
          </div>
            <ul className="nav navbar-nav">
              <li><NavLink to="/pets/new">Add Pet</NavLink></li>
              <li><NavLink to="/pets">All Pets</NavLink></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
