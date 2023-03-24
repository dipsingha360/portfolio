import { useRef } from "react";
import { useHoverEffect } from "../hook/useHoverEffect";
import SectionTitle from "./SectionTitle";
import { useProjectSectionReveal } from "../hook/gsap";

const data = {
  image1: "https://i.postimg.cc/FHQjPnLJ/3.jpg",
  image2: "https://i.postimg.cc/x1yLByvp/2.jpg",
  link: "https://docs.google.com/document/d/15v_O6hjLhzeaZB7oEH2zANW_ta2T0EWz4jRCuN7Muog/edit?usp=sharing",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.image1, data.image2);
  useProjectSectionReveal(aboutRefs);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            As a React developer, I have strong skills in JavaScript, React,
            Redux and Tailwind. I can tackle complex challenges with data
            structures and algorithms. I am a fast learner who can build web
            applications that are responsive and user-friendly. I also know how
            to work well with other developers and lead projects from start to
            finish.
          </p>
          <p className="mt-10">
            My passion for web development began with my fascination with the
            power of JavaScript and its potential to create dynamic and
            interactive web applications. As I honed my skills in this language,
            I discovered the power of React and how it simplifies the process of
            building complex user interfaces. I have since become proficient in
            using Redux to manage application state and Tailwind to create
            beautiful and responsive designs.
          </p>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
