import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white">
            {/* Main section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-indigo-600">
                            Welcome to Yoyo
                        </h2>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            Get started by logging in and exploring the features we have to offer. It's time to level up your experience.
                        </p>

                        {/* Button to login page */}
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 mt-4"
                            to="/login"
                        >
                            Login to your account
                        </Link>

                        {/* Optionally add a sign-up button if needed */}
                        <p className="mt-2 text-sm text-gray-500">
                            Don’t have an account? 
                            <Link to="/signup" className="text-indigo-600 hover:underline">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Image on the side */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-6 h-full">
    <img className="w-96 absolute left-0 top-1/3 transform -translate-y-1/2" src="https://plus.unsplash.com/premium_photo-1737392497152-9e37fafcb9f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D" alt="image1" />
</div>

            </aside>

        </div>
    );
}
