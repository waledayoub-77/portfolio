import { Link } from 'react-router-dom'

export default function Hero({ profileImage, stats }) {
  return (
    <section id="home" className="mx-auto w-full max-w-7xl px-6 pb-20 pt-16">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-base text-slate-400">Hi, I am</p>
          <h1 className="mt-2 font-display text-5xl text-white md:text-6xl">
            Walid Ayoub
          </h1>
          <p className="mt-4 text-3xl font-semibold text-orange">
            Full Stack Developer
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-400">
            <a className="circle-icon inline-flex items-center justify-center" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z" />
              </svg>
            </a>
            <a className="circle-icon inline-flex items-center justify-center" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.3c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.4.1-3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.7.1 3 1.1.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <a className="circle-icon inline-flex items-center justify-center" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2.5A2.5 2.5 0 0 0 4.5 7v10A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 17 4.5H7zm11 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
              </svg>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-outline" href="/Walid_Ayoub_CV.pdf" download>Download CV</a>
          </div>
          <div className="mt-8 grid gap-4 panel p-4 text-center text-sm text-slate-300 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold text-orange">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="hero-ring">
            <div className="hero-avatar">
              <img className="h-full w-full rounded-full object-cover" src={profileImage}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
