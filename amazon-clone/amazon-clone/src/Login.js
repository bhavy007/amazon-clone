import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase.js'
import "./Login.css"


function Login() {
    const signIn = e => {
        e.preventDefault()

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/")
        })

        .catch(error => alert(error.message));


        //fancy firebase sign In
    }

    const register = e =>{
        e.preventDefault();

        auth 
            .createUserWithEmailAndPassword(email,password)
        .then((auth)=> {

        //it succesfully creates a new account

            if (auth){
                history.push("/");
            }
        })

        .catch(error => alert(error.message));

        


        //fancy firebase sign up
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");

    return (
        <div className="login">
        <Link to = "/">
            <img 
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
            />
            </Link>

            <div className="login_container" >
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    onChange={event => setEmail(event.target.value)} 
                    value={email} 
                    type="text" />

                    <h5>Password</h5>
                    <input
                    onChange={event => setPassword(event.target.value)}
                    value={password} 
                    type="password" />

                    <button
                    type="submit"
                    onClick={signIn} 
                    className="login_signInButton" >Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice.</p>

                <button
                onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
