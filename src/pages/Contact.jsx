import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../componets/LineGradient";
import img1 from "../assets/awsome.jpeg";

const Contact = () => {
  const {
    register, //undifed the input field in form
    handleSubmit, //handles the submit event of the form.
    trigger, //valdtion
    formState: { errors }, //errors
  } = useForm();

  const onsumbit = async (e) => {
    const isvalid = await trigger();
    if (!isvalid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="py-48">
      {/* Heading */}
      <motion.div
        className="flex justify-end w-full"
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
          <p className="text-4xl font-semibold uppercase font-playfair">
            <span className="text-yellow">Contact me</span>To Get started
          </p>
          <div className="flex my-5 md:justify-end">
            <LineGradient width=" w-1-4" />
          </div>
        </div>
      </motion.div>
      {/* form and img */}
      <div className="gap-16 mt-5 md:flex md:justify-between">
        <motion.div
          className="flex justify-center basis-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={img1} alt="contact" className="rounded-2xl saturate-200" />
        </motion.div>
        <motion.div
          className="mt-10 basis-1/2 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { delay: 0.2, opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onsumbit}
            action="https://formsubmit.co/9d22029eedab4d91bd95495a5ca6511d"
            method="POST"
          >
            <input
              className="w-full p-3 font-semibold bg-blue placeholder:bg-opaque-black"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 uppercase text-red">
                {errors.name.type === "required" && "This Field is Required"}
                {errors.name.type === "maxLength" && "max length is 100 Char"}
              </p>
            )}

            <input
              className="w-full p-3 mt-5 font-semibold bg-blue placeholder:bg-opaque-black"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 uppercase text-red">
                {errors.name.type === "required" && "This Field is Required"}
                {errors.email.type === "pattern" && "max length is 100 Char"}
              </p>
            )}
            <textarea
              className="w-full p-3 mt-5 font-semibold bg-blue placeholder:bg-opaque-black"
              type="text"
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 uppercase text-red">
                {errors.message.type === "required" && "This Field is Required"}
                {errors.message.type === "maxLength" &&
                  "max length is 100 Char"}
              </p>
            )}
            <button
              type="submit"
              className="p-5 mt-5 font-semibold transition duration-500 bg-yellow text-deep-blue hover:bg-red hover:text-white "
            >
              send me a meassge
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
