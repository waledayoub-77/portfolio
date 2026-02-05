import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
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
      </div>
    </header>
  )
}
