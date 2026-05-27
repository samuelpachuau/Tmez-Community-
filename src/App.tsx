import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Memories from './components/Memories'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Memories />
      <Contact />
      <Footer />
    </div>
  )
}

export default App