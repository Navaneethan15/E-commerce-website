import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    
    const navigate = useNavigate();
    const [keyword , setkeyword] = useState ("");


  const searchHandler = (e) => {
   e.preventDefault();
   navigate(`/search/${keyword}`)
  }
 

  return (
    <form onClick={searchHandler}>
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Seach..."
          id="search_field"
          onChange={(e) => {setkeyword(e.target.value)}}
          value={keyword}
        />

        <div className="input-group-append">
          <button id="search-btn" className="btn"> search
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
