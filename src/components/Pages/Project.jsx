import React from 'react';
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white p-6">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-indigo-600">Your Projects</h1>
                <p className="text-gray-600 mt-2">
                    Easily manage your projects, track their progress, and gain insights into your development workflow. Stay on top of deadlines and updates.
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
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.JfmZujC-oxQfceBsssqgjwHaEl&pid=Api&P=0&h=180"
                            alt="E-commerce Platform"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-lg font-bold text-indigo-600">E-commerce Platform</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Building a feature-rich e-commerce site with seamless payment integration and a responsive UI. Expected launch: April 2025.
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
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.Np_SkmquoCOlC15x2E58ZQHaD4&pid=Api&P=0&h=180"
                            alt="Blog Application"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-lg font-bold text-indigo-600">Blog Application</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            A blogging platform featuring markdown support and advanced search functionality. Completed in January 2025.
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
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.pgr1Zu9QVP9r669zElZTKAHaFj&pid=Api&P=0&h=180"
                            alt="Personal Journal App"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-lg font-bold text-indigo-600">Personal Journal App</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            A secure and private journal app to keep daily thoughts organized. Upcoming updates planned for Q2 2025.
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
