import React from 'react';
import './userProtectedWrapper.css';
const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="stars" />
      <div className="planet" />
      <div className="spaceship" />
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! You're lost in the Shortify 🌌</p>
        <a href="/" className="back-home">Return to Shortify</a>
      </div>
    </div>
  );
};

export default NotFound;
