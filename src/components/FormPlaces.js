import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
import { Form } from "semantic-ui-react";

function FormPlaces({
places,
setPlaces
}) {

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [placeImage, setPlaceImage] = useState("")

    function handlePlaceSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:4000/places", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, //deleted extra ,
            body: JSON.stringify({
                city: city,
                country: country,
                image: placeImage
            })
        })
        .then((resp) => resp.json())
        .then((newPlace) => setPlaces([...places, newPlace])) // make sure setAddPlace is propped down correctly
    }


    return(
        <div>
            <h3>Add a Destination</h3>
            <Form onSubmit={handlePlaceSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid 
                        label="City" 
                        placeholder="City"
                        name="City"
                        onChange={(e) => setCity(e.target.value)}
                        />
                    <Form.Input fluid
                        label="Country"
                        placeholder="Country"
                        name="Country" 
                        onChange={(e) => setCountry(e.target.value)}
                        />
                    <Form.Input fluid
                        label="Image URL"
                        placeholder="Image URL"
                        name="Image URL" 
                        onChange={(e) => setPlaceImage(e.target.value)}
                        />
                </Form.Group>
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        </div>
    )

}

export default FormPlaces