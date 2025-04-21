import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "../../../src/style.css";

import autoTyper from "../../assets/ProjectImages/AutoTyper.png";
import catFact from "../../assets/ProjectImages/CatFact.png";
import darkLight from "../../assets/ProjectImages/Dark&Light.png";
import linkTree from "../../assets/ProjectImages/LinkTree.png"
import multiTab from "../../assets/ProjectImages/MultiTab.png";
import randomColor from "../../assets/ProjectImages/RandomColor.png";
import randomDog from "../../assets/ProjectImages/RandomDog.png";
import aiChatBot from "../../assets/ProjectImages/AiChatBot.png";
import simonSays from "../../assets/ProjectImages/SimonSays.png";
import slider from "../../assets/ProjectImages/Slider.png";
import tictactoe from "../../assets/ProjectImages/TicTacToe.png";
import transform from "../../assets/ProjectImages/Transform.png"


import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function JSProjects() {

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
            <p class="text-xl md:text-2xl text-yellow-400 font-bold pl-2 sm:pl-0">Projects using Javascript </p>
            <i class="fa-brands fa-js text-yellow-400 text-xl md:text-3xl flex items-center "></i>
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
                    <a href="https://chandanchaudhary-linktree.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={linkTree} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-pink-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>LinkTree</h3>
                        <p className='text-[10px] md:text-xs '>Chandan Chaudhary</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://simonsays-chandanchaudhary.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={simonSays} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-yellow-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>SimonSays</h3>
                        <p className='text-[10px] md:text-xs '>Brain Game</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://comfy-kangaroo-0a832b.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={darkLight} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Dark Mode & Light Mode</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://tictactoe-chandanchaudhary.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={tictactoe} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>TicTacToe</h3>
                        <p className='text-[10px] md:text-xs '>Multiplayer Game</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://ai-chatbot-c2.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={aiChatBot} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-orange-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Ai ChatBot</h3>
                        <p className='text-[10px] md:text-xs '>Using JS</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://colorgenerator-c2.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={randomColor} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-green-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Random Color Generator</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://comfy-kangaroo-0a832b.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={randomDog} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Dog image Generator</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://comfy-kangaroo-0a832b.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={autoTyper} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-purple-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Auto Typer</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>
  
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://comfy-kangaroo-0a832b.netlify.app/" className='flex flex-col h-max gap-1 sm:gap-2'>
                      <img src={slider} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-gray-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-yellow-400'>Image Slider</h3>
                        <p className='text-[10px] md:text-xs '>Web application</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Added soon...</span></SwiperSlide>
                      
              </Swiper>
  
          </div>
  
        </div>
    </main>
    </>
  );
}
