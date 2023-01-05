import React from "react"

function SearchPlaces({
    searchPlaces,
    onSearchPlacesChange
}) {

    return
    <div className="ui search">
        <div className="ui icon input">
            <input
                className="prompt"
                type="text"
                id="search"
                placeholder="Search Places"
                value={searchPlaces}
                onChange={(e) => onSearchPlacesChange(e.target.value)}
                />
            <i className="search icon" />
        </div>
    </div>
}

export default SearchPlaces 