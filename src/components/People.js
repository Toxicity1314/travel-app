import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { PeopleCard } from "./styles";
import { Button } from "./styles";

function People({people, currentUser, setLoggedIn, setPeople}) {
  const navigate=useNavigate()

  const handleClick = ()=>{
    fetch(`http://localhost:4000/people/${currentUser.id}`,{
      method: 'DELETE'
      })
      .then(res => res.json())
      .then(()=>{
        setLoggedIn(false)
        setPeople(people.filter(person=>{
          if(person.id ===currentUser.id){
            return false
          }else{
            return true
          }
        }))
        navigate("/")    
      })
}
  let peopleCard
  if(people.length){
  peopleCard = people.map(people =>{
    return(
    <PeopleCard as={'ul'} key={people.id}>
      <img src={people.photo} alt="profile"/>
      <li>User: {people.name}</li>
      <li>From: {people.city}</li>
      <li>UserName: {people.username}</li>
      <li>Places I have visited:
        <ul>{people.places.map(place=><li key={place}>{place}</li>)}</ul>
      </li>
      {currentUser.name === people.name ? <Button as={Link} to="/formPeople">edit</Button>:""}
      {currentUser.name === people.name ? <Button as={Link} onClick={handleClick}>Delete</Button>:""}
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
        {currentUser.name === people.name ? <Button as={Link} onClick={handleClick}>Delete</Button>:""}
      </PeopleCard>)

  }

  return (
    <div style={{display:"flex", margin: "1em"}}>
        {peopleCard}
    </div>
  );
}

export default People;