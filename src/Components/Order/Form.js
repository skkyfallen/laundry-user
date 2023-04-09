import React from "react";
import "./form.css";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root")
const Form = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState("");
  const handleCloseCartModal = () => {
    console.log("closed")
    setShowCartModal(false)
    
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
<button onClick={handleCloseCartModal}>close</button>
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
        <Modal isOpen={showCartModal} /* onRequestClose={handleCloseCartModal} */ className="cart-modal">
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
    </>
  );
};

export default Form;
