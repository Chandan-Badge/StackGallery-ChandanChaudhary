function HomeDesign() {
    return (
        <div className="absolute h-screen w-full pointer-events-none">
            <div className="h-max w-max  bg-yellow-500/40 backdrop-blur-none text-[#fff] px-52 py-28 rounded-full blur-2xl absolute -left-36 top-96 -z-10 opacity-100"></div>
            <div className="h-max w-max  bg-[#00bcff]/40 backdrop-blur-none text-[#fff] px-44 py-28 rounded-full blur-2xl absolute right-16 bottom-16 -z-10 opacity-100"></div>
            <div className="h-max w-max  bg-[#059a5d]/40 backdrop-blur-none text-[#fff] px-52 py-28 rounded-full blur-2xl absolute left-96 top-16 -z-10 opacity-100"></div>
            {/* <div className="h-max w-max  bg-red-500/40 backdrop-blur-none text-[#fff] px-52 py-32 rounded-full blur-2xl absolute right-52 top-16 -z-10 opacity-100"></div> */}
            {/* <div className="h-max w-max  bg-yellow-500/40 backdrop-blur-none text-[#fff] px-64 py-28 rounded-full blur-2xl absolute -left-32 bottom-52 -z-10 opacity-100"></div> */}
        </div>
    );
}

export default HomeDesign;