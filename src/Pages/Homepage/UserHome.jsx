import React from "react";
import "./userHome.css";
import UserNav from "../../Components/Nav-Bar/UserNav.js";
import SideBar from "../../Components/Side Bar/SideBar";
import Laundry_img from "../../Assets/Laundry_img.png";
import SearchServices from "../../Components/Search Services/SearchServices";
import PopularServices from "../../Components/Popular Services/PopularServices";
const UserHome = () => {
  return (
    <>
      {/* Top Nav bar */}
      <UserNav />
      <div className="image-container">
        <img src={Laundry_img} />
      </div>
      {/* Side Bar */}
      <SideBar />

      {/*Search Section */}
      <SearchServices />

      {/*Main Section */}
      <PopularServices />
    </>
  );
};

export default UserHome;
