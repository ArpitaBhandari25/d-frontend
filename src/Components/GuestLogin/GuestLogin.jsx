import React from 'react';
import './GuestLogin.css'; 


const HotelLogin = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">Hotel Management</div>
        <h1 className="title">Welcome to <span className="highlight">..............</span></h1>
        <p className="subtitle">Please log in to manage your bookings and services</p>
        <form className="login-form">
          <label className="form-label">Username</label>
          <input type="text" className="form-input" placeholder="Enter your email" required />

          <label className="form-label">Password</label>
          <input type="password" className="form-input" placeholder="Enter your password" required />

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          New to the portal? Register here 
        </p>
      </div>
      <div className="right-panel">
        <img
          src="https://www.cvent.com/sites/default/files/image/2020-09/Businesswoman%20with%20suitcase%20in%20hotel%20lobby.jpg"
          alt="Guest Illustration"
          className="image"
        />
      </div>
    </div>
  );
};

export default HotelLogin;
