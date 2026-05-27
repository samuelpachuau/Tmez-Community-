function Navbar() {
  return (
    <header className="relative top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/TmezLogo.jpeg"
            alt="Community Logo"
            className="w-20 h-20 object-cover"
          />

          <h1 className="font-['IM_Fell_French_Canon'] text-5xl text-2xl font-bold text-sky-500">
            TMEZ
          </h1>
        </div>

        <nav>
          <ul className="font-['Roboto_Slab'] flex flex-row items-center gap-8 text-sm font-medium text-slate-700">
            <li>
              <a href="#home" className="hover:text-sky-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="no-underline hover:text-sky-500 transition">
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
      </div>
    </header>
  )
}

export default Navbar