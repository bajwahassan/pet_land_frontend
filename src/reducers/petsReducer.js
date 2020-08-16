export default (state=[], action) => {

  switch(action.type){
    case "SET_PETS":
      return [...action.pets]
    case "ADD_PET":
      return [...state, action.pet]
    case "DELETE_PET":
      let newPets = state.filter(pet => pet.id !== action.petId)
      return [...newPets]
    default:
      return state
  }
}
