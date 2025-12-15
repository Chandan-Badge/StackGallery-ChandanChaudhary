import { useEffect, useRef } from "react";
import "../App.css";

const MouseAnimation = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    const container = particlesContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      // Mouse position in %
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      // Create particle
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random small size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position at mouse
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.6";

      container.appendChild(particle);

      // Animate outward
      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";

        // Remove particle
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={particlesContainerRef}
      id="particles-container"
      className="particles-container"
    />
  );
};

export default MouseAnimation;