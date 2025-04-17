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
    <main className='px-4 sm:px-8'>

      <div className='relative px-6 md:px-12 py-4 w-full h-max bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
      
          <div className='flex items-center gap-2 md:gap-3'>
            <p class="text-xl md:text-2xl text-yellow-400 font-bold">Projects using Javascript </p>
            <i class="fa-brands fa-js text-yellow-400 text-xl md:text-3xl flex items-center "></i>
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
                      <img src={linkTree} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>LinkTree</h3>
                        <p className='text-[10px] md:text-xs '>Chandan Chaudhary</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={simonSays} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-yellow-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>SimonSays</h3>
                        <p className='text-[10px] md:text-xs '>Brain Game</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={darkLight} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Dark Mode & Light Mode</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={tictactoe} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>TicTacToe</h3>
                        <p className='text-[10px] md:text-xs '>Multiplayer Game</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={aiChatBot} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-orange-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Ai ChatBot</h3>
                        <p className='text-[10px] md:text-xs '>Using JS</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={randomColor} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-green-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Random Color Generator</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={randomDog} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Random Dog image Generator</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={autoTyper} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Auto Typer</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="#" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={slider} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-gray-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Image Slider</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
              </Swiper>
  
          </div>
  
        </div>
    </main>
    </>
  );
}
