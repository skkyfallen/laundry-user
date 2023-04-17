import React from "react";
import { useState } from "react";
import form_ig from "../../Assets/form_ig.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../authSlice";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import "./userlogin.css";
const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [loading,setLoading] =useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true)
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/auth/customer/login",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log(response.data);
        const access_token = response.data.data.token;
        localStorage.setItem("access_token", access_token);
        console.log(access_token);
        dispatch(login());
        navigate("/home");
        
      })
      .catch((error) => {
        console.error(error.response);
        alert("Email ALready Exists")
      });
  };
  return (
    <>
      <div className="main-container">
        <form>
          <h1>Welcome Back</h1>
          <p>
            Become a part of the newest and best laundry
            <br />
            marketplace in the world!
          </p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="signup-field"
            placeholder="@ Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="forgot-label-2">
            <a href="forgot-password">Forgot password??</a>
          </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="
          signup-field"
            placeholder="Password(min 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="terms">Remember Me</label>
          <input type="checkbox" name="terms" />
          <button className="Signup-btn" onClick={handleClick}>
            { loading? <BeatLoader color="white" size={10} /> : "Login"}
          </button>
          <p className="already-account">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
        <img src={form_ig} alt="form_ig" className="form_ig" />
      </div>
    </>
  );
};

export default UserLogin;
