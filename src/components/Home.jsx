import { Route, Routes } from "react-router-dom";

import HomeHeader from "./homepage/HomeHeader";
import HomeMain from "./homepage/HomeMain";
import HomeBottom from "./homepage/HomeBottom";
import HomeDesign from "./homepage/HomeDesign";
import Profile from "./Profilepage/Profile";

import "../../src/style.css";

function Home() {

    // let [darkMode, setDarkMode] = useState(true);
    // let modeChange = darkMode ? "dark" : "";

    return (
        <section className={`home relative h-screen w-full flex flex-col items-center`}>
            <HomeHeader />
            <HomeMain />
            <HomeBottom />

            <HomeDesign />
        </section>
    );
}

export default Home;