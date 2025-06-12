import React from "react"

const isLoggedIn = true;
const username = "Obi";

const Button = (props) => {
    const submit = (a) => {
        alert(`The button ${a} has been clicked on!`)
    }
    return (
        <div style={{
            color: props.btnColor,
            backgroundColor: "grey",
            cursor: "pointer",
            width: "200px",
            padding: "5px"
        }} onClick={props.eventHandler}>
            {props.name} Button
        </div>
        
    )
}

export default Button