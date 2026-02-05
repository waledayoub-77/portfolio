import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-obsidian/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <img className="logo-img logo-img-header" src={logo} alt="Logo" />
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link className="hover:text-white" to="/">
            Home
          </Link>
          <Link className="hover:text-white" to="/education">
            Education
          </Link>
          <Link className="hover:text-white" to="/about">
            About me
          </Link>
          <Link className="hover:text-white" to="/portfolio">
            Portfolio
          </Link>
          <Link className="hover:text-white" to="/contact">
            Contact me
          </Link>
        </nav>
        <Link className="hidden rounded-md bg-orange px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 md:inline-flex" to="/contact">
         Get In Touch
        </Link>
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700/60 p-2 text-slate-200 transition hover:bg-slate-800/40 md:hidden"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className={`h-5 w-5 ${isOpen ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg className={`h-5 w-5 ${isOpen ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className={`border-t border-slate-800/60 bg-obsidian/95 px-6 pb-5 pt-3 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col gap-4 text-sm text-slate-300">
          <Link className="hover:text-white" to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="hover:text-white" to="/education" onClick={closeMenu}>
            Education
          </Link>
          <Link className="hover:text-white" to="/about" onClick={closeMenu}>
            About me
          </Link>
          <Link className="hover:text-white" to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link className="hover:text-white" to="/contact" onClick={closeMenu}>
            Contact me
          </Link>
          <Link
            className="mt-2 inline-flex w-fit rounded-md bg-orange px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
            to="/contact"
            onClick={closeMenu}
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
