import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Memories from "../components/Memories";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OfficeBearer from "../components/OB";

function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* Card stack wrapper */}
      <div className="relative [overflow-x:clip]">
        <div className="sticky top-0 z-0 min-h-screen">
          <Hero />
        </div>
        <About />
        <OfficeBearer />
        <Memories />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;