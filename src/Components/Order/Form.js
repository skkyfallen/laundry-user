import React from "react";
import "./form.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useParams } from "react-router-dom";
Modal.setAppElement("#root");
const Form = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem("access_token");
  const [quantity, setQuantity] = useState("");
  const { merchantId } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const handleCloseCartModal = () => {
    console.log("closed");
    setShowCartModal(false);
  };
  const getMerchantInfo = () => {
    axios
      .get(
        `https://laundry-marketplace-api-production.up.railway.app/api/v1/customer/merchant/${merchantId}/info`,
        config
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data[0]);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  const addToCart = (cloth, qty) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.cloth === cloth
    );
    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += qty;
      setCartItems(newCartItems);
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { cloth, quantity: qty }]);
    }
    setShowCartModal(true);
  };
  useEffect(() => {
    getMerchantInfo();
  }, []);
  return (
    <>
      <select
        className="select-tag-container"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option>Select an Option</option>
        <option>Suits</option>
        <option>Skirts</option>
        <option>Ankara</option>
      </select>
      {/* <button onClick={handleCloseCartModal}>close</button> */}
      <h2 className="selected-option-header">Selected Option:</h2>
      <p className="selected-option-container">{selectedOption}</p>

      <div className="quantity-container">
        <h1>Enter quantity of clothes/Items</h1>
        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          className="quantity-input"
          value={quantity}
        />
        <button
          className="quantity-button"
          onClick={() => addToCart(selectedOption, quantity)}
        >
          Add to cart
        </button>
      </div>
      <div className="cart-container">
        <Modal
          isOpen={showCartModal}
          /* onRequestClose={handleCloseCartModal} */ className="cart-modal"
        >
          <h2 className="cart-header">Your Cart</h2>
          <button onClick={handleCloseCartModal}>close</button>
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <p>{item.cloth}</p>
                  <p>Quantity:{item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
      <div className="merchant-header-container">
        <h1 className="merchant-name">{data.businessName}</h1>
      </div>
      <div className="merchant-info-container">
        <h1 className="merchant-state">State: {data.state}</h1>
        <h1 className="merchant-address">Address: {data.storeAddress}</h1>
        <h1 className="merchant-phone">Phone: {data.phoneNumber}</h1>
        <h1 className="merchant-email">Email: {data.email}</h1>
      </div>
    </>
  );
};

export default Form;
