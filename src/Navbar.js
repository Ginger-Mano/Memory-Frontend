import React, { useState } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import About from "./About";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        {/* <navbar> */}
        <button onClick={this.props.handleClick} className="start">
          Start New Game
        </button>
        <button className="login">Login</button>
        <button className="logout">Logout</button>

        <button className="about">
          {" "}
          <Link to="/about" className="about">
            About
          </Link>
        </button>

        {/* </navbar> */}
      </div>
    );
  }
}

export default NavBar;
