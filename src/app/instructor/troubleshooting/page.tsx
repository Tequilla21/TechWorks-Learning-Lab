"use client";

import PortalShell from "@/components/PortalShell";
import InstructorAICoach from "@/components/InstructorAICoach";

const scenarios = [
  ["Student says nothing happened", "Start with expected vs. actual behavior. Ask the student to describe what they expected, then test one step at a time."],
  ["Tool will not open", "Check device state, saved work, permissions, and connectivity. Move to the approved offline or recovery path when needed."],
  ["Project changed unexpectedly", "Pause before editing. Identify the last known working state and isolate the change instead of rebuilding everything."],
  ["Internet went down", "Keep the learning objective. Move to the offline-digital or unplugged pathway instead of treating connectivity as the end of the lesson."],
  ["Student is stuck", "Ask what they already tried, what they expected, and what they observed. Give a hint before giving an answer."],
  ["Group conflict", "Protect student agency and community norms. Re-establish roles, ask before helping, and use the collaboration recovery path."],
];

export default function Troubleshooting() {
  return (
    <PortalShell role="instructor" title="Troubleshooting Center">
      <div className="mb-6 rounded-2xl border bg-white p-5">
        <p className="text-sm font-bold text-[var(--green)]">DIAGNOSE → TEST → RECOVER → LEARN</p>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">
          Use the documented recovery paths first. When you need clarification, ask the Instructor AI Coach. It is designed to help you investigate the problem without taking the project away from the student.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {scenarios.map(([title, body]) => (
          <article key={title} className="rounded-2xl border bg-white p-6">
            <h2 className="font-bold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
            <button
              type="button"
              onClick={() => document.getElementById("ai-coach")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-4 text-sm font-bold text-[var(--blue)] hover:underline"
            >
              Ask AI Coach about this →
            </button>
          </article>
        ))}
      </div>

      <div id="ai-coach" className="mt-8 scroll-mt-6">
        <InstructorAICoach
          lesson="Troubleshooting Center"
          concept="Observation, debugging, controlled testing, recovery paths, and student agency"
          tool="Current lesson tool"
        />
      </div>
    </PortalShell>
  );
}
