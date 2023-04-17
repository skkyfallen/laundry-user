import React from "react";
import "./popularServices.css";
import { useEffect, useState } from "react";
import axios from "axios";
const PopularServices = () => {
  const accessToken = localStorage.getItem("access_token");
  const [data, setData] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  
  const getServices = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/services/popular",
        config
      )
      .then((response) => {
        setData(response.data.data.slice(0, 5));
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  useEffect(() => {
    getServices();
  }, []);
  {
    return (
      <>
        <h1 className="popular-services-header">Popular Services</h1>
        <ul className="popular-data-container">
          {data.map((data) => (
            <li key={data._id}>
              <img src={data.photo} alt="popular services" />
              <p className="service-name">{data.name}</p>
              <p className="service-price">NGN{data.price}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default PopularServices;
