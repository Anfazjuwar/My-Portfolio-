import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const SocialMediaicons = () => {
  return (
    <div className="flex justify-center my-10 text-black md:justify-start gap-7 dark:text-white">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com/in/muhammadhu-anfaz-174a12287"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://twitter.com/anfaz_official?t=4edYH8y5s2OT36a7xuMAeA&s=09"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter size={28} />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/Anfazjuwar"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={28} />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://api.whatsapp.com/send?phone=+940757194319"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.instagram.com/_anfaz_official/?igsh=YWdtbjEwZmM4MzBl"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
};

export default SocialMediaicons;
