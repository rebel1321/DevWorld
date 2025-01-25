import React from 'react';
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white">
            {/* Main section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-indigo-600">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            At Yoyo, we are driven by a passion for innovation and creating intuitive experiences for our users. Our team of React developers work hard to bring the best solutions to life.
                        </p>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            Explore our journey, the services we offer, and how we can help you build your next big idea. Join us in shaping the future of technology.
                        </p>

                        {/* Link to a detailed about page or contact page */}
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 mt-4"
                            to="/about"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>

                {/* Image on the side */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-6 h-full">
                    <img 
                        className="w-96 absolute left-0 top-1/3 transform -translate-y-1/2" 
                        src="https://plus.unsplash.com/premium_photo-1737246741297-255fa76a2894?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="image"
                    />
                </div>

            </aside>
        </div>
    );
}
