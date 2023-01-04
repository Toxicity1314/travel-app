import React from "react";

function SearchPeople({searchPeople, onSearchPeopleChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          type="text"
          id="search"
          placeholder="Type to search..."
          value={searchPeople}
          onChange={
            (e) =>
              onSearchPeopleChange(e.target.value)
          }
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default SearchPeople;