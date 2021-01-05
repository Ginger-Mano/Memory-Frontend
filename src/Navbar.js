import React, {useState} from 'react'
import { NavLink, Link } from "react-router-dom"



const NavBar = () => {
    


    return(
        <div className="navbar">
   
         
            {/* <navbar> */}
                <button className="start">Start New Game</button>
                <button className="login">Login</button>
                <button className="logout">Logout</button>
                <NavLink to="/about">
                    <button className="about">About</button>
                </NavLink>

            {/* </navbar> */}

            
        </div>
    )

}

export default NavBar