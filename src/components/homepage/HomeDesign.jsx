function HomeDesign() {
    return (
        <div className="absolute h-screen w-full pointer-events-none">
            <div className="h-max w-max bg-yellow-500/40 backdrop-blur-none text-[#fff] px-28 lg:px-52 py-16 lg:py-28 rounded-full blur-2xl absolute -left-12 md:-left-36 top-96 -z-10 opacity-100"></div>
            <div className="h-max w-max bg-[#00bcff]/40 backdrop-blur-none text-[#fff] px-24 lg:px-44 py-16 lg:py-28 rounded-full blur-2xl absolute right-16 bottom-16 -z-10 opacity-100"></div>
            <div className="h-max w-max bg-[#059a5d]/40 backdrop-blur-none text-[#fff] px-28 lg:px-52 py-16 lg:py-28 rounded-full blur-2xl absolute right-32 sm:right-44 md:right-96 top-16 -z-10 opacity-100"></div>
            {/* <div className="h-max w-max  bg-red-500/40 backdrop-blur-none text-[#fff] px-52 py-32 rounded-full blur-2xl absolute right-52 top-16 -z-10 opacity-100"></div> */}
            {/* <div className="h-max w-max  bg-yellow-500/40 backdrop-blur-none text-[#fff] px-64 py-28 rounded-full blur-2xl absolute -left-32 bottom-52 -z-10 opacity-100"></div> */}
        </div>
    );
}

export default HomeDesign;