import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Build responsive and modern websites tailored to your needs.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "Create seamless and user-friendly mobile applications.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive and engaging user experiences.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      description: "Improve your website's visibility on search engines.",
      icon: "🔍",
    },
    {
      title: "E-commerce Solutions",
      description: "Develop scalable and secure online stores.",
      icon: "🛒",
    },
    {
      title: "Cloud Hosting",
      description: "Reliable and fast hosting solutions for your projects.",
      icon: "☁️",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-indigo-600 text-center mb-6">
          Our Services
        </h1>
        <p className="text-gray-600 text-center mb-12">
          We offer a variety of services to help you achieve your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <div className="text-4xl mb-4 text-indigo-600">{service.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
