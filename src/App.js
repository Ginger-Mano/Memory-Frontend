import React from "react";
import AppWithHooks from "./AppWithHooks";
import NavBar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  state = {
    name: "",
    username: "",
    id: 6
  };

  handleClick = evt => {
    console.log(evt, "here we are");
  };
  handleChange = evt => {
    console.log(evt.target.value, "in handle change");
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt, "Hit SUbmit");
    const userObj = {
      name: this.state.name,
      username: this.state.username
    };
    fetch("http://localhost3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
      .then(newUserObj => {
        console.log(newUserObj, "new user obj");
      });
  };
  // TUESDAY!
  // We are here making sure the fetch matches backend (promise failed)

  render() {
    return (
      <div className="App">
        <NavBar handleClick={this.handleClick} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleSubmit={this.handleSubmit}
                handleClick={this.handleClick}
                handleChange={this.handleChange}
              />
            )}
          ></Route>
          <Route path="/about" render={() => <About />}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
