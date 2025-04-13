import { useState } from 'react';

// import 'swiper/css';
// import 'swiper/css/pagination';

import ReactProject from './project-slider/ReactProject';
import "./style.css"

function Projects() {

  return (
    <div className='flex flex-col gap-8'>
      <ReactProject />

      <ReactProject />
    </div>
  )
}

export default Projects;
