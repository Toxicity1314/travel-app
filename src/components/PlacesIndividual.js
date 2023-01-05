import React, {useState} from "react";
import { PlacesCard, Button } from "./styles";

function PlacesIndividual({place}){
    const [markAsBeen, setMarkAsBeen] = useState(false)
    function handleBeenClick() {
        setMarkAsBeen((markAsBeen) => !markAsBeen)
    }

    const [markWantGo, setMarkWantGo] = useState(false)
    function handleWantGoClick() {
        setMarkWantGo((markWantGo) => !markWantGo)
    }

    return(
        <PlacesCard 
            className="card"
            as='ul'
            key={place.id}
            style={{flexWrap:5}}>
            
            <img 
            src={place.image} 
            alt="pic"/>
            <div>{place.city},</div>
            <div>{place.country}</div>

            <Button 
            onClick={handleBeenClick}>{markAsBeen ? "✅" : "❌"}
            </Button>

            <Button 
            onClick={handleWantGoClick}>{markWantGo ? "🤩" : "🤔"}
            </Button>
        
        </PlacesCard>
)}

export default PlacesIndividual