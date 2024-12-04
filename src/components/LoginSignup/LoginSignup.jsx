import React, { useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../../firebaseConfig'

import "./LoginSignup.css"
import mail from "../assets/mail.png"
import profi from "../assets/profi.png"
import password from "../assets/password.png"
const LoginSignup = () => {
    const [action, setAction] = useState("Login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text"> {action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action ==="Login" ? <div></div> :<div className="input">
                <img className='image' src={profi} />
                <input type='text'placeholder ="Name"/>
            </div>
            }
            
            <div className="input">
                <img className='image' src={mail}/>
                <input type='email'placeholder='Email Id'/>
            </div>
            <div className="input">
                <img className='image' src={password}/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action ==="Sign Up" ? <div></div>:<div className="forgot-password">Forgot your password? <span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray": "submit"} onClick={()=> (setAction("Sign Up"))}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => (setAction("Login"))}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup