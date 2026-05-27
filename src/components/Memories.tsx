const memories = [
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
]

function Memories() {
  return (
    <section id="memories" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Memories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={image}
                className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Memories