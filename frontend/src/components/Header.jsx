// src/components/Header.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

const Header = () => {
  const { logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h2>Community Platform</h2>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
