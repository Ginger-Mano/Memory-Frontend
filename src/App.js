import React from 'react';

import './App.css';

class App extends React.Component{

// declare a new state variable 
// const [cards, setCards] =  useState([])

state = {
  cards: []
}

componentDidMount(){
  fetch('http://localhost:3000/cards')
    .then(res => res.json())
     .then(res => console.log('made it!', res))
}

// useEffect(() => {
//   fetch('http://localhost:3000/cards')
//   .then(res => res.json())
//   .then(res => console.log('made it!', cards))
// },[])

render(){
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          This is App.js
        </p>
    
      </header>
    </div>
);
}
}
export default App
