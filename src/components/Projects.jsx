import { useState } from 'react';

// import 'swiper/css';
// import 'swiper/css/pagination';

import FullStackProjects from './project-slider/FullStackProjects';
import ReactProjects from './project-slider/ReactProjects';
import JSProjects from './project-slider/JSProjects';

import "./style.css"

function Projects() {

  return (
    <div className='flex flex-col gap-8 py-10'>
      <FullStackProjects />
      <ReactProjects />
      <JSProjects />
    </div>
  )
}

export default Projects;
