import React, {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import People from "./People";
import Places from "./Places";
import Activities from "./Activities";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [people, setPeople] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/people' )
      .then(res => res.json())
      .then(people => setPeople(people))
  },[])
  return (
    <div className="App"> 
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Home 
        people={people}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}/>}/>  

        <Route path='/people' element={<People people={people}/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </div>
  );
}

export default App;
