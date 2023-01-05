import React, {useState} from "react";
import { ActivitiesCard, Button } from "./styles"
import FormActivities from "./FormActivities";

function Activities({
  activities,
  setActivities
}) {

  // Mark as 'Done' button
  const [markAsDone, setMarkAsDone] = useState(false)
  function handleDoneClick() {
    setMarkAsDone((markAsDone) => !markAsDone)
  }
  
  // Mark as 'Enjoyed' button
  const [markEnjoyed, setMarkEnjoyed] = useState(false)
  function handleEnjoyedClick() {
    setMarkEnjoyed((markEnjoyed) => !markEnjoyed)
  }


let activitiesCard
activitiesCard = activities.map(activity => {
  return (
    <ActivitiesCard 
      className="card"
      as='ul'
      key={activity.id}>
      
      <img 
        src={activity.image} 
        alt="pic"/>
      <li>Title: {activity.title}</li>
      <li>City: {activity.city}</li>
      <li>Region: {activity.country}</li>
      <li>Tags:
          <ul>{activity.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
      </li>

      <Button
        style={{width:60, height:100}}
        onClick={handleDoneClick}>Done?{markAsDone ? "✅" : "❌"}
      </Button>

      <Button
        style={{width:60, height:100}}
        onClick={handleEnjoyedClick}>Enjoyed?{markEnjoyed ? "🤩" : "😒"}
      </Button>

      
    </ActivitiesCard>
)
})

  return (
    <div>
      <div 
        style={{display:"flex", margin: "1em"}}
        >
          {activitiesCard}
      </div>
      <FormActivities 
        setActivities={setActivities} 
        activities={activities}
      />
    </div>
  );
}

export default Activities;