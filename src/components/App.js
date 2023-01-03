import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Test from "./Test";

function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>      
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
