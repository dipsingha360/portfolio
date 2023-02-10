import SectionTitle from "./SectionTitle";
import { useContactReveal } from "../hook/gsap";
import { useRef } from "react";

const Contact = () => {
  const contactRef1 = useRef(null);
  const contactRef2 = useRef(null);
  const contactRef3 = useRef(null);
  const contactRef4 = useRef(null);

  const contactRefs = [contactRef1, contactRef2, contactRef3, contactRef4];
  useContactReveal(contactRefs);

  const sendEmail = (e) => {
    e.preventDefault();

    //reset
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form onSubmit={sendEmail} className="mt-40 grid grid-cols-2 gap-20">
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your full name"
            name="fullname"
            required
            className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full"
            ref={contactRef1}
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full"
            ref={contactRef2}
          />
        </div>

        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full resize-none"
            ref={contactRef3}
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            name="email"
            required
            className="uppercase bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none hover:bg-cyan-400/20 hover:border-cyan-400/20  duration-300 w-full"
            ref={contactRef4}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
