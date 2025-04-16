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
import strongPassword from "../ProjectImages/StrongPassword.png";
import strongPasswordDark from "../ProjectImages/StrongPasswordDark.png";
import linktree from "../ProjectImages/LinkTree.png";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function MajorProjects() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>

        <div className='flex items-center gap-3'>
          <p class="text-2xl text-orange-600 font-bold">Major Projects </p>
          <span class="material-symbols-outlined text-orange-600 text-3xl flex items-center">devices</span>
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
                <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                  <a href="#" className='flex flex-col h-max gap-2'>
                    <img src={portfolio} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-yellow-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-lg text-orange-600'>Portfolio Website</h3>
                      <p className='text-xs '>Chandan Chaudhary</p>
                    </span>
                  </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                  <a href="#" className='flex flex-col h-max gap-2'>
                    <img src={safesphere} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-red-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-lg text-orange-600'>SafeSphere</h3>
                      <p className='text-xs '>Women's safety application</p>
                    </span>
                  </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                  <a href="#" className='flex flex-col h-max gap-2'>
                    <img src={strongPassword} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                      <p className='text-xs '>Password Suggestion application</p>
                    </span>
                  </a></SwiperSlide>

                  <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                  <a href="#" className='flex flex-col h-max gap-2'>
                    <img src={linktree} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-green-500/40' alt="" />
                    <span className='h-max'>
                      <h3 className='font-bold text-lg text-orange-600'>LinkTree</h3>
                      <p className='text-xs '>Chandan Chaudhary</p>
                    </span>
                  </a></SwiperSlide>

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
