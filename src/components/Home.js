import React from "react";
import People from "./People";
import LogIn from "./LogIn";
import PlacesIndividual from "./PlacesIndividual";
import { Card } from "semantic-ui-react";

function Home(props) {
  const places = props.places.filter((place) => {
    for (const userPlace of props.currentUser.places) {
      if (userPlace === place.city) {
        return true;
      }
    }
  });

  const placesVisited = places.map((place) => (
    <PlacesIndividual
      key={place.id}
      place={place}
      currentUser={props.currentUser}
      setCurrentUser={props.setCurrentUser}
    />
  ));

  console.log(places);
  return (
    <div>
      <br />
      {props.loggedIn ? (
        ""
      ) : (
        <img
          src={
            "https://i.pinimg.com/originals/8e/bb/96/8ebb96be428c20e1418863602b9c4ae2.gif"
          }
          alt="travelGif"
        />
      )}
      <br />
      <h1 style={{ textAlign: "center", fontSize: "larger" }}>
        Welcome to 'travelApp', {props.loggedIn ? props.currentUser.name : ""}
      </h1>
      <br />
      <br />
      {props.loggedIn ? (
        <People
          people={props.people}
          currentUser={props.currentUser}
          setLoggedIn={props.setLoggedIn}
          setCurrentUser={props.setCurrentUser}
          setPeople={props.setPeople}
        />
      ) : (
        <LogIn {...props} />
      )}
      <div>places I have visited</div> 
      <Card>
        {placesVisited}
      </Card>
    </div>
  );
}
// make line 56 invisible on the login screen when not logged in

export default Home;
