import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import People from "./People";
import Places from "./Places";
import Activities from "./Activities";


function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>      
        <Route path='/people' element={<People/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </div>
  );
}

export default App;
