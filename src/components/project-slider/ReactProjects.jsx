import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { assets } from '../../assets/assets.js';

import "../../../src/style.css";

// import strongPassword from "../../assets/ProjectImages/StrongPassword.png";
// import strongPasswordDark from "../../assets/ProjectImages/StrongPasswordDark.png";
// import aichatBot from "../../assets/ProjectImages/AiChatBot.png";
// import bgChanger from "../../assets/ProjectImages/bgChanger.png";


import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function ReactProjects() {

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

      <div className='relative px-3 sm:px-6 lg:px-12 py-4 w-full h-max bg-[#351330] dark:bg-[#222]/80 backdrop-blur-none flex flex-col gap-2 rounded-lg'>
      
          <div className='flex items-center gap-2 md:gap-3'>
            <p class="text-xl md:text-2xl text-[#0f6dbf] font-bold pl-2 sm:pl-0">Projects using React </p>
            <i class="fa-brands fa-react text-[#0f6dbf] text-xl md:text-3xl flex items-center"></i>
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
                    <a href="https://strong-password-generator-c2.netlify.app/" className='flex flex-col h-max gap-2' target="_blank">
                      <img src={assets.strongPasswordDark} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-[#00afb9]/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-[#0f6dbf]'>Strong Password Generator</h3>
                        <p className='text-[10px] md:text-xs '>Password Suggestion application</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://ai-chatbot-c2.netlify.app/" className='flex flex-col h-max gap-2' target="_blank">
                      <img src={assets.aichatBot} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-red-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-[#0f6dbf]'>AI ChatBot</h3>
                        <p className='text-[10px] md:text-xs '>ChatBot</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <a href="https://bg-changer-c2.netlify.app/" className='flex flex-col h-max gap-2' target="_blank">
                      <img src={assets.bgChanger} className='h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent hover:border-blue-500/40' alt="" />
                      <span className='h-max'>
                        <h3 className='font-bold text-sm md:text-lg text-[#0f6dbf]'>React BG Changer</h3>
                        <p className='text-[10px] md:text-xs '>React App</p>
                      </span>
                    </a></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>

                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
     
                    {/* <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
 
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
 
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
 
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide>
 
                    <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-[#0b3954] dark:bgbg-[#0b3954] dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span></SwiperSlide> */}
 

              </Swiper>

          </div>

      </div>
    </main>
    </>
  );
}
