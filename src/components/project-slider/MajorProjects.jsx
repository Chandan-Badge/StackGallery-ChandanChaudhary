import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';
import "../../../src/style.css";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import ProjectCard from '../ProjectCard.jsx';
import ComingSoon from '../ComingSoon.jsx';

// Accent color for this section (title text + card titles).
const ACCENT = 'text-orange-600';

// Shared class for every slide wrapper.
const SLIDE_CLASS =
  'swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4';

// Add / edit projects here.
// hoverBorder must be a FULL Tailwind class literal so it isn't purged.
const majorProjects = [
  {
    href: 'https://portfolio.chandanchaudhary.in',
    img: assets.portfolio,
    title: 'Portfolio Website',
    subtitle: 'Chandan Chaudhary',
    hoverBorder: 'hover:border-yellow-500/40',
  },
  {
    href: 'https://lucknowtradinghouse.com',
    img: assets.lth,
    title: 'Lucknow Trading House',
    subtitle: 'Internship Project',
    hoverBorder: 'hover:border-[#31b4ed]/40',
  },
  {
    href: 'https://c2codebase.chandanchaudhary.in',
    img: assets.c2explains,
    title: 'C2 Explains',
    subtitle: 'Developer Tools Platform',
    hoverBorder: 'hover:border-[#b6bee5]/40',
  },
  {
    href: 'https://www.nexeraonline.in',
    img: assets.nexera,
    title: 'Nexera',
    subtitle: 'Client Project',
    hoverBorder: 'hover:border-[#926c50]/40',
  },
  {
    href: 'https://safe-sphere-sos.vercel.app/',
    img: assets.safesphere,
    title: 'SafeSphere',
    subtitle: "Women's safety application",
    hoverBorder: 'hover:border-red-500/40',
  },
  {
    href: 'https://gateugcnet.chandanchaudhary.in',
    img: assets.gateUBCNET,
    title: 'GATE UGCNET Practice Platform',
    subtitle: 'Final Year Project',
    hoverBorder: 'hover:border-blue-500/60',
  },
  {
    href: 'https://strong-password-generator-c2.netlify.app',
    img: assets.strongPassword,
    title: 'Strong Password Generator',
    subtitle: 'Password Suggestion application',
    hoverBorder: 'hover:border-purple-500/40',
  },
  {
    href: 'https://chandanchaudhary-linktree.netlify.app',
    img: assets.linktree,
    title: 'LinkTree',
    subtitle: 'Chandan Chaudhary',
    hoverBorder: 'hover:border-[#d18cbc]/40',
  },
];

// How many "Coming soon..." placeholder slides to show at the end.
const COMING_SOON_COUNT = 2;

export default function MajorProjects() {

  const [view, setView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = (e) => {
      setView(e.matches);
    };

    setView(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const viewCondition = view ? 2 : 3;

  return (
    <>
      <main className='px-4 sm:px-8'>

        <div className='relative px-3 sm:px-6 lg:px-12 py-4 w-full h-max bg-white/80 dark:bg-[#111] backdrop-blur-none flex flex-col gap-2 rounded-lg'>

          <div className='flex items-center gap-2 md:gap-3'>
            <p className={`text-xl md:text-2xl ${ACCENT} font-bold pl-2 sm:pl-0`}>Major Projects </p>
            <span className="material-symbols-outlined text-orange-600 text-2xl md:text-3xl flex items-center">devices</span>
          </div>

          <div className='container w-full h-[90%] flex justify-center items-center text-gray-700 dark:text-[#fff]'>
            <Swiper
              slidesPerView={viewCondition}
              spaceBetween={15}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="swiper mySwiper w-[100%] h-[100%]"
              navigation={true}
            >
              {majorProjects.map((project) => (
                <SwiperSlide key={project.title} className={SLIDE_CLASS}>
                  <ProjectCard {...project} accent={ACCENT} />
                </SwiperSlide>
              ))}

              {Array.from({ length: COMING_SOON_COUNT }).map((_, i) => (
                <SwiperSlide key={`coming-soon-${i}`} className={SLIDE_CLASS}>
                  <ComingSoon />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>
      </main>
    </>
  );
}
