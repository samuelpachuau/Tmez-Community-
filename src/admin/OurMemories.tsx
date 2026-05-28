function OurMemories() {

  const memoryImages = [
    "./src/assets/Hero1.jpeg",
    "./src/assets/Hero2.jpeg",
    "./src/assets/Hero3.jpeg",
  ];

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Our Memories
            </h1>

            <p className="text-slate-500 mt-2">
              Manage gallery images and memories.
            </p>

          </div>

          <button className="bg-sky-500 text-white px-6 py-3 rounded-2xl hover:bg-sky-600 transition duration-300">
            + Upload Memory
          </button>

        </div>

      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {memoryImages.map((image, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100"
            >

              {/* Image */}
              <img
                src={image}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Memory {index + 1}
                </h2>

                <p className="text-slate-500 mb-6">
                  Community memory gallery image.
                </p>

                <div className="flex gap-4">

                  <button className="flex-1 bg-sky-500 text-white py-3 rounded-2xl hover:bg-sky-600 transition duration-300">
                    Replace
                  </button>

                  <button className="flex-1 bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600 transition duration-300">
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>

  );
}

export default OurMemories;