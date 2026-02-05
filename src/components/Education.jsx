export default function Education({ education }) {
  return (
    <section id="education" className="mx-auto w-full max-w-7xl px-6 pb-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">Education</h2>
        <p className="mt-2 text-base text-slate-400">
          Academic background and core coursework.
        </p>
      </div>
      <div className="mt-8 grid gap-6">
        {education.map((item) => (
          <div key={item.degree} className="card">
            
            <h3 className="mt-4 text-lg font-semibold text-orange">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{item.school}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
