import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';

function EmptyProject() {
    return (
        <>
            {/* <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
            <span className='w-20 h-20 sm:h-32 md:h-36 lg:h-52 text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span>
            </SwiperSlide> */}

            <SwiperSlide className='swiper-slide text-center text-base flex justify-center items-center rounded-md md:rounded-lg p-2 md:p-4'>
                <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>Coming soon...</span>
            </SwiperSlide>
        </>


    );
}

export default EmptyProject;