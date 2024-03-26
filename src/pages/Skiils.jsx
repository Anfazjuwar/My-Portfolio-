import LineGradient from "../componets/LineGradient";

import { motion } from "framer-motion";

const Skiils = () => {
  return (
    <section id="skills" className="pt-2 text-black pb-18 dark:text-white">
      <div className="mt-36 md:flex md:justify-between ">
        <div>
          <motion.div
            className=" md:w-1/8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mb-5 text-3xl font-semibold font-playfair">
              Technical <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
          </motion.div>
          <motion.div
            className="md:w-96 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="flex flex-col mt-8 space-y-4 ">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  JavaScript
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  95%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-rainblue h-2.5 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  React.js
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  85%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-rainblue h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Tailwind CSS
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  80%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-rainblue h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Node.js <span className="text-red">& </span>Express.js
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  70%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-rainblue h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  MongoDB
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  70%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-rainblue h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Redux
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  50%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-rainblue h-2.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>

              {/* MORE SKILLS */}
            </div>
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
            <p className="mb-8 text-3xl font-semibold font-playfair">
              <span className="text-red">Mo</span>re
              <LineGradient width="w-10 ml-2" />
            </p>
            <div className="space-x-2">
              <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Next.js
                </span>
              </p>
              <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  TypeScript
                </span>
              </p>
              <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Mongoose
                </span>
              </p>
              <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Postman
                </span>
              </p>
            </div>
          </motion.div>
        </div>
        {/* Professional skill */}
        <div className="">
          <motion.div
            className=" md:w-1/8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mb-2 text-3xl font-semibold font-playfair">
              Professional <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mt-6 space-y-12 md:space-y-0 md:mr-14 md:mt-8 md:gap-32 md:grid-cols-2 md:grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
          >
            <div className="w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>

                <circle
                  className="text-indigo-500 stroke-current progress-ring__circle"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDashoffset="calc(400 - (400 * 55) / 100)"
                ></circle>

                <text
                  x="50"
                  y="50"
                  fontFamily="Verdana"
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="blue"
                >
                  90%
                </text>
              </svg>
              <p className="mt-3 mb-8 text-xl font-semibold text-center font-playfair">
                <span className="dark:text-white">Communication</span>
              </p>
            </div>

            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>
                {/* Progress circle */}
                <circle
                  className="text-indigo-500 stroke-current progress-ring__circle"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDashoffset={`calc(400 - (400 * 35) / 100)`}
                ></circle>
                {/* Center text */}
                <text
                  x="50"
                  y="50"
                  fontFamily="Verdana"
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="blue"
                >
                  60%
                </text>
              </svg>
              <p className="mt-3 mb-8 text-xl font-semibold text-center font-playfair">
                <span className="dark:text-white">Team Work</span>
              </p>
            </div>

            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>
                {/* Progress circle */}
                <circle
                  className="text-indigo-500 stroke-current progress-ring__circle"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDashoffset={`calc(400 - (400 * 50) / 100)`}
                ></circle>
                {/* Center text */}
                <text
                  x="50"
                  y="50"
                  fontFamily="Verdana"
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="blue"
                >
                  80%
                </text>
              </svg>
              <p className="mt-3 mb-8 text-xl font-semibold text-center font-playfair">
                <span className="dark:text-white"> Problem Solving</span>
              </p>
            </div>

            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>
                {/* Progress circle */}
                <circle
                  className="text-indigo-500 stroke-current progress-ring__circle"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDashoffset={`calc(400 - (400 * 40) / 100)`}
                ></circle>
                {/* Center text */}
                <text
                  x="50"
                  y="50"
                  fontFamily="Verdana"
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="blue"
                >
                  65%
                </text>
              </svg>
              <p className="mt-3 mb-8 text-xl font-semibold text-center font-playfair">
                <span className="dark:text-white">Creativity</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skiils;
