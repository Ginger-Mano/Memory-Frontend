import React, { Component } from 'react';




class CardContainerFront extends Component {
    state = {
        isFlipped: true
    }

    handleClick = (e) => {

        console.log(e)
        e.preventDefault();

        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    render() {
        console.log(this.props);

        return (
            // <div className="cardgrid" >

<React.Fragment>
  
                <div className="cardDiv" onClick={this.handleClick}>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p>{this.props.card.term_name}</p>
                                {/* <p>{props.card.definition}</p> */}
                                {/* <img className="backimg" src={props.card.image} alt="image"/> */}
                                <img src={this.props.card.image_front} alt="image front" />
                                </div>
                          
                    
                

                <div onClick={this.handleClick} className="flip-card-back">
                    {/* <p>{this.props.card.term_name}</p> */}
                    <p>{this.props.card.definition}</p>
                    <img className="backimg" src={this.props.card.image} alt="image" />
                    {/* <img src={this.props.image_front} alt="image front" /> */}
                </div>
                </div>
                    </div>
                    </div>
              
        
                {/* </div> */}
                </React.Fragment>
        )
    }


}

export default CardContainerFront 