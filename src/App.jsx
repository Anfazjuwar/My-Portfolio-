import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./pages/NavBar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import LineGradient from "./componets/LineGradient";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Skiils from "./pages/Skiils";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopofPage, SetIsTopofPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) SetIsTopofPage(true);
      if (window.scrollY !== 0) SetIsTopofPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white app dark:bg-deep-blue">
      {/* ... */}
      <SpeedInsights />
      <NavBar
        isTopofPage={isTopofPage}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        )}
      </div>
      <Landing setSelectedPage={setSelectedPage} selectedPage={selectedPage} />

      <div className="w-5/6 mx-auto md:h-full ">
        <MySkills />
      </div>

      <div className="w-5/6 mx-auto md:h-full ">
        <Skiils />
      </div>

      <div className="w-5/6 mx-auto ">
        <Projects />
      </div>

      <div className="w-5/6 mx-auto md:h-full ">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
