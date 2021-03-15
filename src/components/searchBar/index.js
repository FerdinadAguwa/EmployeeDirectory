import React from 'react';
import "./style.css";



function SearchBar(props) {
    return (
      <form className="searchStyle search">
        <div className="form-group">
          <label htmlFor="language">Search Name:</label>
          <input
            // value={props.search}
            // onChange={props.handleInputChange}
            // name="term"
            // list="term"
            // type="text"
            // className="form-control"
            // placeholder="Type in a search term to begin"
            // id="term"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }

export default SearchBar;