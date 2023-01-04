import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

function FormPeople({people, loggedIn, setLoggedIn, setPeople, setCurrentUser, currentUser}) {
    const [formData, setFormData] = useState(currentUser)
    let navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("formData")
        console.log(typeof(formData.places))
        if(typeof(formData.places)==="string"){
            formData.places= formData.places.split(",")
            formData.places= formData.places.map(place=>place.trim())
        }
        if(formData.id){
            fetch(`http://localhost:4000/people/${formData.id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(()=>{
                setCurrentUser(formData)
                setPeople(people.map(person=>{
                    if(person.id ===formData.id){
                        return formData
                    }else{
                        return person
                    }
                }))
                navigate("/")    
      })
       
        }else{   
            fetch('http://localhost:4000/people',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            } )
            .then(res => res.json())
            .then(()=>{
                setCurrentUser(formData)
                setPeople([...people, formData])
                setLoggedIn(!loggedIn)
            })
        }
    }

    const handleOnChange = (e)=>{
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (

        <Form style={{marginTop: "20%", display:"block"}}>
            <Form.Field>
                <label>First and last name</label>
                <br/>
                <input
                    placeholder='First and last name'
                    type="text"
                    name="name"
                    value= {formData.name}
                    onChange={handleOnChange}
                />
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <br/>
                <input 
                    placeholder='City'
                    type="text"
                    name="city"
                    value= {formData.city}
                    onChange={handleOnChange}
                />
            </Form.Field>
            <Form.Field>
                <label>User Name</label>
                <br/>
                <input 
                    placeholder='User Name'
                    type="text"
                    name="username"
                    value= {formData.username}
                    onChange={handleOnChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <br/>
                <input 
                    placeholder='Password' 
                    type="password"
                    name="password"
                    value= {formData.password}
                    onChange={handleOnChange}
                />
            </Form.Field>
            <Form.Field>
                <label>photo</label>
                <br/>
                <input 
                    placeholder='Photo'
                    type="text"
                    name="photo"
                    value= {formData.photo}
                    onChange={handleOnChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Places(must place a comma between each place)</label>
                <br/>
                <input 
                    placeholder='Places'
                    type="text"
                    name="places"
                    value= {formData.places}
                    onChange={handleOnChange}
                />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>

    )
}

export default FormPeople