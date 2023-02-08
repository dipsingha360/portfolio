import { useRef } from "react";
import { useHoverEffect } from "../hook/useHoverEffect";
import SectionTitle from "./SectionTitle";
import { useProjectSectionReveal } from "../hook/gsap";

const data = {
  image1:
    "https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image2:
    "https://images.pexels.com/photos/15422042/pexels-photo-15422042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  link: "https://www.google.com",
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dignissimos ullam nulla officia voluptatibus totam quo
            minus! Eaque dignissimos, voluptate porro quibusdam repellendus
            deleniti alias, culpa consequatur quidem, enim rem? Neque non
            numquam aliquid itaque, repudiandae maiores eligendi! Amet dolore
            voluptas mollitia quisquam quibusdam nam numquam tempora possimus
            deleniti, soluta libero corrupti sit deserunt voluptatum recusandae
            architecto distinctio provident ratione sequi magnam laborum ea
            eligendi ad. Assumenda, fugiat! Minima, enim.
          </p>
          <p className="mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dignissimos ullam nulla officia voluptatibus totam quo
            minus! Eaque dignissimos, voluptate porro quibusdam repellendus
            deleniti alias, culpa consequatur quidem, enim rem? Neque non
            numquam aliquid itaque, repudiandae maiores eligendi!
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
