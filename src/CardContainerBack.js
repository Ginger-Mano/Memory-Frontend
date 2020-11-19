import React, { useState, useEffect }from 'react';
import ReactCardFlip from 'react-card-flip';



const CardContainerBack = (props) => {
    const  [isFlipped, setIsFlipped] = useState(true)

    console.log(props, "Props")

 const handleClick = (evt) => {
        console.log(evt);
    setIsFlipped(!isFlipped)
    }
    return(
        <div className="cardgrid" >
       {/* <ReactCardFlip> */}
            <div isFlipped={props.isFlipped}onClick={handleClick} className="cardDiv">
            {/* <p>{props.card.term_name}</p> */}
            <p>{props.definition}</p>
            {/* <img className="backimg" src={props.card.image} alt="image"/> */}
           <img src={props.image_front} alt="image front"/>
           </div>
           {/* </ReactCardFlip> */}
          
        </div>
    )

    
}

export default CardContainerBack 