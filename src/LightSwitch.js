import { useState } from "react"

function LightSwitch() {
    const [isOn, setIsOn] = useState(true)
    return (<>
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "turn Off" : "turn on"}
        </button><br />
        <p>{isOn ? "light is on" : "Light is off"}</p>

    </>

    )

}
export default LightSwitch