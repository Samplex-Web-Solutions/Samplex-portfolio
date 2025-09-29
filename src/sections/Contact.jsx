import { useState } from "react";
import emailjs from "emailjs-com";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_iirg5ef", // my service id
        "template_iuasd2u", // my contact template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "B8QoP2TaMm3nitebN" // my public key
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });

          // Clear message after 3 seconds
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("error");

          // Clear error after 3 seconds
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-400 mb-8 text-center">
          Let's connect! Whether it's a project, freelance work, or just a
          friendly hello.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          {/* Name */}
          <div className="relative">
            <UserIcon className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full pl-10 p-4 capitalize rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label
              className="absolute left-10 top-1 text-sm text-blue-500 transition-all
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full pl-10 p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label
              className="absolute left-10 top-1 text-sm text-blue-500 transition-all
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <ChatBubbleOvalLeftEllipsisIcon className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              rows="5"
              className="peer w-full pl-10 p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label
              className="absolute left-10 top-1 text-sm text-blue-500 transition-all
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-500 mt-4 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4 text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
