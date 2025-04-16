import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";
import autoTyper from "../ProjectImages/AutoTyper.png";
import catFact from "../ProjectImages/CatFact.png";
import darkLight from "../ProjectImages/Dark&Light.png";
import linkTree from "../ProjectImages/LinkTree.png"
import multiTab from "../ProjectImages/MultiTab.png";
import randomColor from "../ProjectImages/RandomColor.png";
import randomDog from "../ProjectImages/RandomDog.png";
import aiChatBot from "../ProjectImages/AiChatBot.png";
import simonSays from "../ProjectImages/SimonSays.png";
import slider from "../ProjectImages/Slider.png";
import tictactoe from "../ProjectImages/TicTacToe.png";
import transform from "../ProjectImages/Transform.png"


import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function JSProjects() {
  return (
    <>
    <main className='px-8'>

      {/* <div className='relative px-12 py-4 w-full h-80 bg-[#222]/60 backdrop-blur-none flex flex-col gap-4 rounded-lg'>

      <div className='flex items-center gap-3'>
        <p class="text-2xl text-yellow-400 font-bold">Projects using Javascript </p>
        <i class="fa-brands fa-js text-yellow-400 text-3xl flex items-center "></i>
      </div>

        <div className='container w-full h-[80%] flex justify-center items-center text-[#fff]'>
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
                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center'>
                  <a href="#">
                    <img src={car} className='' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                Slide 3</SwiperSlide>

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

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                Slide 10</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                Slide 11</SwiperSlide>

            </Swiper>

        </div>

      </div> */}

      <div className='relative px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
      
          <div className='flex items-center gap-3'>
            <p class="text-2xl text-yellow-400 font-bold">Projects using Javascript </p>
            <i class="fa-brands fa-js text-yellow-400 text-3xl flex items-center "></i>
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
                      <img src={linkTree} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-yellow-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Portfolio Website</h3>
                        <p className='text-xs '>Chandan Chaudhary</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={simonSays} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>SafeSphere</h3>
                        <p className='text-xs '>Women's safety application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={darkLight} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={tictactoe} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={aiChatBot} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={randomColor} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={randomDog} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={autoTyper} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-lg p-3'>
                    <a href="#" className='flex flex-col h-max gap-2'>
                      <img src={slider} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-lg border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-lg text-orange-600'>Strong Password Generator</h3>
                        <p className='text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>
  
              </Swiper>
  
          </div>
  
        </div>
    </main>
    </>
  );
}
