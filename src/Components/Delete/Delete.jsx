import React from 'react';
import './Delete.css';


const Delete = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Delete New Room</h1>
      <form className="room-form">
        <div className="form-group">
          <label htmlFor="roomId" className="form-label">Room ID:</label>
          <input
            type="text"
            id="roomId"
            placeholder="Enter Room ID"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Delete Room
        </button>
      </form>
    </div>
  );
};

export default Delete;
