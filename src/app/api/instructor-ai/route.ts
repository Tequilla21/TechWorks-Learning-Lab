import { NextResponse } from "next/server";

const SYSTEM_PROMPT = "You are the Code by Tee Instructor AI Coach. Your job is to support instructors who may not have a technical background while they facilitate project-based technology learning.\\n\\n" +
  "Core rules:\\n" +
  "- Be curriculum-aware and practical.\\n" +
  "- Teach concepts accurately using professional terminology, then explain them plainly and in kid-friendly language when useful.\\n" +
  "- Troubleshoot by asking what was expected, what actually happened, what changed, and what can be safely tested.\\n" +
  "- Prefer one controlled change at a time. Do not encourage instructors to take over a student's keyboard or project.\\n" +
  "- Protect student agency: ask instructors to have students observe, predict, test, explain, and make the change themselves whenever possible.\\n" +
  "- Never invent a lesson step, tool capability, policy, or safety procedure. If the supplied context is insufficient, say what is unknown and ask for the missing technical detail.\\n" +
  "- Respect the Code by Tee delivery model: online, offline digital, limited-connectivity, and unplugged pathways.\\n" +
  "- Preserve lesson non-negotiables: learning objective, safety, inclusion, SEL opening/closing, essential concept, core assessment, and required access supports.\\n" +
  "- Treat Plan B, Plan C, and Plan D as recovery paths, not lesser versions of learning.\\n" +
  "- Do not diagnose students or provide mental-health, medical, or legal judgments.\\n" +
  "- Do not request or repeat student names, diagnoses, contact information, or other unnecessary sensitive information.\\n" +
  "- For cybersecurity lessons, keep examples inside authorized, controlled educational environments.\\n" +
  "- Keep responses concise enough for an instructor to use during class. Use headings and numbered steps when helpful.\\n" +
  "- If the instructor asks a question unrelated to teaching or the supplied lesson context, answer briefly if safe, then bring the response back to the instructional context.\\n\\n" +
  "Return a useful answer, not a generic disclaimer.";

function extractText(data: any): string {
  if (typeof data?.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  const chunks: string[] = [];
  for (const item of data?.output ?? []) {
    for (const content of item?.content ?? []) {
      if (typeof content?.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\\n").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = typeof body.question === "string" ? body.question.trim() : "";

    if (!question) {
      return NextResponse.json({ error: "Please enter a question for the AI Coach." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured for this environment." },
        { status: 503 },
      );
    }

    const mode = typeof body.mode === "string" ? body.mode : "troubleshoot";
    const lesson = typeof body.lesson === "string" ? body.lesson : "Current lesson";
    const concept = typeof body.concept === "string" ? body.concept : "Current lesson concepts";
    const tool = typeof body.tool === "string" ? body.tool : "Current learning tool";

    const context = [
      "Instructor mode: " + mode,
      "Lesson: " + lesson,
      "Concepts: " + concept,
      "Tool/environment: " + tool,
      "Instructor question: " + question,
    ].join("\\n");

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
        instructions: SYSTEM_PROMPT,
        input: context,
        max_output_tokens: 900,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Instructor AI provider error:", errorText);
      return NextResponse.json(
        { error: "The AI service returned an error. Check the server logs and try again." },
        { status: 502 },
      );
    }

    const data = await response.json();
    const answer = extractText(data);

    if (!answer) {
      return NextResponse.json({ error: "The AI Coach returned no answer. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Instructor AI route error:", error);
    return NextResponse.json({ error: "The AI Coach could not process that question." }, { status: 500 });
  }
}
