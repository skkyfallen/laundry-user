import React from 'react'
import order_1 from "../../Assets/order_1.png"
import order_2 from "../../Assets/order_2.png"
import order_3 from "../../Assets/order_3.png"
import order_4 from "../../Assets/order_4.png"
import BG from "../../Assets/BG.png"
import "./images.css"
const Images = () => {
  return (
   <>
   <div className="main-image-container">
   <div className="side-images">
    <img src={order_1} alt="order_1" />
    <img src={order_2}/>
    <img src={order_3}/>
    <img src={order_4}/>
   </div>
   <div className="main-image">
<img src={BG} alt="BG" />
   </div>
   </div>
   </>
  )
}

export default Images