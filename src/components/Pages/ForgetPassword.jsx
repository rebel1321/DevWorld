import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setError('');
    setMessage('');

    // Validate email
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const emailExists = true; // Simulating email existence check

      if (emailExists) {
        setMessage('A password reset link has been sent to your email address.');
      } else {
        setError('This email is not registered with us.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-lg px-8 py-16 bg-white rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-indigo-600 text-center mb-6">Forgot Password</h2>

        {/* Success Message */}
        {message && (
          <div
            className="bg-green-100 text-green-800 p-4 rounded-md mb-4 transition-all duration-300"
            role="alert"
          >
            {message}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            className="bg-red-100 text-red-800 p-4 rounded-md mb-4 transition-all duration-300"
            role="alert"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            />
          </div>

          {/* Submit Button */}
          <div className="mb-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Password Reset Link'}
            </button>
          </div>

          {/* Link to Login */}
          <p className="text-center text-sm">
            Remembered your password?{' '}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
