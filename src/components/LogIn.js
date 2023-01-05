import React, {useState} from "react";

function LogIn({setCurrentUser, people, setLoggedIn, loggedIn}){
    const [formData, setFormData] = useState({userName:"", password:""})
    const handleSubmit = (e)=>{
      e.preventDefault()
      let user = ""
      people.forEach(person =>{
        if(formData.userName=== person.username && formData.password === person.password){
          user=person
          setLoggedIn(!loggedIn)
        }})
       

      setCurrentUser(user)
    }
    const handleOnChange = (e)=>{
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>user name</label>
            <input 
            type="text"
            name="userName"
            onChange={handleOnChange} 
            value={formData.userName}>
            </input>
            <br/>
            <label>password</label>
            <input 
            type="password"
            name="password"
            onChange={handleOnChange}
            value={formData.password}></input>
            <br/>
            <button type="submit" name="password">Log In</button>
        </form>
          )}

export default LogIn