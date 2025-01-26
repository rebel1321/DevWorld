import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Import Google Login

export default function Signup() {
  const navigate = useNavigate();

  // State variables for input fields and error handling
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }
    if (!formData.password) newErrors.password = 'Password is required.';
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSignupClick = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Show validation errors
      return;
    }

    // Perform sign-up logic here (e.g., API call)
    console.log('Form submitted:', formData);
    navigate('/'); // Redirect after successful sign-up
  };

  // Handle Google Sign-up success
  const handleGoogleSignupSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    // Add your logic to handle Google OAuth response (e.g., send to server)
    navigate('/'); // Redirect after successful sign-up
  };

  // Handle Google Sign-up failure
  const handleGoogleSignupFailure = () => {
    console.error('Google Login Failed');
    // Handle error if needed
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-3xl font-bold text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-900 text-left">
                Enter full name
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Enter your full name"
                />
                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 text-left">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 text-left">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 text-gray-500 focus:outline-none"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 text-left">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Sign-up Button */}
            <div>
              <button
                type="button"
                onClick={handleSignupClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          {/* Google OAuth Login */}
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSignupSuccess}
              onError={handleGoogleSignupFailure}
            />
          </div>

          {/* Sign-in Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already a User?{' '}
            <Link className="font-semibold text-indigo-600 hover:text-indigo-500" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
