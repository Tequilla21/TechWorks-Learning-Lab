import PortalShell from "@/components/PortalShell";
import InstructorAICoach from "@/components/InstructorAICoach";

export default function Instructor() {
  return (
    <PortalShell role="instructor" title="Instructor Dashboard">
      <div className="grid gap-4 md:grid-cols-4">
        {["Cohort", "18 students", "Day 4", "3 need attention"].map((x) => (
          <div key={x} className="rounded-2xl border bg-white p-5 font-bold">{x}</div>
        ))}
      </div>

      <a href="/instructor/lesson-runner" className="mt-6 block rounded-2xl bg-[var(--ink)] p-7 text-white">
        <p className="text-sm text-[var(--gold)]">NEXT LESSON</p>
        <h2 className="mt-2 text-2xl font-bold">Run Day 4: Make It Work</h2>
        <p className="mt-2 text-white/70">Preparation, technical learning, exact steps and recovery paths.</p>
      </a>

      <div className="mt-6">
        <InstructorAICoach
          lesson="Day 4: Make It Work"
          concept="Algorithms, sequencing, pseudocode, and debugging"
          tool="MakeCode Arcade"
        />
      </div>
    </PortalShell>
  );
}
