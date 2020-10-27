import React from "react"

function Spot(props) {
    return (
        <div>
            <h1>{props.vacationSpots.place}</h1>
            <p>{props.vacationSpots.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <p>{props.vacationSpots.timeToGo}</p>
        </div>
    )
}
export default Spot