import React from "react";
import {Card} from "semantic-ui-react"
import { PlacesCard } from "./styles"

function CardPlaces ({
    city,
    country,
    image
}) {

    return (
        <PlacesCard as='ul'>

                <img src={image} alt="pic"/>
                <li>{city}</li>
                <li>{country}</li>
        </PlacesCard>
    )

}

export default CardPlaces