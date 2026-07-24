import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';
import "../../../src/style.css";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import ProjectCard from '../ProjectCard.jsx';
import ComingSoon from '../ComingSoon.jsx';

// Accent color for this section (title text + card titles).
const ACCENT = 'text-[#7f24cf] dark:text-[#edd792]';

// Shared class for every slide wrapper.
const SLIDE_CLASS =
  'swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4';

// Add / edit projects here.
// hoverBorder must be a FULL Tailwind class literal so it isn't purged.
const freelanceProjects = [
  {
    href: 'https://www.nexeraonline.in/',
    img: assets.nexera,
    title: 'Nexera',
    subtitle: 'Client Project',
    hoverBorder: 'hover:border-[#926c50]/40',
  },
  {
    href: 'https://chandanchaudhary-soon.netlify.app/',
    img: assets.saronex,
    title: 'Saronex Nature Sciences',
    subtitle: 'Client Project',
    hoverBorder: 'hover:border-green-400/40',
  },
  // {
  //   href: 'https://lucknowtradinghouse.com/',
  //   img: assets.lth,
  //   title: 'Lucknow Trading House',
  //   subtitle: 'Internship Project',
  //   hoverBorder: 'hover:border-[#31b4ed]/40',
  // },
];

// How many "Coming soon..." placeholder slides to show at the end.
const COMING_SOON_COUNT = 1;

export default function FreelanceProjects() {

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
            <p className={`text-xl md:text-2xl ${ACCENT} font-bold pl-2 sm:pl-0`}>Freelance Projects</p>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#7f24cf] dark:fill-[#edd792] w-7' viewBox="0 0 640 640"><path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.8 383.7 229.7 393 239.1z"/></svg>
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
              {freelanceProjects.map((project) => (
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
