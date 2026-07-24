/**
 * Inner content of a "Coming soon..." placeholder slide.
 * because Swiper only detects <SwiperSlide> as a direct/array child — not a custom wrapper.
 */
function ComingSoon() {
  return (
    <span className='h-[20vw] md:h-[15vw] text-[10px] md:text-base text-center flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent'>
      Coming soon...
    </span>
  );
}

export default ComingSoon;
