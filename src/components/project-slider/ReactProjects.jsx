import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';
import "../../../src/style.css";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import ProjectCard from '../ProjectCard.jsx';
import ComingSoon from '../ComingSoon.jsx';

// Accent color for this section (title text + card titles).
const ACCENT = 'text-[#31b4ed]';

// Shared class for every slide wrapper.
const SLIDE_CLASS =
  'swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4';

// Add / edit projects here.
// hoverBorder must be a FULL Tailwind class literal so it isn't purged.
const reactProjects = [
  {
    href: 'https://www.nexeraonline.in/',
    img: assets.nexera,
    title: 'Nexera',
    subtitle: 'Client Project',
    hoverBorder: 'hover:border-[#926c50]/60',
  },
  {
    href: 'https://gateugcnet.chandanchaudhary.in',
    img: assets.gateUBCNET,
    title: 'GATE UGCNET Practice Platform',
    subtitle: 'Final Year Project',
    hoverBorder: 'hover:border-blue-500/60',
  },
  {
    href: 'https://chandanchaudhary-soon.netlify.app/',
    img: assets.PMS,
    title: 'Patient Management Syatem',
    subtitle: 'Hospital Management Application',
    hoverBorder: 'hover:border-green-600/60',
  },
  {
    href: 'https://strong-password-generator-c2.netlify.app/',
    img: assets.strongPasswordDark,
    title: 'Strong Password Generator',
    subtitle: 'Password Suggestion application',
    hoverBorder: 'hover:border-[#00afb9]/40',
  },
  {
    href: 'https://c2-ai-assistant.vercel.app/',
    img: assets.aiAssistant,
    title: 'AI Assistant',
    subtitle: 'Assistant ChatBot',
    hoverBorder: 'hover:border-[#885df5]/60',
  },
  {
    href: 'https://localstorage-todoapp-c2.vercel.app/',
    img: assets.todoLocalstorage,
    title: 'React Todo-App',
    subtitle: 'Local Storage',
    hoverBorder: 'hover:border-[#ccbed7]/60',
  },
  {
    href: 'https://bg-changer-c2.netlify.app/',
    img: assets.bgChanger,
    title: 'React BG Changer',
    subtitle: 'React App',
    hoverBorder: 'hover:border-[#facc15]/40',
  },
];

// How many "Coming soon..." placeholder slides to show at the end.
const COMING_SOON_COUNT = 2;

export default function ReactProjects() {

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
            <p className={`text-xl md:text-2xl ${ACCENT} font-bold pl-2 sm:pl-0`}>React.js Projects</p>
            <i className="fa-brands fa-react text-[#31b4ed] text-xl md:text-3xl flex items-center"></i>
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
              {reactProjects.map((project) => (
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
