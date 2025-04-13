function HomeBottom() {
    return (
        // {/* <!-- Bottom Button of 1st Section --> */}
        <section className="relative flex justify-center items-center">

            <button className="not-show-pop-slow drag-btn text-yellow-100/80 hover:text-yellow-300 text-lg px-10 py-2 rounded font-semibold bg-gradient-to-b from-black/5 to-transparent backdrop-blur-sm border border-yellow-300/20 relative hover:scale-110 ease-in-out duration-100 group self-center group">
                Let's Start
    
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute fill-yellow-100/80 group-hover:fill-yellow-300 h-10 w-10 left-1/2 -translate-x-1/2 top-12 group-hover:top-14 ease-in-out duration-100" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/></svg>
            </button>
        </section>
    );
}

export default HomeBottom;