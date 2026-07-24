import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';
import "../../../src/style.css";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import ProjectCard from '../ProjectCard.jsx';
import ComingSoon from '../ComingSoon.jsx';

// Accent color for this section (title text + card titles).
const ACCENT = 'text-yellow-400';

// Shared class for every slide wrapper.
const SLIDE_CLASS =
  'swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4';

// Add / edit projects here.
// hoverBorder must be a FULL Tailwind class literal so it isn't purged.
const jsProjects = [
  {
    href: 'https://portfolio.chandanchaudhary.in',
    img: assets.portfolio,
    title: 'Portfolio Website',
    subtitle: 'Chandan Chaudhary',
    hoverBorder: 'hover:border-yellow-500/40',
  },
  {
    href: 'https://chandanchaudhary-linktree.netlify.app/',
    img: assets.linkTree,
    title: 'LinkTree',
    subtitle: 'Chandan Chaudhary',
    hoverBorder: 'hover:border-pink-500/40',
  },
  {
    href: 'https://simonsays-chandanchaudhary.netlify.app/',
    img: assets.simonSays,
    title: 'SimonSays',
    subtitle: 'Brain Game',
    hoverBorder: 'hover:border-yellow-500/40',
  },
  {
    href: 'https://ai-chatbot-c2.netlify.app/',
    img: assets.aiChatBot,
    title: 'AI ChatBot',
    subtitle: 'ChatBot',
    hoverBorder: 'hover:border-purple-600/60',
  },
  {
    href: 'https://chandanchaudhary-soon.netlify.app/',
    img: assets.darkLight,
    title: 'Dark Mode & Light Mode',
    subtitle: 'Web application',
    hoverBorder: 'hover:border-gray-500/60',
  },
  {
    href: 'https://tictactoe-chandanchaudhary.netlify.app/',
    img: assets.tictactoe,
    title: 'TicTacToe',
    subtitle: 'Multiplayer Game',
    hoverBorder: 'hover:border-[#ffffc7]/80',
  },
  {
    href: 'https://colorgenerator-c2.netlify.app/',
    img: assets.randomColor,
    title: 'Random Color Generator',
    subtitle: 'Web application',
    hoverBorder: 'hover:border-green-500/40',
  },
  {
    href: 'https://chandanchaudhary-soon.netlify.app/',
    img: assets.randomDog,
    title: 'Dog image Generator',
    subtitle: 'Web application',
    hoverBorder: 'hover:border-red-500/40',
  },
  {
    href: 'https://chandanchaudhary-soon.netlify.app/',
    img: assets.autoTyper,
    title: 'Auto Typer',
    subtitle: 'Web application',
    hoverBorder: 'hover:border-purple-400/40',
  },
  {
    href: 'https://chandanchaudhary-soon.netlify.app/',
    img: assets.slider,
    title: 'Image Slider',
    subtitle: 'Web application',
    hoverBorder: 'hover:border-[#b6bee5]/40',
  },
];

// How many "Coming soon..." placeholder slides to show at the end.
const COMING_SOON_COUNT = 1;

export default function JSProjects() {

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
            <p className={`text-xl md:text-2xl ${ACCENT} font-bold pl-2 sm:pl-0`}>Javascript Projects</p>
            <i className="fa-brands fa-js text-yellow-400 text-xl md:text-3xl flex items-center"></i>
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
              {jsProjects.map((project) => (
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
