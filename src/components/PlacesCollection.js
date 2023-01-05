import React, { useState } from "react"
// import Places from "./Places"
// import { Button } from "./styles"
import { Card } from "semantic-ui-react"
import CardPlaces from "./CardPlaces"


function PlacesCollection({
    places, 
    onDeletePlaces,
    onUpdatePlaces 
  }) {
  
// // Mark as 'Been' button
// const [markAsBeen, setMarkAsBeen] = useState(false)
// function handleBeenClick() {
//   setMarkAsBeen((markAsBeen) =>
//     !markAsBeen)
// }

// // Mark as 'Want [to] Go' button
// const [markWantGo, setMarkWantGo] = useState(false)
// function handleWantGoClick() {
//   setMarkWantGo((markWantGo) =>
//     !markWantGo)
// }
  return (

    <Card.Group itemsPerRow={5}>
      {places.map(place => (
        <CardPlaces
          image={place.image}
          city={place.city}
          country={place.country}
          key={place.id}
          onDeletePlaces={onDeletePlaces}
          onUpdatePlaces={onUpdatePlaces}
        />
      ))}
  </Card.Group>
  );
      }

  export default PlacesCollection;


  /* <Button style={{width:60, height:100}}
        onClick={handleBeenClick}>
          Been? {markAsBeen ? "✅" : "❌"}
        </Button>
      <Button style={{width:60, height:100}}
        onClick={handleWantGoClick}>
          Want to Go? {markWantGo ? "🤩" : "😒"}
      </Button>
   */