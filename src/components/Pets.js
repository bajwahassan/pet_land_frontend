import React, { Component } from 'react'
import Pet from './Pet'
import { connect } from 'react-redux'
import { fetchPets } from '../actions/fetchPets'
import "../App.css"


class Pets extends Component {

  componentDidMount(){
    this.props.fetchPets()
  }

  render() {

    const renderPets = this.props.pets.map(( pet, id ) => (
      <Pet key={id} pet={ pet } />)
    )

    return (
      <div className="global" >
        <h3 class="w3-myfont">All Pets</h3>
        <div className="container">
          <div class = "cards-list">
            <ul className="">
              {renderPets}
            </ul>
          </div>
        </div>

      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    pets: state.pets
  }
}



export default connect(mapStateToProps, { fetchPets })(Pets)
