import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const images = [
    "./src/assets/Hero1.jpeg",
    "./src/assets/Hero2.jpg",
    "./src/assets/Hero3.jpeg",
  ];

  const sliderImages = [...images, images[0]];

  const [currentImage, setCurrentImage] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImage === images.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrentImage(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 1000);
    }
  }, [currentImage]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${sliderImages.length * 100}%`,
          transform: `translateX(-${
            currentImage * (100 / sliderImages.length)
          }%)`,
          transition: transition
            ? "transform 1s ease-in-out"
            : "none",
        }}
      >
        {sliderImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ width: `${100 / sliderImages.length}%` }}
          />
        ))}
      </div>

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
            src="./src/assets/TmezLogoTransparent.png"
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