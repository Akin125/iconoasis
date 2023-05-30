import React, {useEffect, useState} from "react";
import './SignUpStyles.css'


function SignUp(){
    const[loginForm, setLoginForm] = useState(()=> JSON.parse(localStorage.getItem("SignUpData"))||
        {
            UserName: "",
            Email: "",
            password: "",
            ConfirmPassword: ""
        }
    )

    useEffect(
        function (){
            return(
                localStorage.setItem("SignUpData", JSON.stringify(loginForm))
            )
        },
        [loginForm]
    )



    function handleSubmit(event){
        event.preventDefault() //to remove the url log
        alert("Accepted!")
    }

    function handleChange(event){
       const {name , value} = event.target;

       setLoginForm(prevState => (
           {
            ...prevState,
               [name] : value
           })
       )

    }

  return(
      <div className='loginContainer1'>
          <div className="Name-1">Sign  Up</div>
      <div className='loginContainer2'>
      <div className="top-section">
        <div className="Name">ICONOASIS</div>
        <div className="text">Your one-stop icon destination</div>
      </div>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Username' required={true} onChange={handleChange} name='UserName' value={loginForm.UserName}/>

        <input type="email" placeholder='Email' required={true}  onChange={handleChange}  name='Email' value={loginForm.Email}/>

        <input type="password" placeholder='Password' required={true}  onChange={handleChange} name='password' value={loginForm.password}/>

        <input type="password" placeholder='Password' required={true} onChange={handleChange}  name='ConfirmPassword' value={loginForm.ConfirmPassword}/>

          <div><button className="submit"> SIGN UP</button></div>
      </form>
      </div>
      </div>
  )
}

export default SignUp;


