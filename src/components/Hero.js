import { useRef } from "react";

const Hero = () => {
  const heroImageRef = useRef(null);

  return (
    <div className="hero container mx-auto mt-20">
      <div className="hero-img " ref={heroImageRef}></div>
      <div className="shutter">
        <h1>React JS</h1>
      </div>
      <div className="shutter">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
