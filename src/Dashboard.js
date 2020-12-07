import React, { Component } from 'react'
import { render } from '@testing-library/react';


class Dashboard extends Component {



    render() {
        console.log("hi",this.props )

        const {score, games_won, games_lost,username, image,time_spent } = this.props.user
        return (
            <>
                <div className="dashboard">
                    <div className="inner-dash">
                    <h2>DASHBOARD</h2>
                    <p>Username: {username}</p>
                    <img src={image}alt="user-image"/>
                    <p>Score: {score}</p>
                    <p>Time Spent: {time_spent}</p>
                    <p>Games Won: {games_won}</p>
                    <p>Games Lost: {games_lost}</p>
                    </div>

                </div>
            </>
        )
    }
}
export default Dashboard 
