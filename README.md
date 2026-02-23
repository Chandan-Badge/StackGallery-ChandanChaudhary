<div align="center">

# StackGallery

### A Personal Project Showcase Built with React

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://stackgallery-chandanchaudhary.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

**StackGallery** is a responsive, single-page portfolio application that showcases a curated collection of projects — from web apps and UI components to full-stack builds. Each project is presented in an interactive slider with live demo links, organized by technology stack.

## Live Demo

🔗 **[stackgallery-chandanchaudhary.netlify.app](https://stackgallery-chandanchaudhary.netlify.app/)**

---

## Features

- **Categorized Project Showcase** — Projects organized into sections: Major Projects, Full Stack, Next.js, React.js, JavaScript, Java, CSS, and Photography.
- **Interactive Swiper Sliders** — Smooth, touch-friendly carousels with navigation and pagination powered by Swiper.js.
- **Dark / Light Mode** — Theme toggle with persistence via `localStorage`.
- **Mouse Particle Animation** — Custom cursor-following particle effect for an engaging visual experience.
- **Responsive Design** — Fully adaptive layout, optimized for mobile, tablet, and desktop.
- **Profile Page** — Dedicated `/profile` route with bio, skills, and tech stack overview.
- **Back to Top Button** — Smooth scroll-to-top with visibility toggle on scroll.
- **Glassmorphism UI** — Modern backdrop blur and translucent card aesthetics.
- **SEO Optimized** — Open Graph meta tags and descriptive meta content.

---

## Tech Stack

| Category       | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| **Framework**  | React 19                                                                   |
| **Build Tool** | Vite 6                                                                     |
| **Styling**    | Tailwind CSS 3, Custom CSS                                                 |
| **Routing**    | React Router DOM 7                                                         |
| **Slider**     | Swiper.js 10                                                               |
| **Icons**      | Font Awesome 6, Google Material Symbols                                    |
| **State**      | React Context API                                                          |
| **Deployment** | Netlify                                                                    |

---

## Project Structure

```
StackGallery-ChandanChaudhary/
├── public/                        # Static assets & favicon
├── src/
│   ├── assets/                    # Project images & asset exports
│   │   ├── assets.js              # Centralized asset imports
│   │   └── ProjectImages/         # Screenshots of showcased projects
│   ├── components/
│   │   ├── Home.jsx               # Landing page layout
│   │   ├── Projects.jsx           # Project sections aggregator
│   │   ├── Footer.jsx             # Footer with social links
│   │   ├── BackToTop.jsx          # Scroll-to-top button
│   │   ├── MouseAnimation.jsx     # Cursor particle effect
│   │   ├── homepage/
│   │   │   ├── HomeHeader.jsx     # Navbar with theme toggle & navigation
│   │   │   ├── HomeMain.jsx       # Hero section with intro text
│   │   │   ├── HomeBottom.jsx     # "Let's Explore" CTA button
│   │   │   ├── HomeDesign.jsx     # Animated gradient background
│   │   │   └── HomeDesign.css     # Background glow styling
│   │   ├── Profilepage/
│   │   │   └── Profile.jsx        # About me page with skills
│   │   └── project-slider/
│   │       ├── MajorProjects.jsx       # Featured / major projects
│   │       ├── FullStackProjects.jsx   # Full-stack projects
│   │       ├── NextProjects.jsx        # Next.js projects
│   │       ├── ReactProjects.jsx       # React.js projects
│   │       ├── JSProjects.jsx          # Vanilla JavaScript projects
│   │       ├── JavaProjects.jsx        # Java projects
│   │       ├── CSSProjects.jsx         # CSS-only projects
│   │       ├── PhotographyWorks.jsx    # Photography works
│   │       └── EmptyProject.jsx        # Placeholder for empty slots
│   ├── context/
│   │   └── StackContext.jsx       # Theme context provider
│   ├── App.jsx                    # Root component with routes
│   ├── main.jsx                   # Entry point
│   └── style.css                  # Global custom styles
├── index.html                     # HTML entry with SEO meta tags
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
├── package.json
└── LICENSE                        # MIT License
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/iamchandanchaudhary/StackGallery-ChandanChaudhary.git

# Navigate to the project directory
cd StackGallery-ChandanChaudhary

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Available Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start Vite development server       |
| `npm run build`     | Build for production                |
| `npm run preview`   | Preview production build locally    |
| `npm run lint`      | Run ESLint                          |

---

## Deployment

This project is deployed on **Netlify**. Any push to the main branch triggers an automatic build and deploy.

To deploy manually:

```bash
npm run build
# Upload the `dist/` folder to Netlify (or any static hosting provider)
```

---

## Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chandan--chaudhary/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iamchandanchaudhary)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_.chandan_chaudhary/)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@c2explains)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chandanchaudhary533@gmail.com)

</div>

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Chandan Chaudhary](https://chandanchaudhary-portfolio.netlify.app/)**

</div>