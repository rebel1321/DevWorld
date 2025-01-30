import React from 'react';
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white p-4">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-indigo-600">Your Projects</h1>
                <p className="text-gray-600 mt-2">
                    Manage your ongoing, completed, and upcoming projects all in one place. Stay updated with timelines and track progress effortlessly.
                </p>
            </header>

            {/* Projects Section */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Projects Overview</h2>
                    <Link
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        to="/new-project"
                    >
                        Add New Project
                    </Link>
                </div>

                {/* Project List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="p-4 bg-indigo-50 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-indigo-600">E-commerce Platform</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Building a robust e-commerce site with React and Spring Boot. Expected launch: April 2025.
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500">Status: Ongoing</span>
                            <Link
                                to="/project-details/ecommerce-platform"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="p-4 bg-indigo-50 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-indigo-600">Blog Application</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            A blogging platform with Appwrite for backend. Completed in January 2025.
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500">Status: Completed</span>
                            <Link
                                to="/project-details/blog-application"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="p-4 bg-indigo-50 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-indigo-600">Personal Journal App</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            A secure journal application built with Spring Boot. Upcoming updates planned for Q2 2025.
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500">Status: Ongoing</span>
                            <Link
                                to="/project-details/journal-app"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800">Project Insights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    <div className="p-4 bg-white rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-bold text-indigo-600">12</h3>
                        <p className="text-gray-600">Ongoing Projects</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-bold text-indigo-600">24</h3>
                        <p className="text-gray-600">Completed Projects</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-bold text-indigo-600">5</h3>
                        <p className="text-gray-600">Upcoming Meetings</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
