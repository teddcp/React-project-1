import React, { Component } from "react";
import Cardlist from "./components/card-list/cardList.component";
import Searchbar from "./components/searchbar/searchbar.component";

import "./styles.css";

class Mycomponent extends Component {
  state = {
    students: [],
    searchedVal: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ students: data }));
  }

  change = e => {
    console.log(`searched val is ${e.target.value}`);
    this.setState({ searchedVal: e.target.value }, () => {
      console.log(`changed state - ${this.state.searchedVal}`); // call back function
    });
  };

  render() {
    const { students, searchedVal } = this.state;
    console.log("rednering...", searchedVal);
    const filteredStuds = students.filter(stud =>
      stud.name.toLowerCase().includes(searchedVal.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monstors Rolodex</h1>
        <Searchbar change={this.change} />
        <Cardlist students={filteredStuds} />
      </div>
    );
  }
}

export default Mycomponent;
