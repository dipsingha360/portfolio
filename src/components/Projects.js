import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Proxima - Project management web application (2023)",
    image1: "https://i.postimg.cc/3NHdwcmH/project1-1.jpg",
    image2: "https://i.postimg.cc/VNpJx6Nv/project1-2.jpg",
    description:
      "This ReactJS-based project management app is built with modern tech like React Router, TailwindCSS, Express, MongoDB, and Mongoose. It's user-friendly, allowing businesses and individuals to easily manage projects online. Features include project creation, editing, and deletion, with each user having their own account for independent management.",
    tools: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://proxima-ds.netlify.app",
    frontEndLink: "https://github.com/dipsingha360/proxima-client",
    backEndLink: "https://github.com/dipsingha360/proxima-server",
  },
  {
    id: 2,
    title: "Tech Alpha — Ecommerce website",
    image1: "https://i.postimg.cc/C5Hdnssn/project2-1.jpg",
    image2: "https://i.postimg.cc/cH3v0SKm/project2-2.jpg",
    description:
      "Tech alpha is an open-source e-commerce project built to provide a seamless online shopping experience for technology enthusiasts. The website offers a wide range of technology products. The platform enables customers to purchase products securely and conveniently, with a streamlined checkout process that supports various payment methods.",
    tools: ["React.js", "React Redux", "React Router", "Tailwind CSS"],
    liveLink: "https://techalpha.netlify.app/",
    frontEndLink: "https://github.com/dipsingha360/tech-alpha",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-20" id="projects">
      <SectionTitle title={"Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
