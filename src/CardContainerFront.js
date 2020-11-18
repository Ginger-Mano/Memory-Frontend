import React, { useState, useEffect, Component } from 'react';
import ReactCardFlip from 'react-card-flip';



class CardContainerFront extends Component {
    
    
    handleClick = (e) => {
        
        console.log(this.props.card,e, "MADE IT")
        e.preventDefault();
        this.setState({
            isFlipped: !this.props.isFlipped
        })
        // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        
    }
    render() {
        console.log(this.props.isFlipped,"FRONT")

        return (
            <div className="cardgrid" >

                <div className="cardDiv" onClick={this.handleClick}>
                    <p>{this.props.term_name}</p>
                    {/* <p>{props.card.definition}</p> */}
                    {/* <img className="backimg" src={props.card.image} alt="image"/> */}
                    <img src={this.props.image_front} alt="image front" />
                </div>


            </div>
        )
    }


}

export default CardContainerFront 