import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">EdTech</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/signin" className="mx-2">Sign In</Link>
        <Link to="/signup" className="mx-2">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
