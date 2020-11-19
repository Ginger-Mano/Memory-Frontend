import React, { useState, useEffect }from 'react';
import CardContainerFront from './CardContainerFront'
import NavBar from './Navbar'
import ReactCardFlip from 'react-card-flip';

import './App.css';
import CardContainerBack from './CardContainerBack';


const AppHooks = () => {

const [cards, setCards] = useState([])
const [isFlipped, setIsFlipped] = useState(false)

useEffect(() => {
    fetch('http://localhost:3000/cards')
    .then(res => res.json())
    .then((cardsArr) => {
        setCards(cardsArr)
        console.log("This is HOOKS!",cardsArr)
      
    })
},[])

//  cards.map((card) => {
//      return <CardContainerFront card={card} isFlipped={isFlipped} setIsFlipped={setIsFlipped} key={card.id} />,


    
// <CardContainerBack card={card} isFlipped={isFlipped} setIsFlipped={setIsFlipped} key={card.id} />
// })
    return (
        <div className="App">
          
           
            <p>
              This is App with Hooks
            </p>
            <NavBar />
            
                {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
                   
                <CardContainerBack cards={cards}> Back of card</CardContainerBack>
                <CardContainerFront cards={cards}>Front Of card </CardContainerFront> 
            {/* </ReactCardFlip> */}
        
        </div>
    );
}

export default AppHooks