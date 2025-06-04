import React from "react";
import "./Merch.css"; 
import sabbath from '../assets/Sabbath v6.jpg'
import { SiAbbott } from "react-icons/si";

const Merch = () => {
  return (
    <div className="merchandise-container">
      <h1 className="title">Bathini Design</h1>
      <div className="merchandise-grid">
      <div className="merch-item">
        <img
                  src={sabbath}
                  alt="Gabi about"
                />
          <h2>An Ever Changing View</h2>
          <p>T-SHIRT</p>
          <p className="sold-out"> BUY NOW</p>
        </div>
        <div className="merch-item">
        <img
                 src={sabbath}
                  alt="Gabi about"
                />
          <h2>An Ever Changing View</h2>
          <p>T-SHIRT</p>
          <p className="sold-out">SOLD OUT</p>
        </div>

        <div className="merch-item">
        <img
                  src={sabbath}
                  alt="Gabi about"
                />
          <h2>An Ever Changing View</h2>
          <p>T-SHIRT</p>
          <p className="sold-out">SOLD OUT</p>
        </div>
      </div>
    </div>
  );
};

export default Merch;
