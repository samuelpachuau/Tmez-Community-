import { FaInstagram, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="sticky top-0 z-40 min-h-screen bg-slate-900 text-white rounded-t-[40px] shadow-2xl py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Connect With Us
        </h2>

        <p className="text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
          Stay connected with TMEZ through our social media platforms.
          Follow our latest events, activities,
          and community updates.
        </p>

        <div className="flex justify-center items-center gap-10 md:gap-16">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/tmez_family/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaInstagram className="text-6xl md:text-8xl transition duration-300 group-hover:scale-110" />
            <p className="mt-4 text-lg text-slate-300">
              Instagram
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@TMEZfamily"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaYoutube className="text-6xl md:text-8xl transition duration-300 group-hover:scale-110" />
            <p className="mt-4 text-lg text-slate-300">
              YouTube
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;