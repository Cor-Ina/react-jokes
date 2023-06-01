import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function display() {
        setIsShown(prevState => !prevState)
    }

    return (
        <div>
            {/* <h3 style={{display: props.setup ? "block" : "none"}}> Setup: {props.setup} </h3> */}

            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick = {display}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}

