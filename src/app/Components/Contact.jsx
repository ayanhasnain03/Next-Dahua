"use client";
import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Map from "../Components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const saveOnDB = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const templateParams = { ...formData };
      const res = await emailjs.send(
        "service_8izrkjw",
        "template_eyrx36i",
        templateParams,
        "Y6Jv1znQYHp7ubu6W"
      );

      if (res.status === 200) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us | Your Company Name</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or support. We're here to help and answer any questions you might have."
        />
        <meta
          name="keywords"
          content="contact, support, inquiries, Your Company Name"
        />

      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-10 mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <section
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              aria-labelledby="contact-form"
            >
              <h2
                id="contact-form"
                className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4"
              >
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {["name", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-200 ease-in-out hover:border-purple-400 px-4 py-2"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-200 ease-in-out hover:border-purple-400 px-4 py-2"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-4 px-6 border border-transparent rounded-lg text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 text-center text-sm font-medium px-4 py-3 rounded-lg ${
                    status.includes("Failed") ? "text-red-800 bg-red-100" : "text-green-800 bg-green-100"
                  }`}
                >
                  {status}
                </motion.p>
              )}
            </section>

            <section
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              aria-labelledby="contact-info"
            >
              <h2 id="contact-info" className="sr-only">
                Contact Information
              </h2>
              <Suspense
                fallback={<div className="h-[300px] bg-gray-200 animate-pulse rounded-t-2xl" />}
              >
                <Map />
              </Suspense>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800">123 Main Street, Your City, Your Country</p>
                  <p className="text-lg text-gray-800">Phone: (123) 456-7890</p>
                  <p className="text-lg text-gray-800">Email: contact@yourcompany.com</p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Contact;
