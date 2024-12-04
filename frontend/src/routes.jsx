import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Forum from './pages/Forum';
import Profile from './pages/Profile';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default AppRoutes;
