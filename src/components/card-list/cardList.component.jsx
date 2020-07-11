import React from "react";

import Card from "../cards/cards.component";
import "./cardlist.component.css";

const Cardlist = props => {
  console.log(props);
  console.log(props.children);

  return (
    <div className="card-list">
      {props.students.map(stud => (
        <Card key={stud.id} student={stud} />
      ))}
    </div>
  );
};

export default Cardlist;
