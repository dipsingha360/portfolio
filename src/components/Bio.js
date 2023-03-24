import { useRef } from "react";
import { useBioReveal } from "../hook/gsap";

const Bio = () => {
  const bioRef = useRef(null);
  useBioReveal(bioRef, 2);

  return (
    <div className="bio container mx-auto mt-20 overflow-hidden ">
      <p ref={bioRef}>
        React Developer proficient in creating dynamic and responsive web
        applications using JavaScript, React, Redux and Tailwind. Skilled in
        solving problems with data structures and algorithms and learning new
        technologies. Collaborated with other developers and led projects from
        idea to launch. Passionate about delivering high-quality user
        experiences and exceeding client expectations.
      </p>
    </div>
  );
};

export default Bio;
