export default function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 pb-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">Skills</h2>
        <p className="mt-2 text-base text-slate-400">
          Core tools and technologies I use.
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill) => (
          <div key={skill.label} className="skill-card">
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.label} logo`} />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
