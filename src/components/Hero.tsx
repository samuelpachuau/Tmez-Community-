import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/TmezLogoTransparent.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Basketball.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 text-white max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <h1 className="text-xl md:text-6xl font-bold leading-tight mb-6 w-full md:w-[900px] h-auto md:h-[140px]">
            <Typewriter
              words={["Tirunelveli Mizo Engineering Zirlai"]}
              loop={1}
              cursor={false}
              typeSpeed={70}
            />
          </h1>

          <img
            src={logo}
            className="w-24 md:w-56"
            alt="TMEZ Logo"
          />
        </div>

        <p className="text-lg md:text-xl text-sky-100 mb-10 leading-relaxed">
          "Towards Success with God"
        </p>
      </div>
    </section>
  );
}

export default Hero;