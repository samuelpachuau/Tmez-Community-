function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Contact Us
        </h2>

        <p className="text-slate-500 mb-10">
          Reach out for collaborations and community activities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <input
            type="text"
            placeholder="Your Name"
            className="px-6 py-4 rounded-2xl border border-sky-100 bg-sky-50 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-4 rounded-2xl border border-sky-100 bg-sky-50 outline-none"
          />
        </div>

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-6 py-4 rounded-2xl border border-sky-100 bg-sky-50 outline-none"
        />

        <button className="mt-8 bg-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-sky-600 transition">
          Send Message
        </button>
      </div>
    </section>
  )
}

export default Contact
