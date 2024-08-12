import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("")
  async function submitHandler(e) {
    e.preventDefault()
    console.log(email, username, fullname, password);
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: fullname,
          email: email,
          password: password,
          userName: username
        })
      })
      const data = await response.json()
      console.log(data);
    } catch (err) {

    }
  }
  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form" >
          <img className="signUpLogo" src={logo} alt="" />
          <p className="loginPara">
            Sign up to see photos and videos <br /> from your friends
          </p>
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} name="name" id="name" placeholder="Full Name" />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input onClick={submitHandler} type="submit" id="submit-btn" value="Sign Up" />
        </div>
        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
