import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "../../../src/style.css";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function JavaProjects() {

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

      <div className='relative px-3 sm:px-6 lg:px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
                        
          <div className='flex items-center gap-2 md:gap-3'>
            <p class="text-xl md:text-2xl text-[#dc2626] font-bold pl-2 sm:pl-0">Projects using Java</p>
            <i class="fa-brands fa-java text-[#dc2626] text-xl md:text-3xl flex items-center"></i>
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
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>
                  
                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  {/* <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                  <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide> */}

              </Swiper>

          </div>

      </div>
    </main>
    </>
  );
}
