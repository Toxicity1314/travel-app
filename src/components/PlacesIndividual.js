import React, {useState,useEffect} from "react";
import { PlacesCard, Button } from "./styles";

function PlacesIndividual({place, currentUser, setCurrentUser}){
    useEffect(()=>{
        for (const userPlace of currentUser.places){
             if(userPlace === place.city){
                 console.log("I made it")
                 setMarkAsBeen(true)
                 break
             }
     }
    },[])
    const [markAsBeen, setMarkAsBeen] = useState(false)
    function handleBeenClickTrue() {
        fetch(`http://localhost:4000/people/${currentUser.id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({...currentUser, places:currentUser.places.filter(userPlace =>{
                if(userPlace !== place.city){
                    return true
                }else{
                    return false
                }
            })})
            })
            .then(res => res.json())
            .then(()=>{ 
                setCurrentUser({...currentUser, places:currentUser.places.filter(userPlace =>{
                    if(userPlace !== place.city){
                        return true
                    }else{
                        return false
                    }
                })})
                setMarkAsBeen(!markAsBeen)
            })
    }
    
    function handleBeenClickFalse() {
        fetch(`http://localhost:4000/people/${currentUser.id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({...currentUser, places:[...currentUser.places, place.city]})
            })
            .then(res => res.json())
            .then(()=>{ 
                setCurrentUser({...currentUser, places:[...currentUser.places, place.city]})
                setMarkAsBeen(!markAsBeen)
                    
      })
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

            {markAsBeen ? <Button onClick={handleBeenClickTrue}>✅</Button>:<Button onClick={handleBeenClickFalse}>❌</Button>}


            <Button 
            onClick={handleWantGoClick}>{markWantGo ? "🤩" : "🤔"}
            </Button>
        
        </PlacesCard>
)}

export default PlacesIndividual