import React from "react";

import "./searchbar.style.css";

const Searchbar = props => {
  return (
    <div>
      <input
        className="search"
        type="search"
        onChange={props.change}
        placeholder="Search here.."
      />
    </div>
  );
};

export default Searchbar;
