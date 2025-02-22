import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthService from "../Service/auth.service";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      setUser(AuthService.getCurrentUser());
      setIsMenuOpen(false); // Close the menu on user update
    };
  
    window.addEventListener("userLoggedIn", updateUser);
    window.addEventListener("userLoggedOut", updateUser);
  
    return () => {
      window.removeEventListener("userLoggedIn", updateUser);
      window.removeEventListener("userLoggedOut", updateUser);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    AuthService.logout();
    window.dispatchEvent(new Event("userLoggedOut"));
    setUser(null);
    setIsMenuOpen(false); // Ensure the menu closes on logout
    navigate("/login");
  };
  
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://img.freepik.com/premium-photo/blue-icon-with-words-shape-peace-together-it-style-jeremy-lipking_921860-115398.jpg?w=900"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Profile Section */}
          <div className="flex items-center lg:order-2 relative">
  {user ? (
    <div className="relative">
      <button onClick={toggleMenu} className="flex items-center focus:outline-none">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
          {user.firstName ? user.firstName.charAt(0).toUpperCase() : "S"}
          
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
          <div className="px-4 py-2 text-gray-800 border-b font-semibold">
            {user.firstName}
          </div>
          <button
  onClick={handleLogout}
  className="block w-full text-left px-4 py-2 text-indigo-600 hover:bg-indigo-100 font-medium rounded-md transition duration-200"
>
  Logout
</button>

        </div>
      )}
    </div>
  ) : (
    <Link
      to="/login"
      className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
    >
      Get started
    </Link>
  )}
</div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 17 14"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-indigo-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-600 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-indigo-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-600 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-indigo-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-600 lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-indigo-600" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-600 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
