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
    isFlipped: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards')
      .then(res => res.json())
      .then(data =>
        this.setState({
          cards: data
        }))
  }
  

 

  render() {
    let front = this.state.cards.map((card) => {
      return <CardContainerFront key={card.id} card={card}  isFlipped={this.state.isFlipped} />
      })

    return (
      <div className="App">
        <NavBar />
       
      
      {front}
      {/* <Dashboard /> */}

      </div>

    );
  }
}
export default App
