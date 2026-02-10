import React from "react";
import { useEffect, useState } from "react";

function HomeBottom() {

    const [dragBtn, setDragBtn] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY > 100) {
    //             setDragBtn(true)
    //         } else {
    //             setDragBtn(false)
    //         }
    //     })    
    // }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 600,
            behavior: "smooth"
        })
    }

    return (
        // {/* <!-- Bottom Button of 1st Section --> */}
        <section className="absolute bottom-0 flex justify-center items-center py-14 ">

            <button onClick={scrollUp} className="not-show-pop-slow drag-btn text-amber-800/80 hover:text-amber-600 dark:text-yellow-100/80 dark:hover:text-yellow-300 text-lg px-10 py-2 rounded font-semibold bg-gradient-to-b from-white/30 dark:from-black/5 to-transparent backdrop-blur-sm border border-amber-400/30 dark:border-yellow-300/20 relative hover:scale-105 ease-in-out duration-100 group self-center group">
                Let's Explore
    
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute fill-amber-800/80 group-hover:fill-amber-600 dark:fill-yellow-100/80 dark:group-hover:fill-yellow-300 h-10 w-10 left-1/2 -translate-x-1/2 top-12 group-hover:top-14 ease-in-out duration-100" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/></svg>
            </button>
        </section>
    );
}

export default HomeBottom;