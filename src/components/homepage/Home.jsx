import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeBottom from "./HomeBottom";
import HomeDesign from "./HomeDesign";

function Home() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-between items-center">
            <HomeHeader />
            <HomeMain />
            <HomeBottom />

            <HomeDesign />
        </section>
    );
}

export default Home;