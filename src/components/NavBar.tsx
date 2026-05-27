function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <h1 className="text-2xl font-bold text-sky-500">Community.</h1>

        <nav>
          <ul className="flex flex-row items-center gap-8 text-sm font-medium text-slate-700">
            <li>
              <a href="#home" className="hover:text-sky-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-sky-500 transition">
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