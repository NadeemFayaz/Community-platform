import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to the Community Platform</h1>
      <div className="buttons">
        <button onClick={() => navigate('/signup')}>New User? Register</button>
        <button onClick={() => navigate('/login')}>Existing User? Login</button>
      </div>
    </div>
  );
};

export default LandingPage;