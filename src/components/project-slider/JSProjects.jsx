import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function JSProjects() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-80 bg-[#222]/60 backdrop-blur-none flex flex-col gap-4 rounded-lg'>
        <p class="text-2xl text-yellow-400 font-bold">Projects using Javascript</p>
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

      </div>
    </main>
    </>
  );
}
