import React from 'react'
import ReactCardFlip from 'react-card-flip';



const CardContainer = (props) => {
    console.log(props, "Props")
    return(
        <div>
            <p>{props.card.term_name}</p>
            <p>{props.card.definition}</p>
            <img src={props.card.image} alt="image"/>
           <img src={props.card.image_front} alt="image front"/>
        </div>
    )

    
}

export default CardContainer 