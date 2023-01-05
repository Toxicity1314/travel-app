import React, {useState} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom"
import { PeopleCard } from "./styles";
import { Button } from "./styles";

function People({people, currentUser, setLoggedIn, setPeople, setCurrentUser}) {
  const navigate=useNavigate()
  const [clicked, setClicked] = useState(false)
  const {pathname} = useLocation()

  const handleClick = ()=>{

    if (clicked === false){
      alert("This will delete your account. Please click the delete button again if you would like to delete your account")
      setClicked(true)
    }else{
    fetch(`http://localhost:4000/people/${currentUser.id}`,{
      method: 'DELETE'
      })
      .then(res => res.json())
      .then(()=>{
        setLoggedIn(false)
        setPeople(people.filter(person=>{
          if(person.id ===currentUser.id){
            setCurrentUser(null)
            return false
          }else{
            return true
          }
        }))
        navigate("/")    
      })
    }
}
  let peopleCard
  if(pathname === "/people"){
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
      <PeopleCard as={'ul'} key={currentUser.id}>
        <img src={currentUser.photo} alt="profile"/>
        <li>User: {currentUser.name}</li>
        <li>From: {currentUser.city}</li>
        <li>UserName: {currentUser.username}</li>
        <li>Places I have visited:
          <ul>{currentUser.places.map(place=><li key={place}>{place}</li>)}</ul>
        </li>
        {currentUser.name === currentUser.name ? <Button as={Link} to="/formPeople">edit</Button>:""}
        {currentUser.name === currentUser.name ? <Button as={Link} onClick={handleClick}>Delete</Button>:""}
      </PeopleCard>)

  }

  return (
    <div style={{display:"flex", margin: "1em"}}>
        {peopleCard}
    </div>
  );
}

export default People;