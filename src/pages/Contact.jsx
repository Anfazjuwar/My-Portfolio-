import { motion } from "framer-motion";
import LineGradient from "../componets/LineGradient";
import img1 from "../assets/awsome.jpeg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Messgealert from "../componets/Messgealert";

const Contact = () => {
  const [showMessageAlert, setShowMessageAlert] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_YOUR_SERVICE_ID}`,
        `${import.meta.env.VITE_YOUR_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_APP_YOUR_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          setShowMessageAlert(true);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setTimeout(() => setShowMessageAlert(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact" className="py-4 text-black dark:text-white">
      {showMessageAlert && <Messgealert />}
      {/* Heading */}
      <motion.div
        className="flex items-center justify-center w-full"
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
      <div className="gap-24 mt-5 md:flex md:justify-center md:items-center">
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
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="w-full p-3 font-semibold bg-blue placeholder:bg-opaque-black"
              type="text"
              name="user_name"
              placeholder="NAME"
              required
              value={formData.user_name}
              onChange={(e) =>
                setFormData({ ...formData, user_name: e.target.value })
              }
            />

            <input
              className="w-full p-3 mt-5 font-semibold bg-blue placeholder:bg-opaque-black"
              type="email"
              name="user_email"
              placeholder="EMAIL"
              required
              value={formData.user_email}
              onChange={(e) =>
                setFormData({ ...formData, user_email: e.target.value })
              }
            />

            <textarea
              className="w-full p-3 mt-5 font-semibold bg-blue placeholder:bg-opaque-black"
              name="message"
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>

            <button
              type="submit"
              className="p-5 mt-5 font-semibold transition duration-500 bg-yellow text-deep-blue hover:bg-red hover:text-white"
            >
              Send me a message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
