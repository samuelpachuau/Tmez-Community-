function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24"
    >
      <img
        src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2000&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-6 text-white max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Beautiful Community
        </h1>

        <p className="text-lg md:text-xl text-sky-100 mb-10 leading-relaxed">
          A modern platform where students connect and create unforgettable
          memories together.
        </p>

        <button className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
