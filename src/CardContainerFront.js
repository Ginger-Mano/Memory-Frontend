import React, { Component } from "react";
import Dashboard from "./Dashboard";

class CardContainerFront extends Component {
  state = {
    isFlipped: true
  };

  render() {
    return (
      // <div className="cardgrid" >
      <React.Fragment>
        {/* <div className="dashboard-div"> */}
        {/* <Dashboard /> */}
        <div className="outerDiv">
          {/* </div> */}

          <div className="cardDiv">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>{this.props.card.term_name}</p>
                  {/* <p>{props.card.definition}</p> */}
                  {/* <img className="backimg" src={props.card.image} alt="image"/> */}
                  <img
                    id="front-img"
                    src={this.props.card.image_front}
                    alt="image front"
                  />
                </div>

                <div onClick={this.handleClick} className="flip-card-back">
                  {/* <p>{this.props.card.term_name}</p> */}
                  <p>{this.props.card.definition}</p>
                  <img
                    className="backimg"
                    src={this.props.card.image}
                    alt="image"
                  />
                  {/* <img src={this.props.image_front} alt="image front" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default CardContainerFront;
