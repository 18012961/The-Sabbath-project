import React from "react";
import './Album.css'
import Sabbath from '../assets/Sabbath v6 (1).jpg'
import Wretched from '../assets/Wretched (1).jpg'
import Goddess from '../assets/goodess.jpg'
import sanctum from '../assets/sanctum.jpeg'

const Album = () => {
    const releases = [
      { imgSrc: Sabbath, alt: "Sabbath" },
      { imgSrc: Wretched, alt: "Wretched" },
      { imgSrc: Goddess, alt: "Goddess" },
      { imgSrc: sanctum, alt: "Sanctum" },
    ];
  
    return (
      <div className="music-container">
        <h1 className="music-title">Music</h1>
        <div className="album-grid">
          {releases.map((release, index) => (
            <div key={index} className="album-card">
              <img
                src={release.imgSrc} // Use the imported image paths here
                alt={release.alt}
                className="album-image"
              />
              <p className="album-text">Buy / Listen</p>
            </div>
          ))}
        </div>
        <button className="more-releases-button">More Releases</button>
      </div>
    );
  };
  
  export default Album;