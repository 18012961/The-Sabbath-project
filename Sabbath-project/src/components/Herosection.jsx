import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from './Button';
import './HeroSection.css';

import gabicover from '../assets/IMG_2211.jpg'

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigate to live

  const handleButtonClick = () => {
    navigate('/live'); // Navigate to the live music page
  };

  return (
    <div className="hero-container"> 
       <img src={gabicover} alt="Hero" className="hero-image" />

      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline' 
          buttonSize='btn--large' 
          onClick={handleButtonClick} 
        >
          BUY / LISTEN
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
