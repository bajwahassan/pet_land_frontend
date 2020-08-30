import React from 'react'
// import React, { Component } from 'react';
import {deletePet} from '../actions/deletePet'
import { connect } from 'react-redux'
import LikeButton from '../components/LikeButton'


// class Pet extends Component {
const Pet = ({pet, deletePet}) => {

    return (
    <li className="pet">
      Pet Name: {pet.name}<br />
      Age: { pet.age } <br />
      Species: { pet.species } <br />
      Breed: { pet.breed } <br />
      Description: { pet.description } <br />


    <LikeButton/>
    <button onClick={()=>deletePet(pet.id)} class="btn btn-danger btn-sm">delete</button> <br/>
      -----------------------------------
    </li>
    );
}
// ------------------
//   state = {
//     count :0
//   }
//
//   handleLikes() {
//     let newCount =
//     this.setState({count: this.state.count + 1})
//   }
//
//   render() {
//     return (
//       <div className="pet">
//         <li>Pet Name: {this.props.pet.name}</li>
//         <li>Age: { this.props.pet.age }</li>
//         <li>Species: { this.props.pet.species }</li>
//         <li>Breed: { this.props.pet.breed }</li>
//         <li>Description: { this.props.pet.description }</li>
//
//
//         <button onClick={() => this.handleLikes()}>Likes : {this.state.count}</button>&nbsp;
//         <button onClick={()=>deletePet(this.props.pet.id)} class="btn btn-danger btn-sm">delete</button> <br/>
//           -----------------------------------
//       </div>
//     )
//   }
// }

export default connect(null, { deletePet })(Pet)
// export default Pet
