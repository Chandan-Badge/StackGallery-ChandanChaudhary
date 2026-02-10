import "./HomeDesign.css";

function HomeDesign() {
    return (
        <div className="bg-design-wrapper">
            {/* Primary accent circles */}
            <div className="glow-circle circle1" />
            <div className="glow-circle circle2" />
            <div className="glow-circle circle3" />

            {/* Secondary ambient circles */}
            <div className="glow-circle circle4" />
            <div className="glow-circle circle5" />

            {/* Edge vignette for depth */}
            <div className="vignette" />
        </div>
    );
}

export default HomeDesign;