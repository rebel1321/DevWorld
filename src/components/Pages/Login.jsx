import { Link, useNavigate } from 'react-router-dom';  // Importing useNavigate for page redirection

export default function Login() {
  const navigate = useNavigate();  // Hook for navigation

  const handleLoginClick = () => {
    // This is where you would handle the logic when the login button is clicked
    // You can add further login validation logic here before redirecting
    navigate('/');  // Replace '/dashboard' with the desired route after successful login
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
                  required
                  autoComplete="email"
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 text-left">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-sm text-right">
              
              <Link
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              to="/forgetPassword"
              >Forget password?</Link>
            </div>

            {/* Sign-In Button */}
            <div>
              <button
                type="button"
                onClick={handleLoginClick}  // Call the handleLoginClick function on button click
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Sign-Up Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Not a User?{' '}
            {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Signup
            </a> */}
            <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
            Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}
