import React, { useState, useEffect }from 'react';
import CardContainer from './CardContainer'
import NavBar from './Navbar'

import './App.css';


const AppHooks = () => {

const [cards, setCards] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/cards')
    .then(res => res.json())
    .then((cardsArr) => {
        setCards(cardsArr)
        console.log("This is HOOKS!",cardsArr)
      
    })
},[])

let mappedCards = cards.map((card) => {
    return <CardContainer card={card} key={card.id} />
})
    return (
        <div className="App">
          
           
            <p>
              This is App with Hooks
            </p>
            <NavBar />
            {mappedCards} 
        
        </div>
    );
}

export default AppHooks