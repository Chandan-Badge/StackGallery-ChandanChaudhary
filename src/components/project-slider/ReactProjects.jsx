import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";
import react1 from "../ProjectImages/react1.png";
import react1a from "../ProjectImages/react1a.png";
import react2 from "../ProjectImages/react2.png";
import react3 from "../ProjectImages/react3.png";


import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function ReactProjects() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-80 bg-[#222]/60 backdrop-blur-none flex flex-col gap-4 rounded-lg'>
        <p class="text-2xl text-[#0f6dbf] font-bold">Projects using React <i class="fa-brands fa-react"></i></p>
        <div className='container w-full h-max flex justify-center items-center text-[#fff]'>
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
                <SwiperSlide 
                className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={react1} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={react2} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={react3} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
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
