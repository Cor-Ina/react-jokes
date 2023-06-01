/* eslint-disable no-unreachable */
import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke =>
            <Joke 
                key = {joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
    )

    return (
        <div>
            {jokeElements}
        </div>
    )
}

