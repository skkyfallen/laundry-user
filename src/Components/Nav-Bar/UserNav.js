import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./userNav.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../authSlice";
const UserNav = () => {
  const accessToken = localStorage.getItem("access_token");
  const dispatch = useDispatch();
  const persistLogin=()=>{
    const token = localStorage.getItem('token'); 
     if (token) {
    dispatch(login(token));
  }
  }
  
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const [data, setData] = useState("");
  
  useEffect(() => {
    persistLogin();
  },[dispatch]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <header className="header">
       
        <div className="user-details">
          {isAuthenticated ? (
            <>
              <span className="display-picture"></span>
              <p className="userName">
                {/* Ekwonu Kene */}
                {/*  {setData.merchant.businessName} */}{" "}
              </p>
              <p className="userEmail">ekwonukene@gmail.com</p>
            </>
          ) : (
            <div>
              <p>
                <a href="/login">Login/SignUp</a>
              </p>
              <button className="for-business">For Businesses</button>
            </div>
          )}
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">All Categories</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">House</a>
          </li>
          <li>
            <a href="#">Cars</a>
          </li>
          <li>
            <a href="#">Items</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserNav;
