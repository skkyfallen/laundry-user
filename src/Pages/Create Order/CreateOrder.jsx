import React from "react";
import "./createOrder.css";
import Modal from "react-modal";
import UserNav from "../../Components/Nav-Bar/UserNav";
import OrderNav from "../../Components/Nav-Bar/OrderNav";
import Images from "../../Components/Order/Images";
import AboutMerchant from "../../Components/Order/AboutMerchant";
import Form from "../../Components/Order/Form";

const CreateOrder = () => {
 
  return (
    <>
      {/* Top NavBar for Order Page */}
      <OrderNav />

      {/*Images on Order Page*/}
      <Images />

      {/*About Description for Merchants */}
      <AboutMerchant />

      {/* Order Quantity Form */}
      <Form/>

      {/*Cart Modal */}
{/* <div className="cart-Modal">

</div> */}
    </>
  );
};

export default CreateOrder;
