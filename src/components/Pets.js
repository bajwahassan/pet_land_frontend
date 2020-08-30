import React, { Component } from 'react'
import Pet from './Pet'
import { connect } from 'react-redux'
import { fetchPets } from '../actions/fetchPets'
import "../App.css"
import {deletePet} from '../actions/deletePet'


class Pets extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }
  componentDidMount(){
    this.props.fetchPets()
  }

  handleSearch= (e)=>{
    // console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
    // console.log(this.state.text);
    // console.log("Printing Pets:"+this.props.pets);
  }



  render() {
    const filtered = [];

    const filterPets = this.props.pets.filter((pet, id) => {

       if(pet.species.toLowerCase().includes(this.state.text.toLowerCase()))
        filtered.push(<Pet key={id} pet={ pet }/>)
    })

    const renderPets = this.props.pets.map(( pet, id ) => (
      <Pet key={id} pet={ pet } />)
    )

    return (
      <div className="global" >
        <h3 className="w3-myfont">All Pets</h3><br/>

        <label htmlFor="search"> search by species: </label>
        <input type= "text" value={this.state.text} onChange={this.handleSearch}/><br/>

        <div className="container">
          <div className = "cards-list">
            <ul className="">
              {(
                ()=> {
                if (this.state.text==="")return renderPets
                else return filtered}

              )()}
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
