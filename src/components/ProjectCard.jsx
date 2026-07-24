/**
 * Inner content of a single project slide.
 * because Swiper only detects <SwiperSlide> as a direct/array child — not a custom wrapper.
 *
 * @param {string} href
 * @param {string} img
 * @param {string} title
 * @param {string} subtitle    
 * @param {string} hoverBorder
 * @param {string} accent
 */
function ProjectCard({
  href,
  img,
  title,
  subtitle,
  hoverBorder = 'hover:border-pink-500/40',
  accent = 'text-[#a655f6]',
}) {
  return (
    <a href={href} className='flex flex-col h-max gap-1 sm:gap-2' target="_blank" rel="noopener noreferrer">
      <img
        src={img}
        alt={title}
        className={`h-[90%] hover:scale-105 transition-all duration-200 ease-in-out rounded-md md:rounded-lg border-[3px] md:border-[6px] border-transparent ${hoverBorder}`}
      />
      <span className='h-max'>
        <h3 className={`font-bold text-sm md:text-lg ${accent}`}>{title}</h3>
        <p className='text-[10px] md:text-xs'>{subtitle}</p>
      </span>
    </a>
  );
}

export default ProjectCard;
