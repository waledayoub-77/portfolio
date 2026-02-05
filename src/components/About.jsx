export default function About({ profileImage }) {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 pb-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">About Me</h2>
        <p className="mt-2 text-base text-slate-400">
          User-focused engineering with modern stacks.
        </p>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="about-card flex items-center justify-center">
          <div className="about-photo">
            <img
              className="h-full w-full rounded-full object-cover"
              src={profileImage}
              alt="Walid Ayoub portrait"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-card">
          <p className="text-sm leading-6 text-slate-300">
            I am a full stack developer who builds web products with a balance of
            clean UI, scalable architecture, and real-world performance. I love
            collaborating with teams to ship products that feel seamless and
            reliable.
          </p>
          <a className="btn-primary mt-6" href="/Walid_Ayoub_CV.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
