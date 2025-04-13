import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import car from "./car.jpg";

// import required modules
import { Navigation, FreeMode, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <header className="h-20 w-full bg-blue-800">
        <h1 className="text-[#fff] text-3xl font-bold">ProjectHub</h1>
    </header>

    {/* <p class="text-xl text-[#ff0000] m-2">Projects using React</p> */}
    <div className='container relative px-10 w-full h-80 bg-[#31327c] flex justify-center items-center p-4'>
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
          loop={true}
        >
            <SwiperSlide className='swiper-slide text-center text-base bg-pink-600 flex justify-center items-center'><a href="#"><img src={car} alt="" /></a></SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-blue-600 flex justify-center items-center'>Slide 2</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-yellow-400 flex justify-center items-center'>Slide 3</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-green-500 flex justify-center items-center'>Slide 4</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-red-600 flex justify-center items-center'>Slide 5</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-purple-600 flex justify-center items-center'>Slide 6</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-[#fff] flex justify-center items-center'>Slide 7</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-orange-600 flex justify-center items-center'>Slide 8</SwiperSlide>
            <SwiperSlide className='swiper-slide text-center text-base bg-fuchsia-600 flex justify-center items-center'>Slide 9</SwiperSlide>

        </Swiper>

    </div>
    </>
  );
}
