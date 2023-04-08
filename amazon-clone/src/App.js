import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {

  const [{ user } , dispatch]= useStateValue();

  // useEffect <<<<<<<<powerful
  // piece of code which runs based on a given condition 
  useEffect(()=>{
   const unsubscribe=auth.onAuthStateChanged((authUser) =>{
    if(authUser)
    {
      // user is logged in 
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else
    {
      // user is not logged out 
      dispatch({
        type:"SET_USER",
        user:null,
      })
    }
   });
   return ()=>{
    // Any cleanup operation go in here
    unsubscribe(); 
   }
  },[]);
  console.log("User is >>>",user);
  return (
    <Router>
    <div className="app">
      <Routes>
       <Route path="/checkout" element={<><Header/><Checkout/></>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/" element={<><Header/><Home/>
       </>}  />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
 /*
    We need react-router suppose if localhost.com is the home page to go to check out by localhost.com\checkout ans so on.........
 */