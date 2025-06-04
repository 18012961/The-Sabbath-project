import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Button.css";

const Button = () => {
  const type = 'button';
  const children = 'Go to Music';

  return (
    <div className="center-container">
      <Link to="/music" className="btn-mobile">
        <button type={type}>
          {children}
        </button>
      </Link>
    </div>
  );
}

export default Button;