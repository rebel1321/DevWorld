import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    // Submit form data to the backend
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8081/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add your JWT token here if authentication is needed
          // "Authorization": `Bearer ${yourJwtToken}`
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error("An error occurred. Please try again.");
      }
  
      // Since the backend is sending plain text, not JSON, handle it as text
      const result = await response.text(); // Use .text() instead of .json()
  
      setLoading(false);
      setSuccess(result); // Display the plain text message from the backend
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      setError(error.message || "An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-indigo-600 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-12">
          We'd love to hear from you! Fill out the form below or reach us at our contact details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 bg-white border rounded-lg shadow">
            {error && (
              <div className="mb-4 text-red-700 bg-red-100 p-3 rounded-md">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 text-green-700 bg-green-100 p-3 rounded-md">
                {success}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  placeholder="Your name"
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  placeholder="Your email"
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  placeholder="Your message"
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="p-6 bg-white border rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us through any of the channels below:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-indigo-600 text-2xl mr-4">📍</span>
                <span className="text-gray-700">Birni Post-Ajana, Lar 274508, Deoria, India</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 text-2xl mr-4">📞</span>
                <span className="text-gray-700">+91 8449477578</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 text-2xl mr-4">✉️</span>
                <span className="text-gray-700">spower26182@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
