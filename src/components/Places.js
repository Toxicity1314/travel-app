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

  let placesCard
placesCard = places.map(place => {
  return (
    <PlacesIndividual 
      key={place.id} 
      place={place} 
      currentUser={currentUser} 
      setCurrentUser={setCurrentUser}
    />
    )
})

  return (
    <div>
      <div 
      className="container"
        >
          {placesCard}
      </div>
      <FormPlaces 
        setPlaces={setPlaces} 
        places={places}/>
    </div>
  );
}



export default Places;