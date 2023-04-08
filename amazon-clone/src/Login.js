import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
 import {  useNavigate} from "react-router-dom";
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] =useState("");
  const [password,setPassword]=useState("");
  const auth = getAuth();
  const login = (event) =>{
    event.preventDefault(); // this stops the refresh !!!

    // do the login logic here

    signInWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
      // logged in , redirect to home page
      navigate("/")
    })
    .catch((e)=>alert(e.message));
  }

  const register = (event) =>{
    event.preventDefault(); // this stops the refresh !!!
   
    // do the register logic here

    createUserWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
      // create a user and logged in , redirect to home page
      navigate("/")
    })
    .catch((e)=>alert(e.message));
  }
  return (
    <div className="login">
     <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="email" name="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
            <h5>Password</h5>
            <input type="password" name="password" value={password}  onChange={(event)=>setPassword(event.target.value)} />
            <button onClick={login} type="submit" className='login__signInButton'>Sign In</button>
        </form>
        <p>
          By Signing-in you agree to my Conditions of Service Agreement. For
          more info see our privacy Notice, our cookies Notice and gather data.
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
