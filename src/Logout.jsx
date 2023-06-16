import React from 'react';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    // Logout logic
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
