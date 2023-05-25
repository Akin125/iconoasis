import React from "react";
import './LoginStyles.css'

function Login(){
  return(
      <div className='loginContainer1'>
      <div className='loginContainer2'>
      <div className="top-section">
        <div className="Name">ICONOASIS</div>
        <div className="text">Your one-stop icon destination</div>
      </div>

      <form>

        <input type="text" placeholder='Username' required={true}/>

        <input type="email" placeholder='Email' required={true}/>

        <input type="password" placeholder='Password' required={true}/>

        <input type="password" placeholder='Password' required={true}/>

          <button className="submit"> SIGN UP</button>
      </form>



      </div>
      </div>
  )
}

export default Login;


