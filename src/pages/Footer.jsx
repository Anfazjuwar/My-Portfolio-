import LineGradient from "../componets/LineGradient";
import SocialMediaicons from "../componets/SocialMediaicons";

const Footer = () => {
  return (
    <footer className="h-64 pt-10 ">
      <div className="w-5/6 mx-auto">
        <SocialMediaicons />
        <LineGradient />

        <div className="flex justify-center mt-4 text-center">
          <p className="text-2xl font-semibold font-playfair text-yellow">
            Designed and Built By{" "}
            <span className="text-red">Muhammdh Anfaz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
