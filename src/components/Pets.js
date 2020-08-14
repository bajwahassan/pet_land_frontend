import React, { Component } from 'react'
import Pet from './Pet'
import { connect } from 'react-redux'
import { fetchPets } from '../actions/fetchPets'


class Pets extends Component {

  componentDidMount(){
    this.props.fetchPets()
  }

  render() {

    const renderPets = this.props.pets.map(( pet, id ) => (
      <Pet key={id} pet={ pet } />)
    )

    return (
      <div>
        <h3>All Pets</h3>
        <ul className="collection">
          {renderPets}
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
