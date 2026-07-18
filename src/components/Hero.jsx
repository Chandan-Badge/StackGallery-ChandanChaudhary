import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import HeroMain from "./hero/HeroMain";
import HeroBottom from "./hero/HeroBottom";
import HeroDesign from "./hero/HeroDesign";
// import MouseAnimation from "./MouseAnimation";

function Hero() {

    return (
        <section className={`home relative h-screen w-full flex flex-col items-center`}>
            {/* <MouseAnimation /> */}
            <Navbar />
            <HeroMain />
            <HeroBottom />

            <HeroDesign />
        </section>
    );
}

export default Hero;