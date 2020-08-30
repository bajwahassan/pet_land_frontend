const fetchPets = () => {
  return(dispatch) => {


    return fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(pets => {
    
      dispatch({
        type: "SET_PETS",
        pets
       })
    })
  }

}

export {fetchPets}
