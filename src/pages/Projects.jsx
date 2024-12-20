import LineGradient from "../componets/LineGradient";
import { motion } from "framer-motion";
import img1 from "../assets/E-commerce.png";
import img2 from "../assets/GYM.png";
import img3 from "../assets/e-f.png";
import img4 from "../assets/backend.png";
import img5 from "../assets/hotel.png";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, imges, about }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p>{about}</p>
      </div>
      <img
        className="saturate-200 sm:max-w-[400px] sm:max-h-[400px] "
        src={imges}
        alt={`Project ${title}`}
      />
    </motion.div>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 text-black dark:text-white">
      {/* heading */}
      <motion.div
        className="mx-auto mb-8 text-center md:w-2-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="text-4xl font-semibold font-playfair">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>
      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="md:grid md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" uppercase gap-4 flex justify-center text-center items-center p-10  max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Completed PROJECTS
            <a
              className="transition duration-500 hover:opacity-50 "
              href="https://github.com/Anfazjuwar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={28} />
            </a>
          </div>
          <Project
            title={"E-commerce"}
            about={
              "e-commerce website built using React, Redux, Node.js, Express.js, MongoDB, and Mongoose:"
            }
            imges={img1}
          />

          <Project
            title={"GYM"}
            about={"GYM website built using React And taiwindcss"}
            imges={img2}
          />

          <Project
            title={"E-commerce 2"}
            about={"e-commerce website built using React, css"}
            imges={img3}
          />

          <Project
            title={" Full-Stack MERN Blog Application "}
            about={
              "Built using React, Node.js, Express.js, MongoDB, and Mongoose:"
            }
            imges={img4}
          />
          <Project
            title={"Hotel"}
            about={"Built using React,Tailwindcss"}
            imges={img5}
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10 mb-4 text-2xl font-semibold text-center uppercase font-playfair">
        More Projects are coming <span className=" text-red">Soon!</span>
        <a
          className="transition duration-500 hover:opacity-50"
          href="https://www.instagram.com/_anfaz_official/?igsh=YWdtbjEwZmM4MzBl"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={28} />
        </a>
        <a
          className="transition duration-500 hover:opacity-50 "
          href="https://github.com/Anfazjuwar"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </div>
      <LineGradient className="mt-12" />
    </section>
  );
};

export default Projects;
