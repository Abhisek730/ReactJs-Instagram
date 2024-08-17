import React, { useState } from 'react'
import logo from "../img/logo.png";
import './Css/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()




    async function handleSubmit() {
        try {

            const response = await fetch("https://insta-backend-hr3a.onrender.com/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    userName: userName,
                    password: password
                })
            })

            const data = await response.json()
            console.log(data);

            if (data.message === "Registered successfully") {
                console.log("Succesful register");
                navigate("/login")
            }


        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div className="signUp">
                <div className="form-container">
                    <div className="form"  >
                        <img className="signUpLogo" src={logo} alt="" />
                        <p className="loginPara">
                            Sign up to see photos and videos <br /> from your friends
                        </p>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" name="name" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value

                                )}

                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <p
                            className="loginPara"
                            style={{ fontSize: "12px", margin: "3px 0px" }}
                        >
                            By signing up, you agree to out Terms, <br /> privacy policy and
                            cookies policy.
                        </p>
                        <input type="submit" id="submit-btn" onClick={handleSubmit} value="Sign Up" />
                    </div>
                    <div className="form2">
                        Already have an account ?
                        <Link to="/login">
                            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
