import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const images = [
    "./src/assets/Hero1.jpeg",
    "./src/assets/Hero2.jpg",
    "./src/assets/Hero3.jpeg",
  ];

  // Duplicate first image for seamless infinite slide
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
    // When reaching duplicated image
    if (currentImage === images.length) {
      setTimeout(() => {
        // Disable transition and instantly reset
        setTransition(false);
        setCurrentImage(0);

        // Re-enable transition
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
        <div className="flex items-center justify-center gap-8">
          <h1 className="text-xl md:text-6xl font-bold leading-tight mb-6 w-[900px] h-[140px]">
            <Typewriter
              words={["Tirunelveli Mizo Engineering Zirlai"]}
              loop={1}
              cursor={false}
              typeSpeed={70}
            />
          </h1>

          <img
            src="./src/assets/TmezLogoTransparent.png"
            className="w-40 md:w-56"
          />
        </div>

        <p className="text-lg md:text-xl text-sky-100 mb-10 leading-relaxed">
          "Toward Success with God"
        </p>
      </div>
    </section>
  );
}

export default Hero;