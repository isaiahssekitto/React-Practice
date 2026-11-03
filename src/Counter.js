import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
            <button onClick={() => setCount(Math.min(20, count + 1))}>+</button>
            <button onClick={() => setCount(Math.min(20, count + 5))}>Add 5</button>
            <button onClick={() => setCount(Math.min(20, count + 10))}>add 10</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>{count}</p>
            {count === 20 && (
                <p>You have reached the max!!</p>
            )}



        </>

    )
}
export default Counter