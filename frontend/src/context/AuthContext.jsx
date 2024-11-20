import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Login function: Called after successful login
  const login = (token) => {
    localStorage.setItem('token', token); // Save token for persistence
    setIsAuthenticated(true); // Update auth state to true
    const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
    setUser(decodedToken); // Save user details
  };

  // Logout function: Called when user logs out
  const logout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsAuthenticated(false); // Update auth state to false
    setUser(null); // Clear user details
  };

  // Check authentication on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        if (decodedToken.exp * 1000 > Date.now()) {
          setIsAuthenticated(true); // Token is valid
          setUser(decodedToken);
        } else {
          logout(); // Token expired
        }
      } catch {
        logout(); // Invalid token
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
