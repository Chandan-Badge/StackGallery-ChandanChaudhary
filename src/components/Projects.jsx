import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import MajorProjects from './project-slider/MajorProjects';
import FullStackProjects from './project-slider/FullStackProjects';
import ReactProjects from './project-slider/ReactProjects';
import JSProjects from './project-slider/JSProjects';
import JavaProjects from './project-slider/JavaProjects';
import PhotographyWorks from './project-slider/PhotographyWorks';
import CSSProjects from './project-slider/CSSProjects';

import "../../src/style.css";
import NextProjects from './project-slider/NextProjects';

function Projects() {

  return (
    <div className='flex flex-col gap-8 py-10'>
      <MajorProjects />
      <FullStackProjects />
      <NextProjects />
      <ReactProjects />
      <JSProjects />
      <JavaProjects />
      <CSSProjects />
      <PhotographyWorks />
    </div>
  )
}

export default Projects;
