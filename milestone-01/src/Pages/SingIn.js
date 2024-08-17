import React, { useState } from 'react'
import logo from "../img/logo.png";
import './Css/SignUp.css';
import { Link ,useNavigate} from 'react-router-dom';


export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log("i am signup page")

    const navigate = useNavigate()


    async function handleSubmit() {
        try {

            const response = await fetch("https://insta-backend-hr3a.onrender.com/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({

                    email: email,

                    password: password
                })
            })

            const data = await response.json()
            console.log(data);

            if (data.token) {
                console.log("Succesful Login")
                localStorage.setItem("token",data.token)
                
                navigate("/")
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
                            Sign In to see photos and videos <br /> from your friends
                        </p>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                        <br />
                        <input type="submit" id="submit-btn" onClick={handleSubmit} value="Sign In" />
                    </div>
                    <div className="form2">
                        Create new account ?
                        <Link to={"/register"}><span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
