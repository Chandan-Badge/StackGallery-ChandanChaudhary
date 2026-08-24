import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import HeroDesign from "../components/hero/HeroDesign";
import SEO from "../components/SEO";
import "./Contact.css";
import { assets } from "../assets/assets";

const EMAIL = "chandanchaudhary533@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/916394543387?text=Hi%20Chandan%2C%20I'm%20coming%20from%20your%20portfolio...";

const MESSAGE_LIMIT = 1000;

const SUBJECT_PRESETS = [
  "Freelance project",
  "Full stack development",
  "UI/UX design",
  "Collaboration",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (sent) setSent(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const pickSubject = (subject) => {
    if (sent) setSent(false);
    setFormData((prev) => ({ ...prev, subject }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending your message...");

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

      toast.success("Message sent successfully! I'll get back to you soon.", {
        id: toastId
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Failed to send message. Please try again or contact directly via email.",
        { id: toastId }
      );
    } finally {
      setLoading(false);
    }
  };

  const channels = [
    {
      label: "Address",
      value: "Lucknow, U.P., India",
      iconWrap:
        "bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-sky-400 dark:to-blue-500 shadow-blue-500/25",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-5" fill="currentColor">
          <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
      )
    },
    {
      label: "WhatsApp",
      value: "Start a chat",
      href: WHATSAPP_LINK,
      external: true,
      iconWrap:
        "bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/25",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      )
    },
    {
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      iconWrap:
        "bg-gradient-to-br from-amber-400 to-orange-500 dark:from-yellow-400 dark:to-amber-500 shadow-amber-500/25",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
  ];

  const faqs = [
    {
      q: "What kind of projects do you take on?",
      a: "Mostly full stack web applications built with the Full stack — dashboards, portfolios, business websites and custom platforms. I also take on standalone frontend and UI/UX work."
    },
    {
      q: "How quickly will I hear back?",
      a: "Within 24 hours on weekdays, usually much sooner. If it's urgent, WhatsApp is the fastest way to reach me."
    },
    {
      q: "Do you work with clients outside India?",
      a: "Yes. I work remotely with clients worldwide and can shift my hours to overlap with your timezone for calls and updates."
    },
    {
      q: "How does a project usually start?",
      a: "We start with a short call to pin down the scope, then I share a timeline and a fixed quote. Once that's approved I begin work and share progress at regular checkpoints."
    }
  ];

  const inputWrap =
    "group flex items-center gap-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.04] px-3.5 transition-all duration-300 focus-within:border-amber-400 dark:focus-within:border-yellow-400/60 focus-within:ring-4 focus-within:ring-amber-400/15 dark:focus-within:ring-yellow-400/10 focus-within:bg-white dark:focus-within:bg-white/[0.06]";
  const inputBase =
    "w-full bg-transparent py-3.5 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none";
  const inputIcon =
    "w-4 h-4 shrink-0 text-gray-400 dark:text-gray-600 transition-colors duration-300 group-focus-within:text-amber-500 dark:group-focus-within:text-yellow-400";
  const labelBase =
    "block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400 mb-2";

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Chandan Chaudhary - Software Developer & Freelancer from India. Have a project in mind? Reach out for freelance web development, React applications, UI/UX design and full stack solutions."
        keywords="Contact Chandan Chaudhary, Hire Full Stack Developer, Hire Freelance Web Developer India, Hire React Developer"
        path="/contact"
      />

      <section className="min-h-screen w-full bg-gradient-to-br from-white via-amber-50/30 to-orange-50/50 dark:from-[#080808] dark:via-[#0a0a0a] dark:to-[#0c0c0c] transition-colors duration-500 relative overflow-hidden pb-16">
        <Navbar />
        <HeroDesign />
        <div className="contact-grid" />

        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36">
          {/* ===== Page header ===== */}
          <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h1 className="reveal reveal-2 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Let&apos;s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 dark:from-yellow-400 dark:via-amber-400 dark:to-yellow-400">
                worth shipping
              </span>
            </h1>

            <p className="reveal reveal-3 mt-5 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Tell me about your idea, your timeline and what success looks like.
              I&apos;ll come back with a clear plan, an honest estimate and the next
              step — no pressure, no jargon.
            </p>
          </header>

          {/* ===== Contact grid ===== */}
          <div className="rounded-xl p-[1px] bg-gradient-to-b from-amber-200/80 via-gray-200/40 to-transparent dark:from-yellow-400/25 dark:via-white/10 dark:to-transparent shadow-xl shadow-gray-200/50 dark:shadow-black/40">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-12 items-center justify-between rounded-xl bg-white/85 dark:bg-[#0b0b0b]/85 backdrop-blur-2xl py-6 sm:py-12 px-4 md:px-12">
              <img src={assets.coder} className="w-[80%] md:w-[40%]" />

              <form
                onSubmit={handleSubmit}
                className=""
              >
                {sent && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                    <svg className="w-5 h-5 shrink-0 text-green-600 dark:text-green-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <span className="font-semibold">Message delivered.</span>{" "}
                      Thanks for reaching out — I&apos;ll reply within 24 hours.
                    </p>
                  </div>
                )}

                {/* Subject presets */}
                <div className="mb-6">
                  <span className={labelBase}>What&apos;s this about?</span>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECT_PRESETS.map((preset) => {
                      const active = formData.subject === preset;
                      return (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => pickSubject(preset)}
                          aria-pressed={active}
                          className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${active
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-white dark:text-gray-900 border-transparent shadow-md shadow-amber-500/25"
                            : "bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-amber-300 dark:hover:border-yellow-400/40 hover:text-amber-600 dark:hover:text-yellow-400"
                            }`}
                        >
                          {preset}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelBase}>
                      Your name
                    </label>
                    <div className={inputWrap}>
                      <svg className={inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Your email
                    </label>
                    <div className={inputWrap}>
                      <svg className={inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="name@example.com"
                        className={inputBase}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label htmlFor="subject" className={labelBase}>
                    Subject
                  </label>
                  <div className={inputWrap}>
                    <svg className={inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Pick a tag above or write your own"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="message" className={labelBase}>
                      Message
                    </label>
                    <span
                      className={`text-[11px] tabular-nums mb-2 ${formData.message.length > MESSAGE_LIMIT - 100
                        ? "text-amber-600 dark:text-yellow-400"
                        : "text-gray-400 dark:text-gray-600"
                        }`}
                    >
                      {formData.message.length}/{MESSAGE_LIMIT}
                    </span>
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.04] px-3.5 transition-all duration-300 focus-within:border-amber-400 dark:focus-within:border-yellow-400/60 focus-within:ring-4 focus-within:ring-amber-400/15 dark:focus-within:ring-yellow-400/10 focus-within:bg-white dark:focus-within:bg-white/[0.06]">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      maxLength={MESSAGE_LIMIT}
                      placeholder="What are you building, who is it for, and when do you need it live? A couple of sentences is plenty to start."
                      className={`${inputBase} resize-none leading-relaxed`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shine relative w-full overflow-hidden py-4 px-6 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 dark:from-yellow-400 dark:via-amber-400 dark:to-yellow-400 text-white dark:text-gray-900 font-semibold shadow-sm shadow-amber-500/25 dark:shadow-yellow-400/20 hover:shadow-md hover:shadow-amber-500/35 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg
                        className="w-[18px] h-[18px] rotate-[24deg] group-hover:rotate-45 transition-transform duration-300"
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

                <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-400 dark:text-gray-600 text-center">
                  <svg className="w-3.5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Your details stay private and are only used to reply to you.
                </p>
              </form>
            </div>
          </div>

          <aside className="mt-10 reveal reveal-4 grid grid-cols-3 items-center w-full rounded-xl px-5 py-5 sm:px-8 sm:py-7 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/70 dark:border-white/10 hover:shadow-md hover:shadow-amber-500/10 dark:hover:shadow-yellow-400/5 hover:border-amber-300/70 dark:hover:border-yellow-400/30 transition-all duration-300">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group col-span-1 flex items-center gap-4 px-3 py-3 sm:px-5 md:py-2 w-full"
              >
                <span
                  className="shrink-0 grid h-12 w-12 place-items-center rounded-xl border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-200 shadow-none transition-colors duration-300 group-hover:bg-white/20"
                >
                  {channel.icon}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="hidden md:block text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-500">
                    {channel.label}
                  </span>
                  <span className="hidden md:block truncate text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-[15px] transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}

          </aside>

          {/* ===== FAQ ===== */}
          {/* <section className="mt-20 sm:mt-24 reveal reveal-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Before you{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-400">
                  write
                </span>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                A few things people usually ask first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="faq-item group rounded-2xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/70 dark:border-white/10 hover:border-amber-300/70 dark:hover:border-yellow-400/25 transition-colors duration-300 shadow-sm"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                    <span className="text-sm sm:text-[15px] font-semibold text-gray-800 dark:text-gray-100">
                      {faq.q}
                    </span>
                    <svg
                      className="faq-chevron w-4 h-4 shrink-0 text-amber-500 dark:text-yellow-400 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section> */}
        </main>
      </section>
    </>
  );
}

export default Contact;
