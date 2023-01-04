import React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import People from "./People";
import Places from "./Places";
import Activities from "./Activities";
import FormPeople from "./FormPeople";
import SearchPeople from "./SearchPeople";


function App() {


  // set Login or Create Profile upon screen refresh.
  // -> make sure the above can be changed with a "switch user" button that just triggers a page refresh

  // FETCHES DB.JSON
  const [people, setPeople] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(resp => resp.json())
      .then(data => setPeople(data))
  }, [])

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


  // SEARCH set up <Search /> functionality
  const [searchPeople, setSearchPeople] = useState("")
  const displayedPeople = people.filter((person) => {
    return person.name.toLowerCase().includes(searchPeople.toLowerCase())
  })


  // FORM SET-UP
  function handleAddPeople(newPeople) {
    const updatedPeopleArray = [...people, newPeople]
    setPeople(updatedPeopleArray)
  }

  function handleDeletePeople(id) {
    const updatedPeopleArray = people.filter((person) =>
      person.id !== id)
      setPeople(updatedPeopleArray)
  }

  function handleUpdatePeople(updatedPeople) {
    const updatedPeopleArray = people.map((person) => {
      if (person.id === updatedPeople.id) {
        return updatedPeople
      } else {
        return person
      }
    })
    setPeople(updatedPeopleArray)
  }

  return (
    <div className="App"> 

      <NavBar/>

      <Routes>

        <Route 
          exact 
            path="/" 
            element={<Home />}
        /> 

        <Route 
          path='/people' 
          element={
            <People
              people={displayedPeople}
              onUpdatePeople={handleUpdatePeople}
              onDeletePeople={handleDeletePeople}
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

      </Routes>

      <FormPeople 
        people={people}
        onAddPeople={handleAddPeople}
      />

      <SearchPeople />

    </div>
  );
}

export default App;
