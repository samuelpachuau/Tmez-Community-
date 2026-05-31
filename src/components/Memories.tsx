const memories = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
];

const duplicatedMemories = [...memories, ...memories];

function Memories() {
  return (
    <section
      id="memories"
      className="sticky top-0 z-30 py-20 bg-zinc-900 min-h-screen rounded-t-[40px] shadow-2xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "Humane", fontWeight: "bold" }}
            className="text-5xl sm:text-6xl md:text-7xl text-red-600"
          >
            Our Memories
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-scroll gap-6 sm:gap-8">

            {duplicatedMemories.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className="w-[220px] sm:w-[260px] md:w-[350px] h-[180px] sm:h-[220px] md:h-[400px] object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Memories;