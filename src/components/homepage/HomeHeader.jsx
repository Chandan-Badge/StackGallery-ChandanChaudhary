import logo from "../c2-logo.png";

function HomeHeader() {
    return (
        <header className="h-max w-full bg-[#060707] relative px-10 py-1 flex items-center">
            <img className="h-24 w-24" src={logo} alt="" />
        </header>
    );
}

export default HomeHeader;