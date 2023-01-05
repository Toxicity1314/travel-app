import React, {useState, useEffect} from "react";
// import { PlacesCard, Button } from "./styles";
import FormPlaces from "./FormPlaces"
import SearchPlaces from "./SearchPlaces"
import PlacesCollection from "./PlacesCollection"

function Places({
  places,
  setPlaces
}) {

// MAKE SURE EACH BUTTON IS MAPPED TO EACH RESPECTIVE ITEM

  // SEARCH set up <PlaceSearch /> Functionality
  const [searchPlaces, setSearchPlaces] = useState("")
  const displayedPlaces = places.filter((place) => {
    return 
    place.name.toLowerCase().incluces(searchPlaces.toLowerCase())
  })


  // FORM set up <PlacesForm /> funcionality
  function handleAddPlaces(newPlace) {
    //const updatedPlacesArray = [...places, newPlace]
    setPlaces([...places, newPlace])
  }
  console.log(places)

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



  return (
    <div>
      {/* <div style={{display:"flex", margin: "1em"}} >
          {placesCard}
      </div> */}
      <PlacesCollection
        places={places}
        onUpdatePlace={handleUpdatePlaces}
        onDeletePlace={handleDeletePlaces}
      />
      <SearchPlaces 
        searchPlaces={searchPlaces}
        onSearchPlacesChange={setSearchPlaces}
      />
      <FormPlaces 
        places={places}
        onAddPlace={handleAddPlaces}
      />

    </div>
  );

}

export default Places;