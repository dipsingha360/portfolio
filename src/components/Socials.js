import { useRef } from "react";
import { useSocialReveal } from "../hook/gsap";

const data = [
  { id: 1, title: "Facebook", url: "www.facebook.com/dipsingha360" },
  { id: 2, title: "Twitter", url: "www.twitter.com/dipsingha360" },
  { id: 3, title: "Github", url: "www.github.com/dipsingha360" },
  { id: 4, title: "Linkedin", url: "www.linked.in.com/dipsingha360" },
  { id: 5, title: "Leetcode", url: "www.leetcode.com/dipsingha360" },
];

const Socials = () => {
  const socialRef = useRef(null);
  useSocialReveal(socialRef, 1.2);

  return (
    <div
      className="socials flex uppercase gap-5 text-sm fixed left-10 top-[70%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-300"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
