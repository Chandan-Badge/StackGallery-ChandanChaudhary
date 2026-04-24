import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { StackContext } from "../context/StackContext";
import logo from "../assets/c2-logo.png";
import blackLogo from "../assets/c2-logo-black.png";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

function Contact() {
  const { theme } = useContext(StackContext);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "chandanchaudharybst@gmail.com"
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: "Message sent successfully! I'll get back to you soon."
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again or contact directly via email."
      });
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-amber-50/30 to-orange-50/50 dark:from-[#080808] dark:via-[#0a0a0a] dark:to-[#0c0c0c] transition-colors duration-500 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/30 dark:from-amber-500/10 dark:to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-yellow-200/30 to-amber-200/30 dark:from-yellow-500/10 dark:to-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/20 to-blue-200/20 dark:from-green-500/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 w-full px-4 sm:px-6 md:px-14 py-4 flex items-center justify-between">
          <Link to="/" onClick={scrollUp}>
            <img
              className="h-16 sm:h-20 w-16 sm:w-20 cursor-pointer hover:scale-105 transition-transform duration-300"
              src={theme === "dark" ? logo : blackLogo}
              alt="Logo"
            />
          </Link>
          <Link
            to="/"
            onClick={scrollUp}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 dark:hover:from-yellow-400 dark:hover:to-amber-500 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-black transition-all duration-300 text-sm font-medium"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </header>

        {/* Main Content */}
        <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-400">Touch</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email Card */}
              <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-white shadow-lg shadow-amber-500/25">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h3>
                    <a
                      href="mailto:chandanchaudharybst@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-yellow-400 transition-colors text-sm break-all"
                    >
                      chandanchaudhary533@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-white shadow-lg shadow-amber-500/25">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Phone</h3>
                    <a
                      href="tel:+91-6394543387"
                      className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-yellow-400 transition-colors text-sm"
                    >
                      +91 6394543387
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/25">
                    <svg class="svg-inline--fa fa-whatsapp fa-w-14 w-6 h-6 transition-all duration-300" fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/6394543387?text=Hi, I'm coming from your Portfolio..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-yellow-400 transition-colors text-sm"
                    >
                      Send a message
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/chandan--chaudhary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700/80 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/iamchandanchaudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700/80 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/_.chandan_chaudhary/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700/80 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.youtube.com/@c2explains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700/80 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-black/20"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2 mb-5">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status.success && (
                  <div className="mb-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm">
                    {status.message}
                  </div>
                )}
                {status.error && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-white dark:text-gray-900 font-semibold hover:shadow-lg transform transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group transition-all"
                >
                  {status.loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover:rotate-45 transition-all duration-200 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
