import React from "react";
import "./sideBar.css";
const SideBar = () => {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <div className="price">
            <h1>Price, $</h1>
            <div className="price-field-container">
              <input type="text" className="price-fields" placeholder="Min" />
              <input type="text" className="price-fields" placeholder="Max" />
            </div>
          </div>
          <div className="clothes">
            <h1>Clothes</h1>
            <div className="check-container">
              <input type="checkbox" id="suits" className="checkboxes"></input>
              <input type="checkbox" id="linen" className="checkboxes"></input>
              <input type="checkbox" id="cotton" className="checkboxes"></input>
              <input
                type="checkbox"
                id="delicates"
                className="checkboxes"
              ></input>
              <div className="label-container">
                <label htmlFor="suits" className="suits-label">
                  Suits
                </label>
                <label htmlFor="linen" className="linen-label">
                  Linen
                </label>
                <label htmlFor="cotton" className="cotton-label">
                  Cotton
                </label>
                <label htmlFor="delicates" className="delicates-label">
                  Delicates
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
