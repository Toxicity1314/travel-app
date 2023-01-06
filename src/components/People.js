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
    if(people.id === currentUser.id){
      people = currentUser
    }
    return(
    <PeopleCard as={'ul'} key={people.id}>
      <img title='User Photo'src={people.photo} alt="profile"/>
      <br/>
      <div title='Username'>@{people.username}</div>
      <br/>
      <div title='Name'>{people.name}</div>
      <div title='Hometown'className='niceTextSmaller'>📍{people.city}</div>
      <br/>
      <div className='easyTextItalic'>Top Destinations:
        <ul>{people.places.map(place=><li title='"Have-been" or "want-to-go"...' key={place}>{place}</li>)}</ul>
      </div>
      <br/>
      <br/>
      {currentUser.name === people.name ? <Button className='easyTextSmallBold' as={Link} to="/formPeople">edit info</Button>:""}
      {currentUser.name === people.name ? <Button className='easyTextSmallBold' as={Link} onClick={handleClick}>delete account</Button>:""}
    </PeopleCard>)
    })
  }else{
     peopleCard =(
      <PeopleCard 
        as={'ul'} 
        key={currentUser.id}
      >
        <img src={currentUser.photo} alt="profile"/>
        <br/>
        <div>@{currentUser.username}</div>
        <br/>
        <div>{currentUser.name}</div>
        <div className='niceTextSmaller'>📍{currentUser.city}</div>
        <br/>
        <br/>
        <br/>
        {currentUser.name === currentUser.name ? <Button className='easyTextSmallBold' as={Link} to="/formPeople">edit info</Button>:""}
        {currentUser.name === currentUser.name ? <Button className='easyTextSmallBold' as={Link} onClick={handleClick}>delete account</Button>:""}
      </PeopleCard>)

  }

  return (
    <div 
    className="container"
    style={{
      display:"flex", 
      margin: "1em",
      flexWrap: "wrap"
      }}>
        {peopleCard}
    </div>
  );
}

export default People;