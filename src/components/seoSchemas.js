export const SITE_URL = "https://stackgallery.chandanchaudhary.in";
export const SITE_NAME = "StackGallery - Chandan Chaudhary";
export const DEFAULT_IMAGE = `${SITE_URL}/c2icon.png`;
export const DEFAULT_DESCRIPTION =
  "Chandan Chaudhary is a MERN Stack Developer & Freelancer from India, building modern web applications with React, Next.js, Node.js and Tailwind CSS. Explore projects in React, JavaScript, Java, CSS and Full Stack development.";

// JSON-LD structured data blocks passed to <SEO structuredData={...} />
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chandan Chaudhary",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  jobTitle: "MERN Stack Developer & Freelancer",
  description: DEFAULT_DESCRIPTION,
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Java",
    "Tailwind CSS",
    "UI/UX Design",
    "Full Stack Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  email: "mailto:chandanchaudhary533@gmail.com",
  sameAs: ["https://github.com/Chandan-Badge"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Chandan Chaudhary",
  },
};
