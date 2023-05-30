import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className='mainNav'>
            <div className="nav">ICONOASIS</div>

            <div className="user">
                UserName<Link to='/'className='ss'><span>Sign out</span></Link>
            </div>
        </div>
    )
}