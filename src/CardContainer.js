import React, { useState, useEffect }from 'react';
import ReactCardFlip from 'react-card-flip';



const CardContainer = (props) => {
    const  [isFlipped, setIsFlipped] = useState(props)

    console.log(props, "Props")

 const handleClick = (evt) => {
        console.log(evt);
    setIsFlipped({
        setIsFlipped: true
    })
    }
    return(
        <div className="cardgrid" >
       
            <div onClick={handleClick} className="cardDiv">
            <p>{props.card.term_name}</p>
            {/* <p>{props.card.definition}</p> */}
            {/* <img className="backimg" src={props.card.image} alt="image"/> */}
           <img src={props.card.image_front} alt="image front"/>
           </div>
          
        </div>
    )

    
}

export default CardContainer 