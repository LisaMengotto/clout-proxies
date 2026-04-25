import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "127.0.0.1";
const PUBLIC_DIR = join(process.cwd(), "public");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const CATEGORY_LABELS = {
  "personal-career": "Personal / Career Proxies",
  "internet-public-presence": "Internet / Public Presence Proxies",
  technical: "Technical Proxies",
  "startup-founder": "Startup Founder Proxies",
  "fundraising-investor": "Fundraising / Investor Proxies",
  "startup-traction": "Startup Traction Proxies",
  "product-company": "Product / Company Proxies",
  "social-network": "Social / Network Proxies",
  "aesthetic-taste": "Aesthetic / Taste Proxies",
  "media-narrative": "Media / Narrative Proxies",
  institutional: "Institutional Proxies",
};

const RATING_LABELS = {
  bad: "Needs work",
  good: "Solid",
  great: "Strong",
};

const RATING_SCORES = {
  bad: 1,
  good: 2,
  great: 3,
};

createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/analyze") {
      const payload = await readJson(request);
      const result = await buildAdvice(payload);
      return sendJson(response, 200, result);
    }

    if (request.method === "GET") {
      return serveStatic(request.url || "/", response);
    }

    sendJson(response, 405, { error: "Method not allowed." });
  } catch (error) {
    console.error(error);
    sendJson(response, 500, {
      error: "Something went wrong while processing the request.",
    });
  }
}).listen(PORT, HOST, () => {
  console.log(`Clout Proxies is running at http://${HOST}:${PORT}`);
});

async function readJson(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function serveStatic(url, response) {
  const requestedPath = url === "/" ? "/index.html" : url;
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const fullPath = join(PUBLIC_DIR, safePath);

  try {
    const contents = await readFile(fullPath);
    const extension = extname(fullPath);
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[extension] || "application/octet-stream",
    });
    response.end(contents);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

async function buildAdvice(payload) {
  const profile = normalizeProfile(payload);

  if (process.env.OPENAI_API_KEY) {
    try {
      const llmAdvice = await getLlmAdvice(profile);
      return {
        ...llmAdvice,
        source: "openai",
      };
    } catch (error) {
      console.warn("Falling back to local analysis:", error.message);
    }
  }

  return {
    ...getHeuristicAdvice(profile),
    source: "heuristic",
  };
}

function normalizeProfile(payload) {
  const identity = payload.identity || {};
  const entries = Array.isArray(payload.entries) ? payload.entries : [];
  const categories = Array.isArray(payload.categories) ? payload.categories : [];
  const sources = payload.sources || {};

  return {
    identity: {
      email: String(identity.email || "").trim(),
    },
    sources: {
      items: Array.isArray(sources.items)
        ? sources.items
            .filter((item) => item && item.value)
            .map((item) => ({
              type: String(item.type || "Auto-detect").trim(),
              value: String(item.value || "").trim(),
            }))
        : [],
      uploadedFiles: Array.isArray(sources.uploadedFiles)
        ? sources.uploadedFiles.map((file) => ({
            name: String(file.name || "").trim(),
            size: Number(file.size || 0),
            type: String(file.type || "").trim(),
          }))
        : [],
      context: String(sources.context || "").trim(),
    },
    categories: categories
      .filter((category) => category && category.categoryId && category.selected !== false)
      .map((category) => ({
        categoryId: category.categoryId,
        categoryName:
          category.categoryName || CATEGORY_LABELS[category.categoryId] || category.categoryId,
        proxyCount: Number(category.proxyCount || 0),
      })),
    entries: entries
      .filter((entry) => entry && entry.categoryId)
      .map((entry) => ({
        categoryId: entry.categoryId,
        categoryName: CATEGORY_LABELS[entry.categoryId] || entry.categoryId,
        rating: entry.rating || "good",
        details: String(entry.details || "").trim(),
      })),
  };
}

function getHeuristicAdvice(profile) {
  const availableSources = profile.sources.items;
  const uploadedFiles = profile.sources.uploadedFiles;
  const contextProvided = Boolean(profile.sources.context);
  const focus = profile.categories.slice(0, 3).map((category, index) => {
    const priorityReasons = [
      "This is one of the first places people infer competence, legitimacy, and signal density from a public footprint.",
      "This area often has visible gaps even when the underlying substance is real, which makes it a high-leverage report section.",
      "Improving this category tends to compound because it influences how other signals are interpreted.",
    ];

    return {
      category: category.categoryName,
      reason: priorityReasons[index] || priorityReasons[0],
      nextStep: buildNextStep(category.categoryId),
    };
  });

  const overview = availableSources.length
    ? `We found ${availableSources.length} source${availableSources.length === 1 ? "" : "s"}${uploadedFiles.length ? ` and ${uploadedFiles.length} PDF${uploadedFiles.length === 1 ? "" : "s"}` : ""} to review. That is enough to generate a first-pass credibility report and identify the biggest visible gaps.`
    : uploadedFiles.length
      ? `We found ${uploadedFiles.length} PDF${uploadedFiles.length === 1 ? "" : "s"} to review. That is enough to generate a first-pass credibility report, especially once document parsing is wired in.`
      : "You have the report flow in place. Add at least one source so the analysis can generate something more concrete.";

  const encouragement = contextProvided
    ? "The extra context helps. The best reports usually come from combining public signals with the outcome you actually care about."
    : "This first version is strongest as a credibility audit. Once the backend starts pulling LinkedIn, websites, social profiles, and resumes automatically, the report will get much sharper.";

  return {
    overview,
    encouragement,
    focus,
  };
}

function buildNextStep(categoryId) {
  const nextSteps = {
    "personal-career":
      "Tighten the strongest resume and career signals first, then add the missing proof that turns background into trust.",
    "internet-public-presence":
      "Sharpen the public surface area, especially your site, bio, search results, and proof-of-work links.",
    technical:
      "Show receipts that you build, ship, and think clearly. Live demos and code proof usually punch above resumes.",
    "startup-founder":
      "Clarify the founder story, founder-market fit, and the traits that make people believe you can bend reality here.",
    "fundraising-investor":
      "Highlight the strongest investor-quality signals only if they are real. A clean cap table story beats spray-on prestige.",
    "startup-traction":
      "Lead with traction that proves value, retention, and pull. Concrete customer behavior beats vanity metrics.",
    "product-company":
      "Upgrade the product surface so strangers instantly feel competence, clarity, and seriousness.",
    "social-network":
      "Make the strongest trust-transfer relationships legible. Warmth and access matter when they are specific.",
    "aesthetic-taste":
      "Raise the presentation layer. Better taste signals can amplify the exact same underlying substance.",
    "media-narrative":
      "Refine the story people can repeat about you. A sharp thesis plus memorable language compounds over time.",
    institutional:
      "Surface the institutions, affiliations, and partnerships that add real legitimacy without feeling padded.",
  };

  return nextSteps[categoryId] || "Add one specific proof point and one next milestone.";
}

async function getLlmAdvice(profile) {
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const prompt = [
    "You are an encouraging strategic advisor.",
    "The product is Clout Proxies, a self-assessment about reputation, status signals, and credibility.",
    "Write concise, supportive advice.",
    "Return JSON with keys: overview, encouragement, focus.",
    "focus must be an array of up to 3 objects with keys: category, reason, nextStep.",
    "Prioritize what the user should improve next, not every possible idea.",
    "",
    `Name: ${profile.identity.name || "Unknown"}`,
    `Email: ${profile.identity.email || "Unknown"}`,
    "Entries:",
    JSON.stringify(profile.entries, null, 2),
  ].join("\n");

  const llmResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: prompt,
      text: {
        format: {
          type: "json_schema",
          name: "clout_proxies_feedback",
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["overview", "encouragement", "focus"],
            properties: {
              overview: { type: "string" },
              encouragement: { type: "string" },
              focus: {
                type: "array",
                maxItems: 3,
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["category", "reason", "nextStep"],
                  properties: {
                    category: { type: "string" },
                    reason: { type: "string" },
                    nextStep: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    }),
  });

  if (!llmResponse.ok) {
    throw new Error(`OpenAI request failed with ${llmResponse.status}`);
  }

  const data = await llmResponse.json();
  const outputText = data.output_text;

  if (!outputText) {
    throw new Error("OpenAI response did not include output_text.");
  }

  return JSON.parse(outputText);
}
