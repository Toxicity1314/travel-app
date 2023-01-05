import React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import People from "./People";
import Places from "./Places";
import Activities from "./Activities";
import FormPeople from "./FormPeople";



function App() {

  // set Login or Create Profile upon screen refresh.
  // -> make sure the above can be changed with a "switch user" button that just triggers a page refresh

  // FETCHES DB.JSON
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(
    {
      id:"",
      name:"",
      city: "",
      username: "",
      password: "",
      photo: "",
      places:[]
  }
  )
  const [people, setPeople] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/people' )
      .then(res => res.json())
      .then(people => setPeople(people))
  },[])

  const [places, setPlaces] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then(resp => resp.json())
      .then(data => setPlaces(data))
  }, [])

  const [activities, setActivities] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then(resp => resp.json())
      .then(data => setActivities(data))
  }, [])

  return (
    <div className="App"> 

       <NavBar 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}/>

      <Routes>

        <Route 
          exact 
          path="/" 
          element={
            <Home 
              people={people}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setPeople={setPeople}
            />
          }
        />

        <Route 
          path='/people' 
          element={
            <People
              people={people}
              currentUser={currentUser}
              setLoggedIn={setLoggedIn}
              setPeople={setPeople}
              setCurrentUser={setCurrentUser}
            />
          }
        />

        <Route 
          path='/places' 
          element={<Places
            places={places}
            />
          }
        />

        <Route 
          path='/activities' 
          element={<Activities
            activities={activities}
            />
          }
        />

        <Route
          path='/formPeople'
          element={<FormPeople
            people={people}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setPeople={setPeople}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} />}
        />

      </Routes>



    </div>
  );
}

export default App;
