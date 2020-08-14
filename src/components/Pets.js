import React, { Component } from 'react'
import Pet from './Pet'
import { connect } from 'react-redux'
import { fetchPets } from '../actions/fetchPets'


class Pets extends Component {

  componentDidMount(){
    this.props.fetchPets()
  }

  render() {
    
    const pets = this.props.pets.map(( pet, i ) => (
      <Pet key={i} pet={ pet } />)
    )

    return (
      <div>
        <h3>Pets</h3>
        <ul className="collection">
          {pets}
        </ul>
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
