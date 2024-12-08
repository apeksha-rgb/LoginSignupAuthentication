import React, { act, useState } from 'react'
import "./LoginSignup.css"
import {auth} from "../../firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import mail from "../assets/mail.png"
import profi from "../assets/profi.png"
import pass from "../assets/pass.png"


const LoginSignup = () => {
    const [action, setAction] = useState("Login")
    const  [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async() => { 
       if (action === "Sign Up"){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user
            console.log("User Signed Up: ",user)

        }catch(error){
            console.error("error during signup", error.message)

        }
    } else if(action === "Login"){
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log("User Logged in: ", user)
        }
        catch (error){
            console.error(error.message)
        }
    }  

            
       
    }
        
        
    
  
    return (
    <div className='container'>
        <div className="header">
            <div className="text"> {action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action ==="Login" ? <div></div> :<div className="input">
                <img className='image' src={profi} />
                <input type='text'placeholder ="Name"
                value={name}
                onChange={ (e) => setName(e.target.value)}/>
            </div>
            }
            
            <div className="input">
                <img className='image' src={mail}/>
                <input type='email'placeholder='Email Id'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img className='image' src={pass}/>
                <input type='password' placeholder='Password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>
        </div>
        {action ==="Sign Up" ? <div></div> : <div className="forgot-password">Forgot your password? <span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray": "submit"} onClick={()=> {setAction("Sign Up"); handleSubmit();}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login"); handleSubmit();}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup