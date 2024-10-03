import React from 'react';
import './HotelLogin.css'; // Reuse the same CSS file


const HotelSignup = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">Hotel Management</div>
        <h1 className="title">Join the <span className="highlight">Hotel Premium Portal</span></h1>
        <p className="subtitle">Create an account to get started</p>
        <form className="signup-form">
          <label className="form-label">Hotel Name</label>
          <input type="text" className="form-input" placeholder="Enter your hotel name" required />
          
          <label className="form-label">Hotel ID</label>
          <input type="text" className="form-input" placeholder="Enter your hotel ID" required />

          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="Enter your email" required />

          <label className="form-label">Password</label>
          <input type="password" className="form-input" placeholder="Create a password" required />

          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-input" placeholder="Confirm your password" required />

          <button type="submit" className="signup-button">Create Account</button>
        </form>
        
        <p className="signup-text">
          Already have an account? Login here
        </p>
      </div>
      <div className="right-panel">
        <img
          src="https://www.kayak.co.in/news/wp-content/uploads/sites/76/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
          alt="Signup Illustration"
          className="image"
        />
      </div>
    </div>
  );
};

export default HotelSignup;
