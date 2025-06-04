// src/components/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import cover4 from "../assets/cover4.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src={cover4} alt="Matthew Halsall" />
        </div>

        {/* Text Content Section */}
        <div className="about-text">
          <h2>About</h2>
          <p>
  <span className="bold">Gabi Motuba</span> is a South African award-winning jazz vocalist, composer and music educator. She studied at a South African University known as Tshwane University of Technology where 
  she majored in jazz studies and graduated with a bachelor's degree. Over the years she has produced several albums under her name which include:{" "}
  <span className="bold">Tefiti – Goddess of Creation</span> (her debut album), <span className="bold">Sanctum Sactorium</span> (a duo album with Swiss pianist Malcom Braff), and <span className="bold">The Wretched</span> (a sonic experimentation focused on *The Wretched of the Earth* by Frantz Fanon).
</p>
          <Link to="/full-bio" className="read-more">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
