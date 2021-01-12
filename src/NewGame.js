import React from 'react'


const NewGame = (props) => {
    console.log(props, "in new game")
    return(
        <>
        <h1>New Game</h1>
        <div>
        <form>
            <label for="name"></label>

            <input onChange={props.handleChange} type="text" placeholder="Your Name...." value={props.name} name="name"></input>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
        </>
    )
}


export default NewGame