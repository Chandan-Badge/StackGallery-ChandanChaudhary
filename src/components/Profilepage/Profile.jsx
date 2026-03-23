import "../../style.css";
import Footer from "../Footer";
import HomeDesign from "../homepage/HomeDesign";
import HomeHeader from "../homepage/HomeHeader";

import coder from "../../assets/coder.webp";

function Profile() {
    const skills = [
        { name: "Java", icon: "java", color: "#ed272c" },
        { name: "React.js", icon: "react", color: "#61dafb" },
        { name: "UI/UX", icon: "uiux", color: "#ff5757" },
        { name: "Express.js", icon: "express", color: "#246bc4" },
        { name: "Node.js", icon: "node", color: "#84bf08" },
        { name: "Git & GitHub", icon: "github", color: "#9d4edd" },
        { name: "Database", icon: "database", color: "#1689b0" },
        { name: "Python", icon: "python", color: "#ffcc3b" },
    ];

    const experiences = [
        { title: "Freelance Developer", company: "Self-Employed", period: "2023 - Present", description: "Building custom web solutions for clients worldwide" },
        { title: "MERN Stack Developer", company: "Various Projects", period: "2022 - Present", description: "Developing full-stack applications with modern technologies" },
    ];

    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 dark:from-[#080808] dark:via-[#0a0a0a] dark:to-[#0c0c0c] transition-colors duration-500">
                <HomeHeader />
                <HomeDesign />

                {/* Hero Section */}
                <section className="relative pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
                            {/* Profile Image */}
                            <div className="relative flex-shrink-0">
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-yellow-400 dark:to-amber-500 rounded-3xl rotate-6 opacity-80"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-yellow-400 dark:to-amber-500 rounded-3xl -rotate-3 opacity-60"></div>
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl shadow-amber-500/20 dark:shadow-yellow-400/10">
                                        <img
                                            src={coder}
                                            alt="Chandan Chaudhary"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Status Badge */}
                                    <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 text-xs font-semibold rounded-full shadow-lg flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white dark:bg-gray-900 rounded-full animate-pulse"></span>
                                        Available
                                    </div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-yellow-400 rounded-full text-sm font-medium mb-4">
                                    <span className="w-2 h-2 bg-amber-500 dark:bg-yellow-400 rounded-full"></span>
                                    Full Stack Developer
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-400">Chandan Chaudhary</span>
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
                                    A passionate <span className="text-amber-600 dark:text-yellow-400 font-medium">MERN Stack Developer</span> & <span className="text-amber-600 dark:text-yellow-400 font-medium">Freelancer</span> from India.
                                    I specialize in building modern web applications, creating intuitive user interfaces, and delivering exceptional digital experiences.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <a
                                        href="https://drive.google.com/file/d/1JwvzMMMnfaVjcqLk1Ei8RnqDI8pG4pTk/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 dark:hover:shadow-yellow-400/20 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                        Download Resume
                                    </a>
                                    <a
                                        href="mailto:chandanchaudharybst@gmail.com"
                                        className="px-6 py-3 border-2 border-amber-500 dark:border-yellow-400 text-amber-600 dark:text-yellow-400 font-semibold rounded-xl hover:bg-amber-50 dark:hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* About Text */}
                            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-black/20">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-10 h-1 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 rounded-full"></span>
                                    About Me
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                    <p>
                                        I'm an 18-year-old developer who loves turning ideas into reality through code.
                                        My journey in tech started with curiosity and has evolved into a passion for creating
                                        <span className="text-amber-600 dark:text-yellow-400 font-medium"> innovative web solutions</span>.
                                    </p>
                                    <p>
                                        I specialize in <span className="text-amber-600 dark:text-yellow-400 font-medium">resolving</span> frontend & backend challenges,
                                        <span className="text-amber-600 dark:text-yellow-400 font-medium"> creating</span> intuitive user interfaces, and
                                        <span className="text-amber-600 dark:text-yellow-400 font-medium"> imagining</span> useful interactions that make
                                        digital experiences memorable.
                                    </p>
                                    <p>
                                        When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
                                        or helping fellow developers solve problems.
                                    </p>
                                </div>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-4">
                                {[
                                    { label: "Name", value: "Chandan Chaudhary", icon: "user" },
                                    { label: "Profile", value: "Full Stack Developer & Freelancer", icon: "code" },
                                    { label: "Domain", value: "Software Development", icon: "laptop" },
                                    { label: "Education", value: "Bachelor of Computer Applications", icon: "education" },
                                    { label: "Location", value: "India", icon: "location" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group p-4 rounded-xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5 flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon === "user" && (
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                            )}
                                            {item.icon === "code" && (
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="16 18 22 12 16 6" />
                                                    <polyline points="8 6 2 12 8 18" />
                                                </svg>
                                            )}
                                            {item.icon === "laptop" && (
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                                    <line x1="2" y1="20" x2="22" y2="20" />
                                                </svg>
                                            )}
                                            {item.icon === "education" && (
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                                </svg>
                                            )}
                                            {item.icon === "location" && (
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{item.label}</p>
                                            <p className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-400">Tech Stack</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                                Technologies I work with to build modern, scalable, and user-friendly applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 text-center"
                                >
                                    <div
                                        className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-all duration-300"
                                        style={{ backgroundColor: `${skill.color}15` }}
                                    >
                                        <SkillIcon name={skill.icon} color={skill.color} />
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-400">Journey</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                                        <span className="text-xs px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-yellow-400 font-medium w-fit">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-amber-600 dark:text-yellow-400 text-sm font-medium mb-2">{exp.company}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-yellow-400/10 dark:to-amber-500/10 border border-amber-200/50 dark:border-yellow-500/20 backdrop-blur-sm">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Let's Work Together
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 dark:hover:shadow-yellow-400/20 transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Start a Project
                                </a>
                                <a
                                    href="https://wa.me/6394543387?text=Hi, I'm coming from your Portfolio..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 border-2 border-green-500 text-green-600 dark:text-green-400 font-semibold rounded-xl hover:bg-green-50 dark:hover:bg-green-400/10 transition-all duration-300 flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

// Skill Icon Component
function SkillIcon({ name, color }) {
    const icons = {
        java: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 384 512">
                <path d="M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3z" />
            </svg>
        ),
        react: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 512 512">
                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM256.2 303.5c-25.3 0-45.8-20.5-45.8-45.8s20.5-45.8 45.8-45.8 45.8 20.5 45.8 45.8-20.5 45.8-45.8 45.8z" />
            </svg>
        ),
        uiux: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        ),
        express: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 32 32">
                <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795z" />
            </svg>
        ),
        node: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 640 512">
                <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7z" />
            </svg>
        ),
        github: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
            </svg>
        ),
        database: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 448 512">
                <path d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z" />
            </svg>
        ),
        python: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" style={{ fill: color }} viewBox="0 0 448 512">
                <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
            </svg>
        ),
    };

    return icons[name] || null;
}

export default Profile;
