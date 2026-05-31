import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/TmezLogoTransparent.png";

function Hero() {
  return (
    <section
      id="home"
     className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[50%_center]"
      >
        <source src="/Basketball.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 text-white max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <h1
            style={{ fontFamily: "Humane", fontWeight: "bold" }}
            className="text-4xl sm:text-5xl md:text-8xl leading-tight w-full md:w-[900px]"
          >
            <Typewriter
              words={["Tirunelveli Mizo Engineering Zirlai"]}
              loop={1}
              cursor={false}
              typeSpeed={70}
            />
          </h1>

          <img
            src={logo}
            alt="TMEZ Logo"
            className="w-20 sm:w-28 md:w-56"
          />
        </div>

        <p
          style={{ fontFamily: "Tempting" }}
          className="mt-4 text-base sm:text-lg md:text-xl text-sky-100 leading-relaxed"
        >
          "Towards Success with God"
        </p>
      </div>
    </section>
  );
}

export default Hero;