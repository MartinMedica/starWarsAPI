import React from "react";
import "./App.css";

import Person from "./components/person";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.getRandomPerson = this.getRandomPerson.bind(this);
  }
  getRandomPerson() {
    const rand = Math.floor(Math.random() * 87 + 1);
    this.setState({
      isLoaded: false
    });
    fetch(`https://swapi.co/api/people/${rand}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  handleClick = e => {
    e.preventDefault();
    this.getRandomPerson();
  };

  componentDidMount() {
    this.getRandomPerson();
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="container">
          <h1 className>StarWars API</h1>
          <Person isLoaded={isLoaded} items={items} />
          <button className="btn" onClick={this.handleClick}>
            Get random person
          </button>
        </div>
      );
    }
  }
}

export default App;
