import React from "react";
import "./searchService.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
const SearchServices = () => {
  const accessToken = localStorage.getItem("access_token");
  const [data, setData] = useState([]);
  const [merchantId, setMerchantId] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const submitSearch = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/services/search",
        {
          params: {
            serviceName: search,
          },
        },
        config
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  const createOrderFromSearch = (merchantId) => {
    axios
      .get(
        `https://laundry-marketplace-api-production.up.railway.app/api/v1/customer/merchant/${merchantId}/info`,
        config
      )
      .then((response) => {
        setMerchantId(merchantId);
        console.log("merchantId: ", merchantId);
        navigate(`/createOrder/${merchantId}`);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  return (
    <>
      <header>
        <input
          type="search"
          className="search-field"
          placeholder={AiOutlineSearch}
          value={search}
          onKeyDown={submitSearch}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>
      <h1 className="search-results-header">Search Results</h1>
      <ul className="search-results-container">
        {data.map((data) => (
          <li
            key={data._id}
            onClick={() => createOrderFromSearch(data.merchant[0]._id)}
          >
            <img src={data.photo} alt="result" />
            <p className="search-name">{data.name}</p>
            <p className="search-price">NGN {data.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchServices;
