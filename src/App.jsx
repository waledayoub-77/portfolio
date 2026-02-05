import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profileImage from './assets/profile-square.jpg'
import { education, portfolio, skills, stats} from './data/content'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Skills from './components/Skills'

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIdByPath = {'/': 'home','/education': 'education','/about': 'about','/portfolio': 'portfolio','/contact': 'contact',}
    const sectionId = sectionIdByPath[location.pathname]
    const target = sectionId ? document.getElementById(sectionId) : null

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

    return (
      <div className="min-h-screen bg-obsidian text-slate-100 font-body">
        <Header />

        <main>
          <Hero profileImage={profileImage} stats={stats} />
          <Education education={education} />
          <About profileImage={profileImage} />
          <Skills skills={skills} />
          <Portfolio items={portfolio} />
          <Contact />
        </main>

        <Footer />
        <Link
          className={`back-to-top ${showBackToTop ? '' : 'back-to-top-hidden'}`}
          to="/"
          aria-label="Back to top"
        >
          ↑
        </Link>
      </div>
    )
  }
