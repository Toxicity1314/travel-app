import React, { useState, useEffect } from "react";
import FormPlaces from "./FormPlaces"
import PlacesIndividual from "./PlacesIndividual";
// import SearchPlaces from "./SearchPlaces"


function Places({
  places,
  setPlaces,
  currentUser,
  setCurrentUser
}) {

// MAKE SURE EACH BUTTON IS MAPPED TO EACH RESPECTIVE ITEM

  // SEARCH set up <PlaceSearch /> Functionality
  const [searchPlaces, setSearchPlaces] = useState("")
  // const displayedPlaces = places.filter((place) => {
  //   return 
  //   place.name.toLowerCase().incluces(searchPlaces.toLowerCase())
  // })


  // FORM set up <PlacesForm /> funcionality
  function handleAddPlaces(newPlace) {
    setPlaces([...places, newPlace])
  }

  function handleDeletePlaces(id) {
    const updatedPlacesArray = places.filter((place) => 
      place.id !== id)
      setPlaces(updatedPlacesArray)
  }
  
  function handleUpdatePlaces(updatedPlace) {
    const updatedPlacesArray = places.map((place) => {
      if (place.id === updatedPlace.id) {
        return updatedPlace
      } else {
        return place
      }
    })
    setPlaces(updatedPlacesArray)
  }

  let placesCard
placesCard = places.map(place => {
  return (<PlacesIndividual key={place.id} place={place} currentUser={currentUser} setCurrentUser={setCurrentUser}/>)
})

  return (
    <div>
      <div style={{
        display:"flex", 
        margin: "1em", 
        flexWrap:"wrap"}}>
          {placesCard}
      </div>
      <FormPlaces 
        setPlaces={setPlaces} 
        places={places}/>
    </div>
  );
}



export default Places;