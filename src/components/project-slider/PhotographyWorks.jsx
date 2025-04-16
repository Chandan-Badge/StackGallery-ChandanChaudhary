import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function PhotographyWorks() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
                  
          <div className='flex items-center gap-3'>
            <p class="text-2xl text-[#ff006e] font-bold">Photography Works - using Photoshop & Canva</p>
            <span class="material-symbols-outlined text-[#ff006e] text-3xl flex items-center">palette</span>
          </div>

          <div className='container w-full h-[90%] flex justify-center items-center text-[#fff]'>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="swiper mySwiper w-[100%] h-[100%]"
                navigation={true}
                // loop={true}
              >
                  <SwiperSlide className='swiper-slide h-[80%] text-center text-base bg-[#1b263b] flex justify-center items-center rounded-md py-24'>
                  Slide 1</SwiperSlide>

                  <SwiperSlide className='swiper-slide h-[80%] text-center text-base bg-[#1b263b] flex justify-center items-center rounded-md py-24'>
                  Slide 2</SwiperSlide>

                  <SwiperSlide className='swiper-slide h-[80%] text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 3</SwiperSlide>

                  <SwiperSlide className='swiper-slide h-[80%] text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 4</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 5</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 6</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 7</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 8</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md py-24'>
                  Slide 9</SwiperSlide>

              </Swiper>

          </div>

      </div>
    </main>
    </>
  );
}
