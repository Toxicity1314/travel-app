import React from "react";
import { ActivitiesCard } from "./styles"
import FormActivities from "./FormActivities";

function Activities({
  activities,
  setActivities
}) {
console.log(activities)
let activitiesCard
activitiesCard = activities.map(activities => {
  return (
    <ActivitiesCard 
      className="card"
      as='ul'
      key={activities.id}>
      
      <img 
        src={activities.image} 
        alt="pic"/>
      <li>Title: {activities.title}</li>
      <li>City: {activities.city}</li>
      <li>Region: {activities.country}</li>
      <li>Tags:
          <ul>{activities.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
      </li>
      
    </ActivitiesCard>
)
})

  return (
    <div>
      <div style={{display:"flex", margin: "1em"}}>
          {activitiesCard}
      </div>
      <FormActivities setActivities={setActivities} activities={activities}/>
    </div>
  );
}

export default Activities;