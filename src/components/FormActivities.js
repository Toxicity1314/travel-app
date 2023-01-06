import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function FormActivities({
    activities,
    setActivities
}) {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("") // user can paste a google maps link or just the actual address
    const [tags, setTags] = useState([]) // must have comma between tags (array?)
    const [activitiesImage, setActivitiesImage] = useState("")

    const handleActivitiesSubmit = e => {
        e.preventDefault()
        const fixingTags = tags.split(",")
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
                tags: fixingTags,
                image: activitiesImage
            }),
        })
        .then((resp) => resp.json())
        .then((newActivities) => setActivities([...activities, newActivities])) // make sure onAddPlace is propped down correctly
    };

    return (
        <div>
            <h3>Add an Activity</h3>
            <Form onSubmit={handleActivitiesSubmit}>
                <Form.Group widths="equal">
                    <Form.Input fluid
                        label="Title"
                        placeholder="activity title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Input fluid
                        label="City"
                        placeholder="city"
                        name="City"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Input fluid
                        label="Country"
                        placeholder="country"
                        name="Country"
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <Form.Input fluid
                        label="Address"
                        placeholder="address"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Form.Input fluid
                        label="Tags (separate with commas)"
                        placeholder="tag,tag,tag"
                        name="tags"
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <Form.Input fluid
                        label="Image Link"
                        placeholder="link to image"
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