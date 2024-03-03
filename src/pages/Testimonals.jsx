// import { motion } from "framer-motion";
// import LineGradient from "../componets/LineGradient";

// const Testimonals = () => {
//   const testimonals = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
//   return (
//     <section id="testimonials" className="pt-32 pb-32">
//       {/* Heading */}
//       <motion.div
//         className="text-center md:w-1/3 md:text-left"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//       >
//         <p className="mb-5 text-4xl font-semibold font-playfair text-red">
//           UpComing<span className="text-blue">PROJECTS</span>
//         </p>
//         <LineGradient width="max-auto w-2-4" />
//         <p className="mt-10 uppercase mb-7">Soon.....</p>
//       </motion.div>
//       <div className="gap-8 md:flex md:justify-between">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <div className=" md:h-[400px] relative items-center block md:max-w-sm p-12 border border-gray-100 rounded-lg shadow-md bg-gradient-rainblue dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase dark:text-white opacity-20">
//               e-commerce
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">
//               I am building an e-commerce site using React for dynamic user
//               interfaces, Redux for state management, and Tailwind CSS for
//               efficient styling. MongoDB with Mongoose will handle the database
//               management, while Node.js with Express.js will power the backend
//               functionalities. This comprehensive tech stack ensures seamless
//               user experiences, robust data management, and scalable backend
//               operations, laying the foundation for a successful e-commerce
//               venture.
//             </p>
//             <div
//               role="status"
//               className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue"
//                 viewBox="0 0 100 101"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                   fill="currentFill"
//                 />
//               </svg>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <div className="md:h-[400px] relative items-center block md:max-w-md p-12 border border-gray-100 rounded-lg shadow-md bg-gradient-rainblue dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">
//               Movie APP
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">
//               I am developing a movie website using React for interactive user
//               interfaces, Redux for managing application state, and Tailwind CSS
//               for streamlined styling. MongoDB with Mongoose will manage the
//               database, while Node.js with Express.js will drive the backend
//               functionalities. This integrated tech stack promises smooth user
//               interactions, efficient data handling, and scalable backend
//               processes, setting the stage for an exceptional movie browsing
//               experience.
//             </p>
//             <div
//               role="status"
//               className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue"
//                 viewBox="0 0 100 101"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                   fill="currentFill"
//                 />
//               </svg>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.8 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//         >
//           <div className="relative items-center block md:max-w-md p-12 border border-gray-100 rounded-lg shadow-md md:h-[400px] bg-gradient-rainblue dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">
//               Build a Book Store App With MERN
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">
//               I am constructing a Book Store App with the MERN stack,
//               integrating React for dynamic UIs, Tailwind CSS for sleek styling,
//               MongoDB with Mongoose for database management, and Node.js with
//               Express.js for backend functionality. This cohesive tech stack
//               promises seamless user experiences, efficient data management, and
//               scalable operations, laying the groundwork for a thriving Book
//               Store platform.
//             </p>
//             <div
//               role="status"
//               className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue"
//                 viewBox="0 0 100 101"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                   fill="currentFill"
//                 />
//               </svg>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // export default Testimonals;
// <motion.div
// className={`bg-yellow ${testimonals} before:content-person2`}
// initial="hidden"
// whileInView="visible"
// viewport={{ once: true, amount: 0.5 }}
// transition={{ duration: 0.5 }}
// variants={{
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// }}
// >
// <p className="text-6xl font-playfair "></p>
// <p className="text-xl text-center">
//   Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
//   fames odio in at.
// </p>
// </motion.div>
// <motion.div
// className={`bg-yellow ${testimonals} before:content-person2`}
// initial="hidden"
// whileInView="visible"
// viewport={{ once: true, amount: 0.5 }}
// transition={{ duration: 0.5 }}
// variants={{
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// }}
// >
// <p className="text-6xl font-playfair "></p>
// <p className="text-xl text-center">
//   Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
//   fames odio in at.
// </p>
// </motion.div>
// <motion.div
// className={`bg-yellow ${testimonals} before:content-person2`}
// initial="hidden"
// whileInView="visible"
// viewport={{ once: true, amount: 0.5 }}
// transition={{ duration: 0.5 }}
// variants={{
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// }}
// >
// <p className="text-6xl font-playfair "></p>
// <p className="text-xl text-center">
//   Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
//   fames odio in at.
// </p>
// </motion.div>
