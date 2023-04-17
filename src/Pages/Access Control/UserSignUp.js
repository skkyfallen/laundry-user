import React from "react";
import axios from "axios";
import { useState } from "react";
import "./userSignup.css";
import form_ig from "../../Assets/form_ig.png";
import { useNavigate } from "react-router-dom";
const UserSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/auth/customer/signup",
        {
          fullname: fullName,
          email: email,
          password: password,
          phoneNumber: phone,
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Email Already Exists")
      });
  };
  return (
    <>
      <div className="main-container">
        <form>
          <h1>Join Laundry</h1>
          <p>
            Become a part of the newest and best laundry
            <br />
            marketplace in the world!
          </p>

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="signup-field"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="signup-field"
            placeholder="+234"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="
          signup-field"
            placeholder="Retype Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="terms">Terms and Conditions</label>
          <input type="checkbox" name="terms" />
          <button className="Signup-btn" onClick={handleClick}>
            Sign Up{" "}
          </button>
          <p className="already-account">
            Already have an account? <a href="/">Login now</a>
          </p>
        </form>
        <img src={form_ig} alt="form_ig" className="form_ig" />
      </div>
    </>
  );
};

export default UserSignUp;
