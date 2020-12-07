import React, { Component } from 'react';




class CardContainerBack extends Component {

    state = {
        isFlipped: false
    }

    handleClick = (e) => {

        console.log(e)
        e.preventDefault();
        this.props.randomID(e)
        this.setState({
            isFlipped: false
        })


    }


    // console.log(props, "Props")
    render() {
        return (

            <div className="cardgrid" >

                {this.state.isFlipped ? null :
                    <div onClick={this.handleClick} className="cardDiv">
                        {/* <p>{props.card.term_name}</p> */}
                        <p>{this.props.definition}</p>
                        {/* <img className="backimg" src={props.card.image} alt="image"/> */}
                        <img src={this.props.image_front} alt="image front" />
                    </div>}


            </div>
        )
    }

}

export default CardContainerBack 