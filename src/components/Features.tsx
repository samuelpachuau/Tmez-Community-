const features = [
  {
    title: 'Events',
    description: 'Stay updated with student events and activities.',
  },
  {
    title: 'Connections',
    description: 'Connect with students from different departments.',
  },
  {
    title: 'Memories',
    description: 'Share photos and relive unforgettable moments.',
  },
]

function Features() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Features
          </h2>

          <p className="text-slate-500 text-lg">
            Everything your community needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg border border-sky-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center font-bold text-xl mb-6">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                {feature.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
