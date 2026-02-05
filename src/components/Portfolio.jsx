export default function Portfolio({ items}) {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-7xl px-6 pb-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">Projects</h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="portfolio-card">
            <div className="portfolio-thumb" />
            <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
              <span>{item.title}</span>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
