import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function JavaProjects() {
  return (
    <>
    <main className='px-4 sm:px-8'>

      <div className='relative px-6 md:px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
                        
          <div className='flex items-center gap-2 md:gap-3'>
            <p class="text-xl md:text-2xl text-[#dc2626] font-bold">Projects using Java</p>
            <i class="fa-brands fa-java text-[#dc2626] text-xl md:text-3xl flex items-center"></i>
          </div>

          <div className='container w-full h-[90%] flex justify-center items-center text-[#fff]'>
              <Swiper
                slidesPerView={2}
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
                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 1</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 2</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 3</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 4</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 5</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 6</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 7</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 8</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-sm md:text-base bg-gray-800 flex justify-center items-center rounded-md py-12 md:py-16 lg:py-32 xl:py-36'>
                  Slide 9</SwiperSlide>

              </Swiper>

          </div>

      </div>
    </main>
    </>
  );
}
