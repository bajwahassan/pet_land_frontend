import React from 'react'
import {deletePet} from '../actions/deletePet'
import { connect } from 'react-redux'

const Pet = ({pet, deletePet}) => {
    return (
    <li className="pet">
      Pet Name: {pet.name}<br />
      Age: { pet.age } <br />
      Species: { pet.species } <br />
      Breed: { pet.breed } <br />
      Description: { pet.description } <br />
    <button onClick={()=>deletePet(pet.id)} class="btn btn-danger btn-sm">delete</button> <br/>
      -----------------------------------
    </li>
    );
}

export default connect(null, { deletePet })(Pet)
// export default Pet
