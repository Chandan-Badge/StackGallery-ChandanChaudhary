import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";
import safesphere from "../ProjectImages/SafeSphere.png";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function FullStackProjects() {
  return (
    <>
    <main className='px-4 sm:px-8'>

      <div className='relative px-6 md:px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
            
          <div className='flex items-center gap-2 md:gap-3'>
            <p class="text-xl md:text-2xl text-[#00bdad] font-bold">Full Stack Projects</p>
            <i class="fa-solid fa-bars-progress text-[#00bdad] text-xl md:text-2xl flex items-center"></i>
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
                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={safesphere} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-[#00bdad]'>SafeSphere</h3>
                        <p className='text-[10px] md:text-xs '>Women's Safety Application</p>
                      </span>
                    </a></SwiperSlide>

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
