import About from "./About";
import Bio from "./Bio";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
