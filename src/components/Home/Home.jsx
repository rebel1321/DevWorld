import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-indigo-600 to-blue-500">
    {/* Background Content */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80')",
      }}
    ></div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

    {/* Main Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
      <div className="max-w-3xl space-y-6">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
          Innovating the Future of Technology
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200">
          Specializing in Web Development, App Development, and cutting-edge solutions.
        </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <Link
              to="/login"
              className="px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-8 py-4 text-lg font-semibold text-indigo-600 bg-white hover:bg-gray-100 rounded-full shadow-lg transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

     
    </div>
  );
}
