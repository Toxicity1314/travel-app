import React from "react";
import People from "./People";
import LogIn from "./LogIn";
import PlacesIndividual from "./PlacesIndividual";
import {Card} from "semantic-ui-react"

function Home(props) {
  const places = props.places.filter(place=>{
    for(const userPlace of props.currentUser.places){
      if(userPlace === place.city){
        return true
      }

    }
  })

  const placesVisited = places.map(place=> <PlacesIndividual key={place.id} place={place} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>)

  console.log(places)
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome to the travel App {props.loggedIn ? props.currentUser.name: ""}</h1>
      {props.loggedIn ? <People people={props.people} currentUser={props.currentUser} setLoggedIn={props.setLoggedIn} setCurrentUser={props.setCurrentUser} setPeople={props.setPeople}/>:<LogIn {...props} />}
      <div>places I have visited</div>
      <Card>{placesVisited}</Card>
    </div>
  );
}

export default Home;