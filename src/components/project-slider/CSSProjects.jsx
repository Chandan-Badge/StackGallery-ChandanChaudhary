import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "../../../src/style.css";
import university from "../../assets/ProjectImages/University.png";
import amazon from "../../assets/ProjectImages/amazon.png";
import netflix from "../../assets/ProjectImages/Netflix.png";
import tooltip from "../../assets/ProjectImages/ToolTip.png";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function CSSProjects() {

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
            <p class="text-xl md:text-2xl text-purple-600 font-bold pl-2 sm:pl-0">Projects using css</p>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 md:w-7 h-6 md:h-7 fill-purple-600' viewBox="0 0 448 512"><path d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"/></svg>
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
                className=" w-[100%] h-[100%]"
                navigation={true}
                // loop={true}
              >
                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://chandanchaudhary-soon.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                      <img src={university} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-purple-600'>Integral University, Lucknow</h3>
                        <p className='text-[10px] md:text-xs '>University Website</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://chandanchaudhary-soon.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                      <img src={amazon} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-yellow-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-purple-600'>Amazon Clone</h3>
                        <p className='text-[10px] md:text-xs '>Frontend Clone</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://chandanchaudhary-soon.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                      <img src={netflix} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-blue-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-purple-600'>Netflix Clone</h3>
                        <p className='text-[10px] md:text-xs '>Frontend Clone</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://chandanchaudhary-soon.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2' target="_blank">
                      <img src={tooltip} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-purple-600'>Beautiful Tooltip</h3>
                        <p className='text-[10px] md:text-xs '>CSS Style</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
                    
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
                    
                    {/* <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
                    
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
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
