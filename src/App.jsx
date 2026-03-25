import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Works from './components/Works'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MouseTrail from './components/MouseTrail'

function App() {
  return (
    <>
      <MouseTrail />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
