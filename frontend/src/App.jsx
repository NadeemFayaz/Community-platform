import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AuthProvider from './context/AuthContext.jsx';
import EventsCarousel from './features/EventsCarousel.jsx';
import SignUp from './pages/SignUp.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventscarousel" element={<EventsCarousel />} />
          
          {/* Protected Routes */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;