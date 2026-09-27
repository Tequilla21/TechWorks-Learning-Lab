import PublicPage from "@/components/PublicPage";

const features = [
  ["Instructor Training", "Prepare instructors with the technical knowledge and teaching context they need before class."],
  ["Learn Before Teaching", "Professional terminology, technical definitions, plain-language explanations, examples, and expected results."],
  ["Run This Lesson", "Exact steps, SAY / DO / WATCH FOR guidance, assessments, and recovery paths built into the lesson."],
  ["Instructor AI Coach", "Ask questions in the moment about concepts, errors, teaching language, or delivery constraints."],
  ["Plan A / B / C / D", "Keep the learning objective moving through connectivity, device, readiness, accessibility, or scheduling changes."],
  ["Differentiation", "Support new creators, developing builders, and advanced creators without labeling students as behind."],
];

export default function Educators() {
  return (
    <PublicPage
      eyebrow="Educators"
      title="You do not have to know everything before you teach technology."
      intro="TechWorks gives instructors preparation, technical definitions, scripts, activities, recovery paths, and an AI Coach for the questions that come up while teaching."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {features.map(([title, body]) => (
          <article key={title} className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 leading-7 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-3xl bg-[var(--ink)] p-7 text-white md:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Built for the real classroom</p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold">When something goes wrong, instructors can ask instead of guessing.</h2>
        <p className="mt-3 max-w-3xl leading-7 text-white/70">
          The Instructor AI Coach is designed around the Code by Tee teaching model. It helps instructors investigate what happened, explain the underlying concept, choose an appropriate recovery path, and keep students in control of their own work.
        </p>
        <a href="/login" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[var(--ink)]">
          Instructor Login
        </a>
      </section>
    </PublicPage>
  );
}
