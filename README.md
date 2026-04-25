# Clout Proxies

Clout Proxies is an MVP web app for mapping status, credibility, and reputation
signals across 11 categories, then turning that self-assessment into practical,
encouraging guidance.

## What is in this starter

- A polished intake experience for name, email, category details, and self-rating
- Eleven starter categories that mirror the Clout Proxies framing
- A `POST /api/analyze` endpoint
- Dual-mode analysis:
  - local heuristic feedback by default
  - OpenAI-powered feedback when `OPENAI_API_KEY` is set

## Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Static Demo

The front end now includes a built-in example report so it can be published as a
static demo on GitHub Pages without the backend. In static mode, clicking
`Analyze` falls back to the demo report if `/api/analyze` is unavailable.

## Optional OpenAI setup

Set these environment variables before starting the server:

```bash
export OPENAI_API_KEY="your-key"
export OPENAI_MODEL="gpt-4.1-mini"
```

If no API key is present, the app still works using local fallback analysis.

## Good next steps

1. Replace the starter category examples with your full 200+ proxy list.
2. Add persistence for submissions, either SQLite, Postgres, or Supabase.
3. Add auth or magic-link login if you want users to revisit their profile.
4. Save LLM outputs so users can compare progress over time.
