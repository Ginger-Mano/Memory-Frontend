import React from "react";
import CardContainerFront from "./CardContainerFront";
import ReactCardFlip from "react-card-flip";
import CardContainerBack from "./CardContainerBack";
import Dashboard from "./Dashboard";
import About from "./About";
import NewGame from "./NewGame";

class Home extends React.Component {
  state = {
    cards: [],
    isFlipped: false,
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/cards")
      .then(res => res.json())
      .then(data =>
        this.setState({
          cards: this.suffer(data)
        })
      );
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data
        })
      );
  }
  suffer = cards => {
    for (let i = 0; i > cards.length; i++) {
      let randomIdx = Math.floor(Math.random() * cards.length);
      let copyCurrent = { ...cards[i] };
      let copyRandom = { ...cards[randomIdx] };
      cards[i] = copyRandom;
      cards[randomIdx] = copyCurrent;
    }
    return cards;
  };

  render() {
    let front = this.state.cards.map(card => {
      return (
        <CardContainerFront
          key={card.id}
          card={card}
          randomID={this.randomID}
          isFlipped={this.state.isFlipped}
        />
      );
    });
    let userInfo = this.state.users.map(user => {
      return <Dashboard key={user.id} user={user} />;
    });

    return (
      <div>
        <h1>Home</h1>
        <NewGame
          handleClick={this.props.handleClick}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />

        <div className="most-outer-div">
          <div className="second-div">{front}</div>
          <div className="div-dash">{userInfo}</div>
        </div>
      </div>
    );
  }
}

export default Home;
