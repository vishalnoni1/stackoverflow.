import React, { useEffect } from "react";
import { Link , navigate, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import "../navbar/navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
import decode from 'jwt-decode'


const Navbar = () => { 
  const navigate=useNavigate()
    var User = useSelector((state)=> (state.currentUserReducer))
 const handleLogout = ()=>{
  dispatch({type:'LOGOUT' })
  navigate('/')
  dispatch(setCurrentUser(null))
 }
 const dispatch = useDispatch()
 
 
 useEffect(()=>{
  const token = User?.token 
  if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
          handleLogout()
      }
  }
dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
 },[dispatch])
    return (
      <nav className="main-nav">
        <div className="navbar">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="search" />
            <img
              src={search}
              alt="search"
              width="18"
              className="search-icon"
            />
          </form>
          {User === null ? (
            <Link to="./Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor={"#009dff"}
                borderRadius={"50%"}
                color={"white"}
                px="10px"
                py={"5px"}
              >
                <Link
                  to={`/Users/${User.result._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >{User.result.name.charAt(0).toUpperCase()}
                  
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>log out</button>
            </>
          )}
        </div>
      </nav>
    );
};

export default Navbar;
