

import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";

import {auth} from "./firebase";
import { createUserWithEmailAndPassword , sendEmailVerification , updateProfile } from "firebase/auth";
import { useState } from "react";

function SignIn() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("")

    const navigate = useNavigate();

    const handleSignUp = async(e)=>{
        e.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(auth , email , password)
            await updateProfile(response.user , {displayName:username})
            if(response){
                alert("You have successfully sign up try to login !!");
                navigate("/login")
            }
        } catch (error) {
            alert(error.message);
        }
        setUsername("");
        setPassword("");
        setEmail("");
    }


  return (
    <>
      <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>Already have an account? <Link to="/login">Sign In</Link></span>
        </div>
        <div className="form" >
        <form action="" method="post" onSubmit={handleSignUp}>
          <input type="text" name="username" id="username" placeholder="UserName" value={username} onChange={(e)=>{setUsername(e.currentTarget.value)}}/>
          <input type="email" name="email" placeholder="Email" id="email" value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
          <input type="password" name="password" placeholder="Password" id="password" value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
           <input type="submit" value="Sign up" className="btn"/>
          </form>
        </div>
        <div className="card_terms">
            <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn