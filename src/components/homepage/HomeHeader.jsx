import logo from "../c2-logo.png";

function HomeHeader() {
    return (
        <header className="h-max w-full relative px-14 py-1 flex items-center justify-between">
            <img className="h-24 w-24" src={logo} alt="" />

            <div class="flex justify-end w-max p-0 bg-gradient-to-b from-black/5 to-transparent backdrop-blur-sm rounded-full">
                <nav class=" rounded-full px-4 sm:px-6 py-0 sm:py-0 shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-yellow-300/20 backdrop-blur-md transform transition-all duration-300 max-w-[95%] sm:max-w-[600px]">
                    <div class="flex items-center justify-center space-x-3 sm:space-x-6">
                        <div class="relative group">
                            <div class="p-2 sm:p-3 rounded-full hover:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-95">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 sm:w-6 sm:h-6 text-yellow-100/80 group-hover:text-yellow-300 transition-all duration-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>

                                <div class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 left-1/2 transform -translate-x-1/2 z-50 -bottom-12">
                                    <div class="bg-black/85 backdrop-blur-md text-yellow-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10">
                                    Home
                                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                            <div class="border-4 border-transparent border-t-black/85"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group">
                            <div class="p-2 sm:p-3 rounded-full hover:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-95">
                            
                            <svg  xmlns="http://www.w3.org/2000/svg" class="feather feather-moon w-5 h-5 sm:w-6 sm:h-6 text-yellow-100/80 group-hover:text-yellow-300 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>


                                <div class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 left-1/2 transform -translate-x-1/2 z-50 -bottom-12">
                                    <div class="bg-black/85 backdrop-blur-md text-yellow-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10">
                                    Dark Mode
                                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                            <div class="border-4 border-transparent border-t-black/85"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group hidden">
                            <div class="p-2 sm:p-3 rounded-full hover:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-95">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-sun w-5 h-5 sm:w-6 sm:h-6 text-yellow-100/80 group-hover:text-yellow-300 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>


                                <div class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 left-1/2 transform -translate-x-1/2 z-50 -bottom-12">
                                    <div class="bg-black/85 backdrop-blur-md text-yellow-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10">
                                    Light Mode
                                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                            <div class="border-4 border-transparent border-t-black/85"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group">
                            <div class="p-2 sm:p-3 rounded-full hover:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-95">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-phone w-5 h-5 sm:w-6 sm:h-6 text-yellow-100/80 group-hover:text-yellow-300 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>


                                <div class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 left-1/2 transform -translate-x-1/2 z-50 -bottom-12">
                                    <div class="bg-black/85 backdrop-blur-md text-yellow-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10">
                                    Call
                                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                            <div class="border-4 border-transparent border-t-black/85"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group">
                            <div class="p-2 sm:p-3 rounded-full hover:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-95">
                            
                                <svg class="svg-inline--fa fa-whatsapp fa-w-14 w-5 h-5 sm:w-6 sm:h-6 text-yellow-100/80 group-hover:text-yellow-300 transition-all duration-300" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>


                                <div class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 left-1/2 transform -translate-x-1/2 z-50 -bottom-12">
                                    <div class="bg-black/85 backdrop-blur-md text-yellow-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10">
                                    Whatsapp
                                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                            <div class="border-4 border-transparent border-t-black/85"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative group">
                            <div class="p-2 sm:p-3 rounded-full hover:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)] active:scale-95">
                            
                                {/* <svg class="svg-inline--fa fa-whatsapp fa-w-14 w-5 h-5 sm:w-6 sm:h-6 text-yellow-100/80 group-hover:text-yellow-300 transition-all duration-300" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-100/80 group-hover:fill-yellow-300 transition-all duration-300" viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>

                                <div class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 left-1/2 transform -translate-x-1/2 z-50 -bottom-12">
                                    <div class="bg-black/85 backdrop-blur-md text-yellow-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap font-light tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-yellow-300/10">
                                    Profile
                                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                            <div class="border-4 border-transparent border-t-black/85"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </nav>
            </div>

        </header>
    );
}

export default HomeHeader;