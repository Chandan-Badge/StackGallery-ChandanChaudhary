import "../../style.css";
import HomeDesign from "./HomeDesign";
import HomeHeader from "./HomeHeader";

function Profile() {
    return (
        <div className="home relative h-screen w-full flex flex-col items-center">
            
            <HomeHeader />
            <HomeDesign />

        </div>
    );
}

export default Profile;