import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Hamburger */}
      <button
        className="fixed top-6 right-6 z-50 bg-white shadow-lg rounded-full w-14 h-14 text-2xl "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Dropdown Menu */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white z-40 overflow-hidden transition-all duration-500 ${
          isOpen ? "h-[50vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="font-['Roboto_Slab'] flex flex-col justify-center items-center h-full gap-8">
          <li>
            <a
              href="#home"
              className="text-3xl font-semibold hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-3xl font-semibold hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#office-bearers"
              className="text-3xl font-semibold hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Office Bearers
            </a>
          </li>

          <li>
            <a
              href="#memories"
              className="text-3xl font-semibold hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Our Memories
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-3xl font-semibold hover:text-sky-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Connect With Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
