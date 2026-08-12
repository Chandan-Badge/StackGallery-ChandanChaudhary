import React from 'react'
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { websiteSchema } from '../components/seoSchemas';

function Home() {
    return (
        <div>
            <SEO
                description="StackGallery - the project portfolio of Chandan Chaudhary, a Full Stack Developer & Freelancer from India. Explore React, Next.js, JavaScript, Java, CSS and Full Stack projects, freelance work and photography."
                keywords="StackGallery-ChandanChaudhary, React Projects, JavaScript Projects, Full Stack Projects, Next.js Projects, Java Projects, Freelance Projects"
                path="/"
                structuredData={websiteSchema}
            />

            <Hero />
            <Projects />
        </div>
    )
}

export default Home;