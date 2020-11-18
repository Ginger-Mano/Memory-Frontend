import React, { useState, useEffect }from 'react';
import ReactCardFlip from 'react-card-flip';



const CardContainerFront = (props) => {
    console.log(props,"FRONT")


    let handleClick = (e) => {
        console.log(e,"MADE IT")
        e.preventDefault();
         this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        
      }
    return(
        <div className="cardgrid" >
      
            <div isFlipped={props.isFlipped}className="cardDiv" onClick={handleClick}>
            <p>{props.term_name}</p>
            {/* <p>{props.card.definition}</p> */}
            {/* <img className="backimg" src={props.card.image} alt="image"/> */}
           <img src={props.image_front} alt="image front"/>
           </div>
           
          
        </div>
    )

    
}

export default CardContainerFront 