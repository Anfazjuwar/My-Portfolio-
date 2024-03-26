import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { RiMenuFoldLine } from "react-icons/ri";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      }hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ isTopofPage, setSelectedPage, selectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const isAboveSmallScreens = useMediaQuery("(min-width:800px)");
  const navbarBackground = isTopofPage
    ? ""
    : "duration-100  bg-gray-100 dark:bg-deep-blue text-white dark:text-white";

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 `}>
      <div className="flex items-center justify-between w-5/6 mx-auto">
        <h1 className="text-2xl font-bold text-black font-playfair dark:text-white">
          Anfaz
        </h1>
        {/* DESKTOP NAV */}

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-12 text-sm font-semibold text-black font-opensans dark:text-white ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* hello */}
            {/* <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <div>
              {options?.map((opt) => (
                <button
                  key={opt.text}
                  onClick={() => setTheme(opt.text)}
                  className={`w-8 h-8 m-1 text-xl leading-9 rounded-full ${
                    theme === opt.text && "text-sky-600"
                  }`}
                >
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div>
              {options?.map((opt) => (
                <button
                  key={opt.text}
                  onClick={() => setTheme(opt.text)}
                  className={`w-8 h-8 m-1 text-xl leading-9 rounded-full text-sky-600  ${
                    theme === opt.text && "text-sky-600"
                  }`}
                >
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>
            <button
              className="p-2 rounded-full bg-red"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="'menu-icon" src={menuIcon} />
            </button>
          </>
        )}

        {/* Mobile Menu pop */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed bottom-0 right-0 h-full    w-[300px] text-black duration-100  bg-gray-100 dark:bg-deep-blue dark:text-white   ">
            <div className="flex justify-end pt-4 pr-8 p-13">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <RiMenuFoldLine className="mb-4 text-3xl text-blue" />
              </button>
            </div>
            {/* menu itens */}

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-red">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
