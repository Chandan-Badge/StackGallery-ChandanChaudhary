import { useEffect, useState } from "react";


function BackToTop() {
    
    const [toTop, setToTop] = useState(false);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setToTop(true);
            }
            else {
                setToTop(false);
            }
        });

    }, []);
    
    const topBtn = toTop ? "visible" : "hidden";

    return (
        <button onClick={scrollUp} className={`fixed right-8 bottom-10 bg-yellow-400 hover:bg-yellow-300 rounded-full ${topBtn} transition-all duration-200 ease-in-out delay-75 group z-[15]`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-800 h-12 w-12" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m280-400 200-200 200 200H280Z"/></svg>
            <span className={`${topBtn} absolute text-yellow-400 top-[25%] -left-5 group-hover:-left-10 invisible group-hover:visible transition-all duration-200 ease-in-out`}>Top</span>
        </button>
    );
}

export default BackToTop;