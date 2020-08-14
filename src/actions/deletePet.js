const deletePet = (petId) => {
  return(dispatch) => {

    return fetch(`http://localhost:3000/pets/${petId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(pet => {
      dispatch({
        type: "DELETE_PET",
        petId
      })
    })
  }
  
}

export {deletePet}
