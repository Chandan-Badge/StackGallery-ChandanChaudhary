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

        <div className='flex items-center gap-3'>
          <p class="text-2xl text-purple-600 font-bold">Projects using css</p>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-purple-600' viewBox="0 0 448 512"><path d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"/></svg>
        </div>

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
                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={css1} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={css2} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  <a href="#">
                    <img src={css3} className='hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                  </a></SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

                <SwiperSlide className='swiper-slide text-center text-base bg-gray-800 flex justify-center items-center rounded-md'>
                  Slide 2</SwiperSlide>

            </Swiper>

        </div>

      </div>
    </main>
    </>
  );
}
