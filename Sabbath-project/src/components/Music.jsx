import React from 'react'
import apple from '../assets/Apple_Music_(10).png'
import bandcamp from '../assets/BandCamp-Logo.png'
import sportify from '../assets/Spotify-Logo.wine.svg'
import amazon from '../assets/amazon-music-full-logo-tech-companies.png'
import youtube from '../assets/youtube-logo-2020.svg'
import dreezer from '../assets/deezer-2023-seeklogo.svg'
import tidal from '../assets/Tidal.svg'
import Gabi from '../assets/Sabbath v6 (1).jpg'
import './Music.css'
const Music = () => {
  return (
    <section id="music" className="section">
      <div className="container">
        <h1>Gabi Motuba</h1>
        <p>The Sabath</p>
        <p>Album out now</p>
  </div> 
        <div className="image-container">
        <img src={Gabi} alt="Gabi" className="profile-img" />
        </div>

        <div className="links">
         <div className="link-item">
  <img src={bandcamp} alt="Bandcamp" />
  <button className="buy">Buy</button>
</div>
  
          <div className="link-item">
            <img src={sportify} alt="Spotify" />
            <button className="buy">Play</button>
          </div>
  
          <div className="link-item">
            <img src={apple}  alt="Apple Music" />
            <button className="buy">Play</button>
          </div>
  
          <div className="link-item">
            <img src={amazon} alt="Amazon Music" />
            <button className="buy">Play</button>
          </div>
  
          <div className="link-item">
            <img src={youtube} alt="YouTube" />
            <button className="buy">Watch</button>
          </div>
  
          <div className="link-item">
          <img src={dreezer} alt="dreezer" />
            <button className="buy">Play</button>
          </div>
  
          <div className="link-item">
          <img src={tidal} alt="dreezer" />
            <button className="buy">Play</button>
          </div>
        </div>
      
      </section>
    );
  };

export default Music