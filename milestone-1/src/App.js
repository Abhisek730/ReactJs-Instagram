import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {


  return (
    <BrowserRouter>

      <div className="App">

        <Routes>

          <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>

        {/* <SignIn /> */}

      </div>

    </BrowserRouter>



  );
}

export default App;
