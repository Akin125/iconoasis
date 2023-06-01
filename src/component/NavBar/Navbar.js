import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className='mainNav'>
            <div className="nav">ICONOASIS</div>

            <div className="user">
                UserName <Link to='/login'className='ss'><span>Login</span></Link> <Link to='/signup'className='ss'><span>Sign Up</span></Link>
            </div>
        </div>
    )
}