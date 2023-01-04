import React from "react";
import {Link} from "react-router-dom"
import { PeopleCard } from "./styles";
import { Button } from "./styles";

function People({people, currentUser}) {
  // SEARCH set up <Search /> functionality
  // const [searchPeople, setSearchPeople] = useState("")
  // const displayedPeople = people.filter((person) => {
  //   return person.name.toLowerCase().includes(searchPeople.toLowerCase())
  // })

  // function handleDeletePeople(id) {
  //   const updatedPeopleArray = people.filter((person) =>
  //     person.id !== id)
  //     setPeople(updatedPeopleArray)
  // }
  let peopleCard
  if(people.length){
  peopleCard = people.map(person =>{
    return(
    <PeopleCard as={'ul'} key={person.id}>
      <img src={person.photo} alt="profile"/>
      <li>User: {person.name}</li>
      <li>From: {person.city}</li>
      <li>UserName: {person.username}</li>
      <li>Places I have visited:
        <ul>{person.places.map(place=><li>{place}</li>)}</ul>
      </li>
      {currentUser.name === person.name ? <Button as={Link} to="/formPeople">edit</Button>:""}
    </PeopleCard>)
    })
  }else{
     peopleCard =(
      <PeopleCard as={'ul'} key={people.id}>
        <img src={people.photo} alt="profile"/>
        <li>User: {people.name}</li>
        <li>From: {people.city}</li>
        <li>UserName: {people.username}</li>
        <li>Places I have visited:
          <ul>{people.places.map(place=><li key={place}>{place}</li>)}</ul>
        </li>
        {currentUser.name === people.name ? <Button as={Link} to="/formPeople">edit</Button>:""}
      </PeopleCard>)

  }

  return (
    <div style={{display:"flex", margin: "1em"}}>
        {peopleCard}
    </div>
  );
}

export default People;

// <SearchPeople />