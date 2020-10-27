import React from "react"
import Spot from "./Spot"
import vacationSpots from "./array"

function App() {
    const vacationComponents = vacationSpots.map(spot => <Spot vacationSpots={spot}/>)
    return (
        <div>
            {vacationComponents}
        </div>
    )
}

export default App
