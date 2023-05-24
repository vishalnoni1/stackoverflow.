import React, { useState } from "react";
import icon from "../../assets/icon.png";
import AuthAbout from "./AuthAbout";
import "./Auth.css";
import {useDispatch} from 'react-redux'
import { useNavigate  } from "react-router-dom";
import{signup,login}from'../../actions/auth'
const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
 const [name, setname] = useState('');
 const [email, setemail] = useState('');
 const [password, setpassword] = useState('');
  
 
 const dispatch =useDispatch()
 const Navigate =useNavigate()
 
 const handleSwitch = () => {
    setisSignup(!isSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
        alert('Enter email and password')
    }
    if(isSignup){
        if(!name){
            alert("Enter a name to continue")
        }
        dispatch(signup({ name, email, password }, Navigate))
    }else{
        dispatch(login({ email, password }, Navigate))
    }
}
  return (
    <section class="auth-section">
      {isSignup && <AuthAbout />}
      <div class="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {setname(e.target.value)}}
                
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {setemail(e.target.value)}}
            
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {setpassword(e.target.value)}}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain at least eight
                <br />
                characters, including at least 1 letter and 1<br /> number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional,
                <br />
                product updates, user research invitations,
                <br />
                company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of
                <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
