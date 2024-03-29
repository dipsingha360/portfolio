import { useRef } from "react";
import { useHoverEffect } from "../hook/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hook/gsap";

const data = {
  image1: "https://i.postimg.cc/8CpLGJwp/6.jpg",
  image2: "https://i.postimg.cc/gJ5h3Mpj/1.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadline1Ref, heroHeadline2Ref];
  useHoverEffect(heroImageRef, data.image1, data.image2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 0.7);

  return (
    <div className="hero container mx-auto flex justify-center items-center overflow-hidden">
      <div className="hero-img " ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1Ref}>Front-end</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
