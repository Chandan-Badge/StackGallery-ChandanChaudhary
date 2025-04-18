import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeBottom from "./HomeBottom";
import HomeDesign from "./HomeDesign";

import "../../../src/style.css";

function Home() {
    return (
        <section className="home relative h-screen w-full flex flex-col items-center">
            <HomeHeader />
            <HomeMain />
            <HomeBottom />

            <HomeDesign />
        </section>
    );
}

export default Home;