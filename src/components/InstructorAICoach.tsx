"use client";

import { FormEvent, useMemo, useState } from "react";

type CoachMode = "troubleshoot" | "explain" | "teach" | "adapt";

const modeCopy: Record<CoachMode, { label: string; description: string; prompt: string }> = {
  troubleshoot: {
    label: "Troubleshoot",
    description: "Diagnose the problem before changing the project.",
    prompt: "My student's project is not behaving the way we expected. Help me troubleshoot it step by step.",
  },
  explain: {
    label: "Explain this",
    description: "Get a professional, plain-language, and student-friendly explanation.",
    prompt: "Explain the key concept from this lesson in professional, plain-language, and kid-friendly terms.",
  },
  teach: {
    label: "How do I teach this?",
    description: "Turn the concept into something you can confidently say and do.",
    prompt: "I understand the concept, but I need help explaining and teaching it to my students.",
  },
  adapt: {
    label: "Adapt the lesson",
    description: "Adjust pacing or delivery while protecting the learning objective.",
    prompt: "We are running into a delivery constraint. Help me adapt today's lesson without losing the essential learning objective.",
  },
};

export default function InstructorAICoach({
  lesson = "Day 4: Make It Work",
  concept = "Algorithms, sequencing, pseudocode, and debugging",
  tool = "MakeCode Arcade",
}: {
  lesson?: string;
  concept?: string;
  tool?: string;
}) {
  const [mode, setMode] = useState<CoachMode>("troubleshoot");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const contextLabel = useMemo(() => lesson + " · " + tool, [lesson, tool]);

  async function askCoach(event?: FormEvent) {
    event?.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setStatus("");
    setAnswer("");

    try {
      const response = await fetch("/api/instructor-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          question: trimmed,
          lesson,
          concept,
          tool,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "The AI Coach could not answer right now.");
      }

      setAnswer(data.answer);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The AI Coach could not answer right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="bg-[var(--ink)] p-6 text-white md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Instructor AI Coach</p>
            <h2 className="mt-2 text-2xl font-bold">Ask the question you need answered.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              A curriculum-aware assistant that helps you understand, troubleshoot, teach, and adapt without taking control away from the student.
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80">
            {contextLabel}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-7">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(modeCopy) as CoachMode[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setMode(key)}
              className={
                "rounded-2xl border p-4 text-left transition " +
                (mode === key
                  ? "border-[var(--blue)] bg-blue-50 ring-2 ring-[var(--blue)]/20"
                  : "border-[var(--border)] hover:bg-[var(--gray)]")
              }
            >
              <span className="text-sm font-bold">{modeCopy[key].label}</span>
              <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{modeCopy[key].description}</span>
            </button>
          ))}
        </div>

        <form onSubmit={askCoach} className="mt-5">
          <label htmlFor="instructor-ai-question" className="text-sm font-bold">
            What do you need help with?
          </label>
          <textarea
            id="instructor-ai-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder={modeCopy[mode].prompt}
            rows={5}
            className="mt-2 w-full resize-y rounded-2xl border border-[var(--border)] bg-[var(--warm)] p-4 text-sm outline-none focus:border-[var(--blue)]"
          />
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[var(--muted)]">
              Avoid entering student names, diagnoses, contact information, or other sensitive personal information.
            </p>
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="rounded-xl bg-[var(--blue)] px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Thinking…" : "Ask AI Coach"}
            </button>
          </div>
        </form>

        <div className="mt-5 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--gray)] p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Try a question</p>
          <button
            type="button"
            onClick={() => setQuestion("A student's character is not doing what we expected. What should I have them check first?")}
            className="mt-2 text-left text-sm font-semibold hover:underline"
          >
            “A student's character is not doing what we expected. What should I have them check first?”
          </button>
        </div>

        {status && (
          <div className="mt-5 rounded-2xl border border-[var(--coral)]/40 bg-[var(--coral)]/10 p-4 text-sm leading-6">
            <p className="font-bold">AI Coach setup needed</p>
            <p className="mt-1 text-[var(--muted)]">{status}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              The interface is ready. Connect the server-side AI key in your deployment environment to enable live answers.
            </p>
          </div>
        )}

        {answer && (
          <div className="mt-5 rounded-2xl border border-[var(--green)]/30 bg-[var(--green)]/5 p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold">AI Coach</p>
              <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--green)]">
                Lesson aligned
              </span>
            </div>
            <div className="mt-4 whitespace-pre-wrap text-sm leading-7">{answer}</div>
          </div>
        )}
      </div>
    </section>
  );
}
