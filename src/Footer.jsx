import React from "react"
import Button from "./Button";


const Footer = () => {
  const login = () => {
    alert(`Login Sucessful`)
  }
    const myBtn = {
        padding: "10px",
        color: "red",
        backgroundColor: "pink"
    }
  return (
    <div>
        <h2 style={{backgroundColor: "green", fontStyle: "italic", padding: "20px"}}>Logo</h2>
        <p>This is the footer</p>
        <p><i>All rights reserved, &copy; 2024.</i></p>
        <button style={myBtn} > Test</button>
        <Button name= "LogOut" btnColor= "red" eventHandler={login} />
    </div>
  )
}

export default Footer;