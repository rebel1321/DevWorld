import { Link, useNavigate } from 'react-router-dom';  // Importing useNavigate for page redirection

export default function Signup() {
  const navigate = useNavigate();  // Hook for navigation

  const handleLoginClick = () => {
    // This is where you would handle the logic when the login button is clicked
    // You can add further login validation logic here before redirecting
    navigate('/login');  // Replace '/dashboard' with the desired route after successful login
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
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 text-left">
                Enter full name
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="Full Name"
                  type="text"
                  required
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Enter your full name"
                />
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
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 text-left">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-black-900"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

           

            {/* Sign-up Button */}
            <div>
              <button
                type="button"
                onClick={handleLoginClick}  // Call the handleLoginClick function on button click
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          {/* Sign-in Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already a User?{' '}
            
            <Link
            className="font-semibold text-indigo-600 hover:text-indigo-500"
            to="/login"
            >
            Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
