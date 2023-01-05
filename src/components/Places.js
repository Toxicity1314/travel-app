import React, { useState, useEffect } from "react";
import { PlacesCard, Button } from "./styles";
import FormPlaces from "./FormPlaces"
// import SearchPlaces from "./SearchPlaces"


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


  // Mark as 'Been' button
const [markAsBeen, setMarkAsBeen] = useState(false)
function handleBeenClick() {
  setMarkAsBeen((markAsBeen) => !markAsBeen)
}

// Mark as 'Want [to] Go' button
const [markWantGo, setMarkWantGo] = useState(false)
function handleWantGoClick() {
  setMarkWantGo((markWantGo) => !markWantGo)
}

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
  return (
    <PlacesCard 
      className="card"
      as='ul'
      key={place.id}
      >
      
      <img 
        src={place.image} 
        alt="pic"/>
      <h4>{place.city},</h4>
      <span>{place.country}</span>

      <Button 
        onClick={handleBeenClick}>{markAsBeen ? "✅" : "❌"}
      </Button>

      <Button 
        onClick={handleWantGoClick}>{markWantGo ? "🤩" : "🤔"}
      </Button>
      
    </PlacesCard>
)
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