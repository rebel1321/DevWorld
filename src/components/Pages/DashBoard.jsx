import React from 'react';
import { Link } from 'react-router-dom';

export default function DashBoard() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white">
            {/* Main section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-indigo-600 text-left">
                            Welcome to DevWorld
                        </h2>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            Dive into your projects, analyze metrics, and optimize your workflow. Your digital transformation journey starts here!
                        </p>

                        {/* Metrics Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                            <div className="p-4 bg-indigo-50 rounded-lg shadow-md text-center">
                                <h3 className="text-2xl font-bold text-indigo-600">12</h3>
                                <p className="text-gray-600">Ongoing Projects</p>
                            </div>
                            <div className="p-4 bg-indigo-50 rounded-lg shadow-md text-center">
                                <h3 className="text-2xl font-bold text-indigo-600">24</h3>
                                <p className="text-gray-600">Completed Projects</p>
                            </div>
                            <div className="p-4 bg-indigo-50 rounded-lg shadow-md text-center">
                                <h3 className="text-2xl font-bold text-indigo-600">5</h3>
                                <p className="text-gray-600">Upcoming Meetings</p>
                            </div>
                        </div>

                        {/* Link to manage or explore more */}
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 mt-4"
                            to="/projects"
                        >
                            Manage Your Projects
                        </Link>
                    </div>
                </div>

                {/* Image on the side */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-6 h-full">
                    <img
                        className="w-96 absolute left-0 top-1/3 transform -translate-y-1/2"
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRlY2glMjB3b3JsZHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Dashboard Insights"
                    />
                </div>
            </aside>
        </div>
    );
}
