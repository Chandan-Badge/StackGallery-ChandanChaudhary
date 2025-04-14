import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';
import car from "./car.jpg";
import css1 from "../ProjectImages/css1.png";
import css2 from "../ProjectImages/css2.png";
import css3 from "../ProjectImages/css3.png";

import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function CSSProjects() {
  return (
    <>
    <main className='px-8'>

      <div className='relative px-12 py-4 w-full h-80 bg-[#222]/60 backdrop-blur-none flex flex-col gap-4 rounded-lg'>
        <p class="text-2xl text-green-500 font-bold">Projects using css</p>
        <div className='container w-full h-[80%] flex justify-center items-center'>
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
                <SwiperSlide className='swiper-slide text-center text-base bg-pink-600 flex justify-center items-center rounded-md'><a href="#"><img src={css1} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" /></a></SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-blue-600 flex justify-center items-center rounded-md'><a href="#"><img src={css2} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" /></a></SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-yellow-400 flex justify-center items-center rounded-md'><a href="#"><img src={css3} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" /></a></SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-green-500 flex justify-center items-center rounded-md'>Slide 4</SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-red-600 flex justify-center items-center rounded-md'>Slide 5</SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-purple-600 flex justify-center items-center rounded-md'>Slide 6</SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-[#fff] flex justify-center items-center rounded-md'>Slide 7</SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-orange-600 flex justify-center items-center rounded-md'>Slide 8</SwiperSlide>
                <SwiperSlide className='swiper-slide text-center text-base bg-fuchsia-600 flex justify-center items-center rounded-md'>Slide 9</SwiperSlide>

            </Swiper>

        </div>

      </div>
    </main>
    </>
  );
}
