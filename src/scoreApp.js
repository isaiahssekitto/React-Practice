import { useState } from "react"

function ScoreApp() {
    const [playerOne, setPlayerOne] = useState(0)
    const [playerTwo, setPlayerTwo] = useState(0)
    return (
        <>
            <h1>Score App</h1>

            <button onClick={() => setPlayerOne(playerOne + 1)}>Add Score</button>
            <p>{playerOne}</p>
            <button onClick={() => setPlayerTwo(playerTwo + 1)}>Add Score</button>
            <p>{playerTwo}</p>
            <button onClick={()=>{
                setPlayerOne(0)
                setPlayerTwo(0)
            }}>Reset</button>
        </>
    )
}
export default ScoreApp