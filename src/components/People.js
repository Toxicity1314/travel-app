import React, {useEffect, useState} from "react";
import { PeopleCard } from "./styles";

function People({people}) {


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