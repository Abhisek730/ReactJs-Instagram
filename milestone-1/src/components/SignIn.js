import React, { useState, useContext } from "react";
import "./SignIn.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import SampleModal from "./SampleModal";




export default function SignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }

  return (
    <div className="signIn">
      <button onClick={openModal}>opoen modal</button>
      <SampleModal isModalOpen={isModalOpen} closeModal={closeModal}></SampleModal>
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt="" />
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"


            />
          </div>
          <input type="submit" id="login-btn" value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
