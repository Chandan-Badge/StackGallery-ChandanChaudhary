import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeBottom from "./HomeBottom";

function Home() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-between items-center">
            <HomeHeader />
            <HomeMain />
            <HomeBottom />
        </section>
    );
}

export default Home;