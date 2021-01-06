import React, { useState } from 'react'
import { NavLink, Link, Switch, Route } from "react-router-dom"
import About from './About'



const NavBar = () => {



    return (
        <div className="navbar">


            {/* <navbar> */}
            <button className="start">Start New Game</button>
            <button className="login">Login</button>
            <button className="logout">Logout</button>
           

                {/* HERE WE ARE FROM YESTERDAY!!! */}
            
                    <Link to="/about" className="about">About</Link>
             
            

            {/* </navbar> */}


        </div>
    )

}

export default NavBar