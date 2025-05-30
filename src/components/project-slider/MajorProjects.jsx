import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "../../../src/style.css";

import safesphere from "../../assets/ProjectImages/SafeSphere.png";
import portfolio from "../../assets/ProjectImages/Portfolio.png";
import strongPassword from "../../assets/ProjectImages/StrongPassword.png";
import strongPasswordDark from "../../assets/ProjectImages/StrongPasswordDark.png";
import linktree from "../../assets/ProjectImages/LinkTree.png";

import EmptyProject from './EmptyProject';

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

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

      <div className='relative px-3 sm:px-6 lg:px-12 py-4 w-full h-max bg-[#351330] dark:bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>

        <div className='flex items-center gap-2 md:gap-3'>
          <p class="text-xl md:text-2xl text-orange-600 font-bold pl-2 sm:pl-0">Major Projects </p>
          <span class="material-symbols-outlined text-orange-600 text-2xl md:text-3xl flex items-center">devices</span>
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
                  <a href="https://chandanchaudhary-portfolio.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                    <img src={portfolio} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-yellow-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-sm md:text-lg text-orange-600'>Portfolio Website</h3>
                      <p className='text-[10px] md:text-xs'>Chandan Chaudhary</p>
                    </span>
                  </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <a href="https://safe-sphere-sos.vercel.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                    <img src={safesphere} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-red-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-sm md:text-lg text-orange-600'>SafeSphere</h3>
                      <p className='text-[10px] md:text-xs'>Women's safety application</p>
                    </span>
                  </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <a href="https://strong-password-generator-c2.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                    <img src={strongPassword} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-sm md:text-lg text-orange-600'>Strong Password Generator</h3>
                      <p className='text-[10px] md:text-xs '>Password Suggestion application</p>
                    </span>
                  </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <a href="https://chandanchaudhary-linktree.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                    <img src={linktree} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-[#d18cbc]/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-sm md:text-lg text-orange-600'>LinkTree</h3>
                      <p className='text-[10px] md:text-xs'>Chandan Chaudhary</p>
                    </span>
                  </a></SwiperSlide>

                  {/* <EmptyProject /> */}
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
