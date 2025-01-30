import React, { useState } from 'react';

export default function NewProject() {
    const [project, setProject] = useState({
        name: '',
        description: '',
        deadline: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Project Added:', project);
        alert('Project added successfully!');
        setProject({ name: '', description: '', deadline: '' });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">Add New Project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold">
                        Project Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={project.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-gray-700 font-bold">
                        Project Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={project.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-2 border rounded-lg mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="deadline" className="block text-gray-700 font-bold">
                        Deadline
                    </label>
                    <input
                        type="date"
                        name="deadline"
                        id="deadline"
                        value={project.deadline}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg mt-1"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                    Add Project
                </button>
            </form>
        </div>
    );
}
