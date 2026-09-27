# TechWorks Digital Learning Lab

**Code by Tee education ecosystem**

Learn. Create. Build What's Next.

## What is included

- Public TechWorks experience
- Programs and GameMakers Lab pilot
- Learning model and 12 design pillars
- Student, family, instructor and organization portal foundations
- Instructor lesson runner with SAY / DO / WATCH FOR and Plan B/C/D
- Student lessons, projects, portfolio, progress and opportunities
- Organization operations for programs, sites, enrollment, attendance, staff, meals, safety, partners and reports
- Vetted Tool Library
- Online / Offline Digital / Limited Connectivity / Unplugged delivery model
- Portfolio and opportunity pathways
- Partner network
- Production-oriented PostgreSQL/Supabase schema
- GitHub Actions production build check

## Stack

Next.js + TypeScript + Tailwind CSS + PostgreSQL/Supabase + Vercel + GitHub.

## Run locally

git fetch origin
git reset --hard origin/main
npm install
npm run dev

Open http://localhost:3000

## Production activation

The repository contains the application architecture and database schema. Real authentication, persistence, file storage, email, and deployment require connecting the project's external service credentials. Apply supabase/schema.sql to a Supabase project and provide only public client configuration to the browser.

## Product principle

Teach transferable technology concepts. Let the tool change. Keep learning moving regardless of connectivity.


## Instructor AI Coach

The instructor portal includes an AI Coach at `/instructor/troubleshooting` and inside the lesson runner.

The UI sends only the lesson context, selected coaching mode, tool/environment, and the instructor's question to `/api/instructor-ai`. The server keeps the provider API key private and applies Code by Tee instructional guardrails before calling the AI provider.

To enable live answers locally:

1. Copy `.env.example` to `.env.local`.
2. Add your server-side `OPENAI_API_KEY`.
3. Optionally set `OPENAI_MODEL`.
4. Restart `npm run dev`.

The current implementation is the foundation for a later curriculum knowledge-base/RAG layer. The next step is to connect approved Code by Tee lesson, troubleshooting, tool, accessibility, safety, and Plan B/C/D content so the coach can answer from the curriculum rather than relying only on the lesson context sent by the page.
