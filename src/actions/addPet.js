const addPet = pet => {
  return(dispatch) => {
    return fetch('http://localhost:3000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pet:pet})
    })
    .then(resp => resp.json())
    .then(pet => {
      dispatch({
        type: "ADD_PET",
        pet
      })
    })
  }
}

export {addPet}
