import React from 'react';
import "./style.css";



function SearchBar(props) {
    return (
      <form className="searchStyle search">
        <div className="form-group">
          <label htmlFor="language">Search Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            list="term"
            type="text"
            className="form-control"
            placeholder="Type in a search term to begin"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }

export default SearchBar;