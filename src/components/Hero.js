import { useRef } from "react";
import { useHoverEffect } from "../hook/useHoverEffect";

const data = {
  image1:
    "https://images.pexels.com/photos/2074108/pexels-photo-2074108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image2:
    "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  useHoverEffect(heroImageRef, data.image1, data.image2);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center">
      <div className="hero-img " ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>Front-end</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
