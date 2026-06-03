import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';
import "../../../src/style.css";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

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
            <p class="text-xl md:text-2xl text-[#7f24cf] dark:text-[#edd792] font-bold pl-2 sm:pl-0">Freelance Projects</p>
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
            // loop={true}
            >

              <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                <a href="https://www.nexeraonline.in/" className='flex flex-col h-max gap-2' target="_blank">
                  <img src={assets.nexera} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-[#926c50]/40' alt="" />
                  <span className='h-max'>
                    <h3 className='font-bold text-sm md:text-lg text-[#7f24cf] dark:text-[#edd792]'>Nexera</h3>
                    <p className='text-[10px] md:text-xs'>Client Project</p>
                  </span>
                </a>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                <a href="https://chandanchaudhary-soon.netlify.app/" className='flex flex-col h-max gap-2' target="_blank">
                  <img src={assets.saronex} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-green-400/40' alt="" />
                  <span className='h-max'>
                    <h3 className='font-bold text-sm md:text-lg text-[#7f24cf] dark:text-[#edd792]'>Saronex Nature Sciences</h3>
                    <p className='text-[10px] md:text-xs'>Client Project</p>
                  </span>
                </a>
              </SwiperSlide>

              {/* <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                <a href="https://lucknowtradinghouse.com/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                  <img src={assets.lth} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-[#31b4ed]/40' alt="" />
                  <span className='h-max'>
                    <h3 className='font-bold text-sm md:text-lg text-[#7f24cf] dark:text-[#edd792]'>Lucknow Trading House</h3>
                    <p className='text-[10px] md:text-xs'>Internship Project</p>
                  </span>
                </a>
              </SwiperSlide> */}

              {/* <EmptyProject /> */}
              <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>
                  Coming soon...
                </span>
              </SwiperSlide>

            </Swiper>

          </div>

        </div>
      </main>
    </>
  );
}
