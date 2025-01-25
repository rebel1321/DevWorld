import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation (you can enhance this)
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    // Simulating password reset process
    setError('');
    setMessage('A password reset link has been sent to your email address.');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">Forgot Password</h2>
        
        {message && <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">{message}</div>}
        {error && <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300"
            >
              Send Password Reset Link
            </button>
          </div>

          <p className="text-center text-sm">
            Remembered your password? 
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800"> Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
