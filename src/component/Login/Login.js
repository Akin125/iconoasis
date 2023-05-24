import React from "react";
import './LoginStyles.css'

function Login(){
  return(
      <>
      <div className="top-section">
        <p className="Name">ICONOASIS</p>
        <p className="text">Your one-stop icon destination</p>
      </div>

      <div className="user-info">
        <p className="info-text">Username:</p>
        <input type="text"/>
        <p className="info-text">Email:</p>
        <input type="email"/>
        <p className="info-text">Password:</p>
        <input type="password"/>
        <p className="info-text">Confirm Password:</p>
        <input type="password"/>
      </div>

      <input className="submit" value="SIGN UP" type="submit"/>

      </>
  )
}

export default Login;


