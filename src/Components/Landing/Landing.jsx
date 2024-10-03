import React from 'react';
import './Landing.css'; 


export const Landing = () => {
  return (
    <div className="container">
      <div className="overlay">
        <div className="text-wrapper">
          <h1 className="header-top">Welcome to</h1>
          <h1 className="main-header">Hotel Management Portal</h1>
          <p className="description">Choose your login option below:</p>
          <div className="button-group">
         
              <button className="cta-button">Login as Guest</button>
            
              <button className="cta-button hotel-button">Login as Hotel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
