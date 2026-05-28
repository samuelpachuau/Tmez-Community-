import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/TmezLogo.jpeg"
            alt="Community Logo"
            className="w-12 h-12 md:w-20 md:h-20 object-cover"
          />

          <h1 className="font-['IM_Fell_French_Canon'] text-2xl md:text-5xl font-bold text-sky-500">
            TMEZ
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="font-['Roboto_Slab'] flex flex-row items-center gap-8 text-sm font-medium text-slate-700">
            <li>
              <a href="#home" className="hover:text-sky-500 transition">
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="no-underline hover:text-sky-500 transition"
              >
                About Us
              </a>
            </li>

            <li>
              <a href="#memories" className="hover:text-sky-500 transition">
                Our Memories
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-sky-500 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-700 text-3xl transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden bg-white border-t border-sky-100 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="font-['Roboto_Slab'] flex flex-col items-center gap-6 py-6 text-sm font-medium text-slate-700">
          <li>
            <a
              href="#home"
              className="hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#memories"
              className="hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Our Memories
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
