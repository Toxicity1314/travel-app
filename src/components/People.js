import React, {useEffect, useState} from "react";
import { PeopleCard } from "./styles";

function People({people}) {
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
  
  const peopleCard = people.map(people =>{
    return(
    <PeopleCard as={'ul'} key={people.name}>
      <img src={people.photo}/>
      <li>User: {people.name}</li>
      <li>From: {people.city}</li>
      <li>UserName: {people.username}</li>
    </PeopleCard>)
    })

  return (
    <div style={{display:"flex", margin: "1em"}}>
        {peopleCard}
    </div>
  );
}

export default People;

// <SearchPeople />