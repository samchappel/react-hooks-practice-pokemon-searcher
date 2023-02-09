import React, { useState } from "react";

function Search({ setSearchTerm }) {
  
  const [searchInput, setSearchInput ] = useState("")

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
          setSearchTerm(e.target.value)
        }}
         />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
