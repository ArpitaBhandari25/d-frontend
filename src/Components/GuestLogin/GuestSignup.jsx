import React from 'react';
import './GuestLogin.css'; // Reuse the same CSS file


const GuestSignup = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">Hotel Management</div>
        <h1 className="title">Join the <span className="highlight">Hotel Premium Portal</span></h1>
        <p className="subtitle">Create an account to get started</p>
        <form className="signup-form">
          <label className="form-label">Guest Name</label>
          <input type="text" className="form-input" placeholder="First name    Last name" required />
          
          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="Enter your email" required />

          <label className="form-label">Password</label>
          <input type="password" className="form-input" placeholder="Create a password" required />

          <label className="form-label">Phone number</label>
          <input type="password" className="form-input" placeholder="Phone no"required />

          <label className="form-label">Address</label>
          <input type="password" className="form-input" placeholder="Enter your address"required />

          <button type="submit" className="signup-button">Create Account</button>
        </form>
        
        <p className="signup-text">
          Already have an account? Login here
        </p>
      </div>
      <div className="right-panel">
        <img
          src="https://www.cvent.com/sites/default/files/image/2020-09/Businesswoman%20with%20suitcase%20in%20hotel%20lobby.jpg"
          alt="Signup Illustration"
          className="image"
        />
      </div>
    </div>
  );
};

export default GuestSignup;
