import { useRef } from "react";
import { useBioReveal } from "../hook/gsap";

const Bio = () => {
  const bioRef = useRef(null);
  useBioReveal(bioRef, 2);

  return (
    <div className="bio container mx-auto mt-20 overflow-hidden ">
      <p ref={bioRef}>
        A front-end developer skilled in React builds dynamic web app
        interfaces. Proficiency in JavaScript and React is essential to create
        reusable components and manage state. Understanding React's virtual DOM,
        lifecycle methods, and hooks is key. Consider this field if you have a
        passion for functional and visually appealing web experiences using
        React.
      </p>
    </div>
  );
};

export default Bio;
