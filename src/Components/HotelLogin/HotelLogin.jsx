import React from 'react';
import './HotelLogin.css'; 


const HotelLogin = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">Hotel Management</div>
        <h1 className="title">Welcome to <span className="highlight">..............</span></h1>
        <p className="subtitle">Please log in to manage your bookings and services</p>
        <form className="login-form">
          <label className="form-label">Hotel ID</label>
          <input type="text" className="form-input" placeholder="Enter your Hotel ID" required />

          <label className="form-label">Password</label>
          <input type="password" className="form-input" placeholder="Enter your password" required />

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          New to the portal?>Register your hotel here
        </p>
      </div>
      <div className="right-panel">
        <img
          src="https://www.kayak.co.in/news/wp-content/uploads/sites/76/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
          alt="Hotel Illustration"
          className="image"
        />
      </div>
    </div>
  );
};

export default HotelLogin;
