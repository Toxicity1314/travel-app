import React, { useState } from "react";

import FormActivities from "./FormActivities";
import ActivitiesIndividual from "./ActivitiesIndividual";

function Activities({ activities, setActivities }) {
  let activitiesCard;
  activitiesCard = activities.map((activity) => {
    return (<ActivitiesIndividual activity={activity}/>
    );
  });

  return (
    <div>
      <div
        className="container"
      >
        {activitiesCard}
      </div>
      <FormActivities setActivities={setActivities} activities={activities} />
    </div>
  );
}

export default Activities;
