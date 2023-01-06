import React, {useState,useEffect} from "react";
import { PlacesCard, Button } from "./styles";
import { useLocation } from "react-router-dom";

function PlacesIndividual({place, currentUser, setCurrentUser}){
    const {pathname} = useLocation()
    useEffect(()=>{
        for (const userPlace of currentUser.places){
             if(userPlace === place.city){
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

    let showBeen
    let showInterested
    if( pathname === "/places"){
        showBeen = markAsBeen ? <Button onClick={handleBeenClickTrue}>✅</Button>:<Button onClick={handleBeenClickFalse}>❌</Button>
        showInterested = <Button onClick={handleWantGoClick}>{markWantGo ? "🤩" : "🤔"}</Button>
    }
    
    

    return(
        <PlacesCard 
            className="card"
            key={place.id}
            >
            
            <img 
            src={place.image} 
            alt="pic"/>
            <div>{place.city},</div>
            <div>{place.country}</div>

            {showBeen}
            {showInterested}
            
        </PlacesCard>
)}

export default PlacesIndividual