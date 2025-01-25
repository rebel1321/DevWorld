import React from 'react';
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white">
            {/* Main section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-indigo-600 text-left">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            We specialize in web and app development, crafting cutting-edge solutions tailored to your needs. Our passion lies in creating intuitive, scalable, and innovative applications that make an impact.
                        </p>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            Join us on our mission to transform the digital landscape. Whether it's a robust web platform or a sleek mobile app, we have the expertise to bring your vision to life.
                        </p>

                        {/* Link to a detailed about page or contact page */}
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 mt-4"
                            to="/services"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>

                {/* Image on the side */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-6 h-full">
                    <img 
                        className="w-96 absolute left-0 top-1/3 transform -translate-y-1/2" 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" 
                        alt="Tech Development"
                    />
                </div>

            </aside>
        </div>
    );
}
