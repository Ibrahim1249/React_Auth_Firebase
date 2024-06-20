import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"
import { useState } from "react";

function LogIn() {
    const [loginPassword,setLoginPassword] = useState("");
    const [loginEmail,setLoginEmail] = useState("")

    const navigate = useNavigate()

    const handleLogin = async(e)=>{
        e.preventDefault()
      try {
        const response = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        navigate("/landing")
    
      } catch (error) {
        alert(error.message)
      }

      setLoginEmail("");
      setLoginPassword("");
    }
  return (
    <div className="container">
    <div className="login-card">
      <div className="card_title">
        <h1>Login </h1>
      </div>
      <div className="form">
      <form action="" method="post" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" id="email" value={loginEmail} onChange={(e)=>{setLoginEmail(e.currentTarget.value)}}/>
        <input type="password" name="password" placeholder="Password" id="password"  value={loginPassword} onChange={(e)=>{setLoginPassword(e.currentTarget.value)}}/>
         <input type="submit" value="Log in" className="btn"/>
        </form>
      </div>
      <div className="card_terms">
          <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
      </div>
    </div>
  </div>
  )
}

export default LogIn