const programs = [
  { title: "GameMakers Lab", text: "Build interactive games while learning transferable programming concepts.", tag: "Pilot" },
  { title: "WebMakers", text: "Create websites and learn how the web actually works.", tag: "Coming next" },
  { title: "CyberMakers", text: "Practice digital safety, security thinking, and controlled security labs.", tag: "Planned" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--border)] bg-[var(--warm)]/95 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold tracking-tight text-xl">TechWorks<span className="text-[var(--green)]">.</span></a>
          <nav className="hidden gap-6 text-sm md:flex"><a href="#programs">Programs</a><a href="#approach">Learning Approach</a><a href="#community">Community</a><a href="#about">About</a></nav>
          <a href="/login" className="rounded-[10px] bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white">Log in</a>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1 text-sm">A Code by Tee education experience</div>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">Technology is something you can create.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">Project-based technology learning that helps students learn concepts, build real things, and keep learning whether they are online, offline, or somewhere in between.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="/programs" className="rounded-[10px] bg-[var(--green)] px-5 py-3 font-semibold text-white">Explore programs</a><a href="/learning" className="rounded-[10px] border border-[var(--border)] bg-white px-5 py-3 font-semibold">How it works</a></div>
        </div>
        <div className="rounded-3xl bg-[var(--ink)] p-7 text-white shadow-sm"><p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">Built for real programs</p><h2 className="mt-3 text-3xl font-semibold">Learn. Create. Build What’s Next.</h2><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white/10 p-4"><b>Project-based</b><p className="mt-1 text-sm text-white/70">Students make, test, revise, and share.</p></div><div className="rounded-2xl bg-white/10 p-4"><b>Offline-first</b><p className="mt-1 text-sm text-white/70">Learning continues without reliable internet.</p></div><div className="rounded-2xl bg-white/10 p-4"><b>Instructor-ready</b><p className="mt-1 text-sm text-white/70">Clear lesson paths support nontechnical instructors.</p></div><div className="rounded-2xl bg-white/10 p-4"><b>Student-centered</b><p className="mt-1 text-sm text-white/70">Voice, agency, accessibility, and belonging matter.</p></div></div></div>
      </section>
      <section id="programs" className="border-y border-[var(--border)] bg-white"><div className="mx-auto max-w-6xl px-6 py-16"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--green)]">Programs</p><h2 className="mt-2 text-3xl font-bold">More than coding lessons.</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{programs.map((p)=><article key={p.title} className="rounded-2xl border border-[var(--border)] p-6"><span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{p.tag}</span><h3 className="mt-2 text-xl font-semibold">{p.title}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{p.text}</p></article>)}</div></div></section>
      <section id="approach" className="mx-auto max-w-6xl px-6 py-16"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">Learning approach</p><h2 className="mt-2 text-3xl font-bold">Teach the concept. Let the tool change.</h2><p className="mt-4 leading-8 text-[var(--muted)]">The learning model focuses on transferable technology concepts first, then maps those concepts to age-appropriate tools and projects. That makes learning portable across devices, software, and program sites.</p></div><div className="rounded-2xl bg-[var(--gray)] p-6"><div className="grid gap-4 sm:grid-cols-2"><div><h3 className="font-semibold">Online</h3><p className="mt-1 text-sm text-[var(--muted)]">Full digital creation and collaboration.</p></div><div><h3 className="font-semibold">Offline digital</h3><p className="mt-1 text-sm text-[var(--muted)]">Create real digital artifacts without internet.</p></div><div><h3 className="font-semibold">Limited connectivity</h3><p className="mt-1 text-sm text-[var(--muted)]">Download, work locally, sync later.</p></div><div><h3 className="font-semibold">Unplugged</h3><p className="mt-1 text-sm text-[var(--muted)]">Practice the underlying concepts without a device.</p></div></div></div></div></section>
      <section id="community" className="bg-[var(--ink)] text-white"><div className="mx-auto max-w-6xl px-6 py-16"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Community</p><h2 className="mt-2 text-3xl font-bold">Built for the whole learning community.</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{["Students","Families","Instructors","Organizations"].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-5"><h3 className="font-semibold">{x}</h3><p className="mt-2 text-sm text-white/70">A role-specific experience designed around what this person needs to do.</p></div>)}</div></div></section>
      <footer id="about" className="border-t border-[var(--border)]"><div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[var(--muted)]">© Code by Tee · TechWorks Digital Learning Lab</div></footer>
    </main>
  );
}
