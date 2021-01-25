import React from "react";

const NewGame = props => {
  return (
    <>
      <h1>New Game</h1>
      <div>
        <form onSubmit={props.handleSubmit}>
          <label for="name"> </label>
          <input
            onChange={props.handleChange}
            type="text"
            placeholder="Your Name...."
            value={props.name}
            name="name"
          ></input>

          <input
            onChange={props.handleChange}
            type="text"
            placeholder="Your Username...."
            value={props.username}
            name="username"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};

export default NewGame;
