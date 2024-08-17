import logo from "./logo.svg";
import React,{useEffect} from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {

useEffect(()=>{
  const fetchPost = async()=>{
   const response = await fetch("https://insta-backend-hr3a.onrender.com/allposts",{
      method:"GET",
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = await response.json()
    console.log(data);

  }
  
  fetchPost()
},[])

  return (
    <BrowserRouter>

      <div className="App">

        <Routes>

          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/signin" element={<SignIn></SignIn>} />
        </Routes>

        {/* <SignIn /> */}

      </div>

    </BrowserRouter>



  );
}

export default App;
