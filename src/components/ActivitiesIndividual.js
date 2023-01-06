import React, {useState} from "react";
import { ActivitiesCard, Button } from "./styles";

function ActivitiesIndividual ({activity}){
      // Mark as 'Done' button
  const [markAsDone, setMarkAsDone] = useState(false);
  function handleDoneClick() {
    setMarkAsDone((markAsDone) => !markAsDone);
  }

  // Mark as 'Enjoyed' button
  const [markEnjoyed, setMarkEnjoyed] = useState(false);
  function handleEnjoyedClick() {
    setMarkEnjoyed((markEnjoyed) => !markEnjoyed);
  }


    return (
        <ActivitiesCard className="card" as="ul" key={activity.id}>
            <img src={activity.image} alt="pic" />
            <div
            style={{
                alignItems: "center",
                alignContent: "center",
                alignText: "center",
            }}
            >
            {activity.title}
            </div>
            <div className="niceTextSmaller">
            {activity.city}, {activity.country}
            </div>
            <br />
            <div className="easyTextItalic">
            Tags:
            <ul className="easyTextSmaller">
                {activity.tags.map((tag) => (
                <li key={tag}>{tag}</li>
                ))}
            </ul>
            <br />
            </div>

            <Button style={{ width: 40, height: 40 }} onClick={handleDoneClick}>
            {markAsDone ? "✅" : "❌"}
            </Button>

            <Button style={{ width: 40, height: 40 }} onClick={handleEnjoyedClick}>
            {markEnjoyed ? "🤩" : "😒"}
            </Button>
        </ActivitiesCard>
    
    )
}

export default ActivitiesIndividual