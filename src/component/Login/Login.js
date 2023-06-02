import React, {useEffect, useState} from "react";
import '../SignUp/SignUpStyles.css'
import {Link} from "react-router-dom";


function Login(){
    const[loginForm, setLoginForm] = useState(()=> JSON.parse(localStorage.getItem("LoginData"))||
        {
            // UserName: "",
            Email_Username: "",
            password: "",
            // ConfirmPassword: ""
        }
    )

    useEffect(
        function (){
            return(
                localStorage.setItem("LoginData", JSON.stringify(loginForm))
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
            <div className="Name-1">LOGIN</div>
            <div className='loginContainer2'>
                <div className="top-section">
                    <div className="Name">ICONOASIS</div>
                    <div className="text">Your one-stop icon destination</div>
                </div>

                <form onSubmit={handleSubmit}>

                    {/*<input type="text" placeholder='Username' required={true} onChange={handleChange} name='UserName' value={loginForm.UserName}/>*/}

                    <input type="text" placeholder='Email/Username' required={true}  onChange={handleChange}  name='Email_Username' value={loginForm.Email_Username}/>

                    <input type="password" placeholder='Password' required={true}  onChange={handleChange} name='password' value={loginForm.password}/>

                    {/*<input type="password" placeholder='Password' required={true} onChange={handleChange}  name='ConfirmPassword' value={loginForm.ConfirmPassword}/>*/}

                    <div><button className="submit">LOGIN</button></div>
                    <div className="alt">Dont`t have an account? <Link to='/signup' className='sss'><span>Sign Up</span></Link></div>
                </form>
            </div>
        </div>
    )
}

export default Login;


