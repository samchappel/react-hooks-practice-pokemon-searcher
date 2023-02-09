import React, { useState } from "react";

function Search({ updateSearch }) {
  
  const [searchInput, setSearchInput ] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(searchInput)
  }

  return (
    <div onSubmit={handleSubmit} className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt"
        id="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
         />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
