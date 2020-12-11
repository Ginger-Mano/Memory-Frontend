import React from 'react';
import AppWithHooks from './AppWithHooks'
import NavBar from './Navbar'

import './App.css';
import CardContainerFront from './CardContainerFront';
import ReactCardFlip from 'react-card-flip';
import CardContainerBack from './CardContainerBack';
import Dashboard from './Dashboard';


class App extends React.Component {

  // declare a new state variable 
  // const [cards, setCards] =  useState([])

  state = {
    cards: [],
    isFlipped: false,
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')

      .then(res => res.json())
      .then(data =>
        this.setState({
          cards: data
        }))
    fetch('http://localhost:3000/users')

      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data
        })
      )
  }








  render() {
    let front = this.state.cards.map((card) => {
      return <CardContainerFront key={card.id} card={card} randomID={this.randomID} isFlipped={this.state.isFlipped} />
    })
    let userInfo = this.state.users.map((user) => {
      return <Dashboard key={user.id} user={user} />
    })

    return (
      <div className="App">
        <NavBar />

        <div className="most-outer-div">
          <div className="second-div">
            {front}
          </div>
          <div className="div-dash">
            {userInfo}
          </div>
        </div>

      </div>

    );
  }
}
export default App
