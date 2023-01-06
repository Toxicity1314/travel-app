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

  const travelGif = ("http://24.media.tumblr.com/tumblr_lu5fxnLtIF1qzolrpo1_1280.gif")

  return (
    <div>
      <br />
      {props.loggedIn ? (
        ""
      ) : (
        <img
          className="Logo"
          src={travelGif}
          alt="travelGif"
        />
      )}
      <br />
      <h1 style={{ textAlign: "center", fontSize: "larger" }}>
        Welcome to 'travelApp' {props.loggedIn ? props.currentUser.name : ""}
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
      <div></div> 
      <Card>
        {placesVisited}
      </Card>
    </div>
  );
}
// make line 56 invisible on the login screen when not logged in

export default Home;
