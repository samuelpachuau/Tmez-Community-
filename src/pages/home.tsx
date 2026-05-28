import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Memories from '../components/Memories'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import OfficeBearer from '../components/OB'

function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <OfficeBearer />
      <About />
      <Memories />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home