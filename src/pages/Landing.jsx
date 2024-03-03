import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/profile-image.jpg";
import SocialMediaicons from "../componets/SocialMediaicons";
import { TypeAnimation } from "react-type-animation";

const Landing = ({ setSelectedPage, selectedPage }) => {
  const isAbovemediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:justify-between md:items-center md:h-full"
    >
      {/* Imge Section */}
      <motion.div
        className="z-10 flex justify-center mt-16 basis-3/5 md:mt-32 md:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: -2 },
        }}
      >
        <div>
          {" "}
          {isAbovemediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
     before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1] before:shadow-2xl before:shadow-rose-50"
            >
              {" "}
              <img
                alt="profile"
                src={profile}
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px] rounded-t-full shadow-2xl before:shadow-rose-600"
              />
            </div>
          ) : (
            <img
              alt="profile"
              src={profile}
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[350px] md:max-w-[450px] rounded-t-full shadow-md shadow-rose-600 "
            />
          )}
        </div>
      </motion.div>
      {/* main section */}
      <div className="z-30 mt-12 ml-18 md:ml-24 basis-2/5 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-6xl text-center font-playfair md:text-start">
            Anfaz
            <span className="z-20 xs:relative xs:text-deep-blue xs:font-semibold xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Juwar
            </span>
          </p>
          <p className="mt-10 text-xl text-center text-red mb-7 md:text-start">
            <TypeAnimation
              sequence={[
                "Full Stack Devoloper", // initially rendered starting point
                500,
                "Full Stack Devoloper",
                500,
              ]}
              speed={0}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </p>
        </motion.div>
        {/* call to action  */}
        <motion.div
          className="flex justify-center mt-5 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            href="#contact"
            className="py-3 font-semibold transition duration-500 rounded-sm px-7 bg-gradient-rainblue text-deep-blue hover:bg-blue hover:text-white"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
          >
            <div className="flex items-center justify-center w-full h-full px-10 duration-500 bg-deep-blue hover:text-red transtion font-playfair ">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex justify-center mt-0 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaicons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
