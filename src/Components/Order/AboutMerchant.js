import React from "react";
import "./aboutMerchant.css";
import { useState } from "react";
const AboutMerchant = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <div className="about-container">

        <h2 className="product-description-header">Product Description</h2>
        <p className="about-merchant-description">
          It is a long established fact that a reader will be <br />
          distracted by the readable content of a page
          <br />
          when looking at its layout. The point of using
          <br /> Lorem Ipsum is that it has a more-or-less
          <br /> normal distribution of letters, as opposed to
          <br /> using 'Content here, content here', making it <br />
          look like readable English. .
        </p>
        <p className="services-header">Services</p>
       
       
      </div>
     
    </>
  );
};

export default AboutMerchant;
