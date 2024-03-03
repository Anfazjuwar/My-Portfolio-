import { useState } from "react";
import img1 from "../assets/my.jpg";

const Messgealert = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(true);

  const handleClose = () => {
    setIsMenuToggled(false);
  };

  return isMenuToggled ? (
    <div
      id="toast-message-cta"
      className="fixed w-full max-w-xs p-4 text-black transform -translate-x-1/2 rounded-lg shadow bg-gradient-rainblue md:top-[10%] left-1/2 top-[75%]  "
      role="alert"
    >
      <div className="flex">
        <img
          className="w-8 h-8 rounded-full"
          src={img1}
          alt="Jese Leos image"
        />
        <div className="text-sm font-playfair ms-3">
          <span className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
            Muhammadhu Anfaz
          </span>
          <div className="mb-2 font-semibold text-8 font-opensans">
            Hi, thank you for your message.
          </div>
        </div>
        <button
          onClick={handleClose}
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-message-cta"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  ) : null;
};

export default Messgealert;
