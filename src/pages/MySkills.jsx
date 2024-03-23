import LineGradient from "../componets/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Skills from "../assets/cmimage.jpeg";
import resume from "../assets/Resume.pdf";
// import { useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // const refs = useRef < HTMLDivElement > null;
  // const { scrollYProgress } = useScroll({
  //   target: "",
  //   offset: ["0 1", "1.33 1"],
  // });
  // const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-32 md:flex md:justify-between md:gap-16">
        <div className="w-full md:w-1/2">
          {" "}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <p className="mb-5 text-4xl font-semibold font-playfair">
                About <span className="text-red">Me</span>
              </p>
              <LineGradient width="w-[32%]" />
              <p className="mt-10 mb-7">
                Dynamic and dedicated Full Stack Web Developer with a passion
                for creating responsive, user-friendly web applications.
                Proficient in a variety of technologies including React,
                Next.js, TypeScript, Tailwind CSS, CSS, JavaScript, MongoDB,
                Mongoose, Postman, Node.js, Express.js, and Redux. Eager to
                leverage skills and knowledge gained through a Higher Diploma in
                Computing and Software Engineering to contribute effectively to
                innovative projects in the tech industry.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-6 space-x-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {" "}
            <a href="mailto:anfazjuwar@gmail.com" className="no-underline">
              <button
                type="button"
                className="px-6 py-2.5 mb-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 me-2"
              >
                HIRE ME
              </button>
            </a>
            <a href={resume} download={resume} className="no-underline">
              <button
                type="button"
                className="px-6 py-2.5 mb-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 me-2"
              >
                Resume
              </button>
            </a>
          </motion.div>
          <motion.div
            className="mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mb-8 text-4xl font-semibold font-playfair">
              ME<span className="text-red">RN</span>
              <LineGradient width="w-[22%]" />
            </p>
            <div className="space-x-2 ">
              <p className=" uppercase relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  MongoDB
                </span>
              </p>
              <p className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Express js
                </span>
              </p>
              <p className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  React js
                </span>
              </p>
              <p className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Node js
                </span>
              </p>
            </div>
          </motion.div>
        </div>
        {/* image */}
        <div className="w-full mt-5 md:items-center md:flex md:justify-center md:w-1/2">
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              {isAboveMediumScreens ? (
                <div
                  className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] before:rounded-lg before:shadow-xl before:shadow-red"
                >
                  <img
                    alt="skills"
                    className="z-10 rounded-2xl saturate-200"
                    src={Skills}
                  />
                </div>
              ) : (
                <img
                  alt="skills"
                  className="z-10 rounded-2xl saturate-200"
                  src={Skills}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
