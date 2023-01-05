import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
import { Form } from "semantic-ui-react";

function FormActivities({
    // activities,
    onAddActivities
}) {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("") // user can paste a google maps link or just the actual address
    const [tags, setTags] = useState([]) // must have comma between tags
    const [activitiesImage, setActivitiesImage] = useState("")

    const handleActivitiesSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:4000/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                city: city,
                country: country,
                address: address,
                tags: tags,
                image: activitiesImage
            }),
        })
        .then((resp) => resp.json())
        .then((newActivities) => onAddActivities(newActivities)) // make sure onAddPlace is propped down correctly
    };

    return (
        <div>
            <h3>Add an Activity!</h3>
            <Form onSubmit={handleActivitiesSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid
                        label="title"
                        placeholder="activity title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
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
                        label="address"
                        placeholder="address"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Form.Input fluid
                        label="tags"
                        placeholder="tags must be separated by commas"
                        name="tags"
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <Form.Input fluid
                        label="pic"
                        placeholder="pic of activity"
                        name="pic"
                        onChange={(e) => setActivitiesImage(e.target.value)}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default FormActivities