import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";
import safesphere from "../ProjectImages/SafeSphere.png";
import portfolio from "../ProjectImages/Portfolio.png";
import react1a from "../ProjectImages/react1a.png";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function MajorProjects() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-80 bg-[#222]/60 backdrop-blur-none flex flex-col gap-4 rounded-lg'>

      <div className='flex items-center gap-3'>
        <p class="text-2xl text-orange-600 font-bold">Major Projects </p>
        <span class="material-symbols-outlined text-orange-600 text-3xl flex items-center">devices</span>
      </div>

        <div className='container w-full h-[70%] flex justify-center items-center text-[#fff]'>
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
                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={portfolio} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide 
                  className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                    <a href="#">
                      <img src={safesphere} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                    </a></SwiperSlide>

                  <SwiperSlide 
                    className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                    <a href="#">
                      <img src={react1a} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                    </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 4</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 5</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 6</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 7</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 8</SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 9</SwiperSlide>

            </Swiper>

        </div>

      </div>
    </main>
    </>
  );
}
