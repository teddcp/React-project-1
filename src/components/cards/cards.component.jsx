import React from "react";

import "./cards.style.css";

const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.student.id}?set=set2&size=180x180`}
      alt=""
    />
    <h3>{props.student.name}</h3>
    <p>{props.student.email}</p>
  </div>
);

export default Card;
