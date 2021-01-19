import React from 'react';
import AppWithHooks from './AppWithHooks'
import NavBar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home'
import About from './About';

// -------COPIED TO HOME ----------
// import CardContainerFront from './CardContainerFront';
// import ReactCardFlip from 'react-card-flip';
// import CardContainerBack from './CardContainerBack';
// import Dashboard from './Dashboard';



class App extends React.Component {

  //  -----COPIED TO HOME -----

  // state = {
  //   cards: [],
  //   isFlipped: false,
  //   users: []
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/cards')

  //   .then(res => res.json())
  //   .then(data =>
  //     this.setState({
  //       cards: this.suffer(data)

  //     }))
  //     fetch('http://localhost:3000/users')

  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         users: data
  //       })
  //       )
  //     }

  //  ------- END of copied to home---

  //   suffer = (cards) => {
  //    for(let i = 0; i > cards.length; i++){
  //      let randomIdx = Math.floor(Math.random() * cards.length)
  //      let copyCurrent = {...cards[i]}
  //      let copyRandom = {...cards[randomIdx]}
  //      cards[i] = copyRandom
  //      cards[randomIdx] = copyCurrent
  //    }
  //    return cards
  //  }

  state = {
    name: "",
    username: ''
}

handleClick = (evt) => {
  console.log(evt,"here we are")
    
}
handleChange = (evt) => {
  console.log(evt.target.value,'in handle change')
  this.setState({
    [evt.target.name]: evt.target.value

  })
}
handleSubmit = (evt) => {
  
evt.preventDefault()
console.log(evt, "Hit SUbmit")
let userObj = {
  user: {
   name: this.state.name,
   username: this.state.username
  }
}
fetch('http://localhost3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userObj) 

})
.then(res => res.json())
.then(newUserObject => {
 console.log(newUserObject,"new user obj")
})

}
// TUESDAY!
// We are here making sure the fetch matches backend (promise failed)


  render() {



    // -------COPIED TO HOME---------
    // let front = this.state.cards.map((card) => {
    //   return <CardContainerFront key={card.id} card={card} randomID={this.randomID} isFlipped={this.state.isFlipped} />
    // })
    // let userInfo = this.state.users.map((user) => {
    //   return <Dashboard key={user.id} user={user} />
    // })

    return (
      <div className="App">

        <NavBar handleClick={this.handleClick}/>
        <Switch>
          <Route exact path="/" render={() => <Home handleSubmit={this.handleSubmit} handleClick={this.handleClick} handleChange={this.handleChange} />}></Route>
          <Route path="/about" render={() => <About />}></Route>


        </Switch>

        {/* COPIED TO HOME */}
        {/* <div className="most-outer-div">
          <div className="second-div">
            {front}
          </div>
          <div className="div-dash">
            {userInfo}
          </div>
        </div>
       
      </div> */}
      </div>
    )
  }
}
export default App
