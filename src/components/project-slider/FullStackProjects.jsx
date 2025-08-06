import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';

import "../../../src/style.css";

// import safesphere from "../../assets/ProjectImages/SafeSphere.png";
// import c2explains from "../../assets/ProjectImages/c2explains.png";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function FullStackProjects() {

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

      <div className='relative px-3 sm:px-6 lg:px-12 py-4 w-full h-max bg-[#351330] dark:bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
            
          <div className='flex items-center gap-2 md:gap-3'>
            <p class="text-xl md:text-2xl text-[#00bdad] font-bold pl-2 sm:pl-0">Full Stack Projects</p>
            <i class="fa-solid fa-bars-progress text-[#00bdad] text-xl md:text-2xl flex items-center"></i>
          </div>

          <div className='container w-full h-[90%] flex justify-center items-center text-[#fff]'>
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
                      <a href="https://safe-sphere-sos.vercel.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                        <img src={assets.safesphere} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                        <span className='h-max'>
                          <h3 className='font-bold text-sm md:text-lg text-[#00bdad]'>SafeSphere</h3>
                          <p className='text-[10px] md:text-xs '>Women's Safety Application</p>
                        </span>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                      <a href="https://chandanchaudhary-soon.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                        <img src={assets.c2explains} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-[#b6bee5]/40' alt="" />
                        <span className='h-max'>
                          <h3 className='font-bold text-sm md:text-lg text-[#00bdad]'>C2 Explains</h3>
                          <p className='text-[10px] md:text-xs '>Personal Website</p>
                        </span>
                      </a>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    {/* <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide> */}


              </Swiper>

          </div>

      </div>
    </main>
    </>
  );
}
