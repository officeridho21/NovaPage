import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import QuickCards from './components/QuickCards'
import Services from './components/Services'
import Why from './components/Why'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: reduce,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <QuickCards />
        <Services />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
