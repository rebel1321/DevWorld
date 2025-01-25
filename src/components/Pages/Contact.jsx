import React from "react";

export default function Contact() {
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
            <form>
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  placeholder="Your name"
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  placeholder="Your email"
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Send Message
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
