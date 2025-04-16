import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";
import strongPassword from "../ProjectImages/StrongPassword.png";
import strongPasswordDark from "../ProjectImages/StrongPasswordDark.png";
import aichatBot from "../ProjectImages/AiChatBot.png";
import bgChanger from "../ProjectImages/bgChanger.png";


import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function ReactProjects() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
      
          <div className='flex items-center gap-3'>
            <p class="text-2xl text-[#0f6dbf] font-bold">Projects using React </p>
            <i class="fa-brands fa-react text-[#0f6dbf] text-3xl flex items-center"></i>
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
                      <img src={strongPasswordDark} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-[#0f6dbf]'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={aichatBot} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-[#0f6dbf]'>AI ChatBot</h3>
                        <p className='text-xs '>ChatBot</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={bgChanger} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-blue-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-[#0f6dbf]'>React BG Changer</h3>
                        <p className='text-xs '>React App</p>
                      </span>
                    </a></SwiperSlide>

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
