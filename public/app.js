const categories = [
  {
    id: "personal-career",
    name: "Personal / Career Proxies",
    description: "Pedigree, competence, positioning, and the signals attached to your trajectory.",
    proxies: [
      ["School name", "Intelligence, selectivity, access, pedigree"],
      ["Degree level", "Discipline, expertise, seriousness"],
      ["Field of study", "Technical depth, intellectual lane"],
      ["Past employers", "Quality bar, training, competence"],
      ["Job titles", "Status, scope, authority"],
      ["Promotions", "Trust, performance, internal validation"],
      ["Awards", "External recognition"],
      ["Fellowships", "Selectivity, promise, network access"],
      ["Publications", "Expertise, original thinking"],
      ["Speaking invitations", "Authority, reputation"],
      ["Media mentions", "Relevance, credibility"],
      ["Resume formatting", "Professionalism, taste, clarity"],
      ["LinkedIn bio", "Self-understanding, positioning"],
      ["Recommendations / references", "Social proof, trustworthiness"],
      ["Who vouches for you", "Borrowed credibility"],
      ["Who introduces you", "Network quality, social trust"],
      ["Who replies to you", "Perceived importance"],
      ["Who invites you into rooms", "Access, belonging, insider status"],
    ],
  },
  {
    id: "internet-public-presence",
    name: "Internet / Public Presence Proxies",
    description: "What strangers see online, and what your public surface says about relevance.",
    proxies: [
      ["Follower count", "Attention, relevance, distribution"],
      ["Follower quality", "Access, insider validation"],
      ["Who follows you", "Social proof, proximity to power"],
      ["Who engages with you", "Influence, credibility"],
      ["Retweets / reposts", "Resonance, reach"],
      ["Comments from known people", "Status transfer"],
      ["Newsletter subscribers", "Owned audience, trust"],
      ["Podcast appearances", "Authority, thought leadership"],
      ["YouTube views", "Reach, perceived demand"],
      ["Website quality", "Taste, seriousness, polish"],
      ["Personal domain", "Intentionality, professionalism"],
      ["Portfolio", "Proof of work"],
      ["Case studies", "Ability to create outcomes"],
      ["Writing quality", "Thinking quality, taste, clarity"],
      ["Posting consistency", "Discipline, conviction, presence"],
      ["Viral posts", "Memetic resonance"],
      ["Visual identity", "Taste, coherence"],
      ["Headshot quality", "Professionalism, confidence"],
      ["Bio language", "Narrative control, self-positioning"],
      ["Search results for your name", "Legibility, reputation"],
    ],
  },
  {
    id: "technical",
    name: "Technical Proxies",
    description: "Signals that you can build, ship, reason clearly, and earn technical trust.",
    proxies: [
      ["GitHub activity", "Building, consistency, technical seriousness"],
      ["Green contribution graph", "Momentum, discipline"],
      ["Stars on repos", "Usefulness, peer validation"],
      ["Open-source contributions", "Collaboration, technical credibility"],
      ["Pull requests merged", "Competence, trust from maintainers"],
      ["Programming languages listed", "Technical stack, fluency"],
      ["Personal projects", "Initiative, creativity"],
      ["Shipped demos", "Execution ability"],
      ["Hackathon wins", "Speed, talent, builder energy"],
      ["Technical blog posts", "Depth, communication ability"],
      ["Architecture diagrams", "Systems thinking"],
      ["Code quality", "Craft, rigor"],
      ["Developer tool usage", "Modernity, ecosystem fluency"],
      ["Product screenshots", "Execution, polish"],
      ["Live app link", "Ability to ship"],
      ["API docs", "Developer empathy, clarity"],
      ["Benchmarks", "Performance credibility"],
      ["Patents", "Novelty, defensibility"],
    ],
  },
  {
    id: "startup-founder",
    name: "Startup Founder Proxies",
    description: "The founder traits and story signals that make people believe in the company.",
    proxies: [
      ["Founder background", "Capability, pedigree, founder-market fit"],
      ["Previous exits", "Execution, value creation"],
      ["Previous startup experience", "Pattern recognition, resilience"],
      ["Big Tech background", "Quality bar, technical or operational training"],
      ["Elite lab background", "Frontier expertise"],
      ["Prior company brand", "Borrowed credibility"],
      ["Technical cofounder", "Ability to build"],
      ["Repeat founder status", "Experience, investor trust"],
      ["Young founder mythology", "Raw talent, ambition, upside"],
      ["Founder story", "Meaning, inevitability, narrative pull"],
      ["Founder-market fit", "Earned insight, proximity to problem"],
      ["Customer obsession", "Market seriousness"],
      ["Speed of iteration", "Learning velocity"],
      ["Ability to recruit", "Leadership, magnetism"],
      ["Ability to sell vision", "Fundraising and hiring power"],
      ["Taste", "Product judgment, brand judgment"],
      ["Charisma", "Narrative force, recruiting strength"],
      ["Conviction", "Durability, belief"],
      ["Weirdness", "Originality, non-consensus insight"],
    ],
  },
  {
    id: "fundraising-investor",
    name: "Fundraising / Investor Proxies",
    description: "Signals investors, the market, and insiders use to infer startup quality.",
    proxies: [
      ["Who led the round", "Institutional validation"],
      ["Which partner invested", "Specific insider conviction"],
      ["Cap table quality", "Access, network, status"],
      ["Round size", "Ambition, market excitement"],
      ["Valuation", "Perceived upside"],
      ["Speed of fundraise", "Demand, heat"],
      ["Oversubscription", "Scarcity, investor FOMO"],
      ["Investor logos", "Credibility, trust transfer"],
      ["Angel investors", "Network, operator validation"],
      ["Strategic investors", "Market relevance"],
      ["YC acceptance", "Selectivity, founder potential"],
      ["Demo Day buzz", "Momentum"],
      ["SAFE/post-money terms", "Market leverage"],
      ["Tier-one VC interest", "Perceived breakout potential"],
      ["Follow-on investors", "Continued belief"],
      ["Markups", "Momentum, perceived progress"],
      ["Bridge round quality", "Survival, insider support"],
      ["Down round", "Possible weakness or reset"],
      ["Insider participation", "Confidence from people closest to company"],
    ],
  },
  {
    id: "startup-traction",
    name: "Startup Traction Proxies",
    description: "The numbers and customer behaviors that prove demand is real.",
    proxies: [
      ["Revenue", "Customers value the product"],
      ["ARR", "Repeatable B2B demand"],
      ["MRR", "Recurring usage and retention"],
      ["Growth rate", "Market pull"],
      ["Logo customers", "Trust, enterprise credibility"],
      ["Pilot customers", "Early demand"],
      ["Paid pilots", "Stronger demand than free interest"],
      ["LOIs", "Interest, but weak commitment"],
      ["Waitlist size", "Demand, curiosity"],
      ["Usage metrics", "Engagement"],
      ["Retention", "Real value"],
      ["Net revenue retention", "Expansion, stickiness"],
      ["Churn", "Weakness or mismatch"],
      ["CAC", "Sales efficiency"],
      ["LTV", "Customer value"],
      ["Gross margin", "Business quality"],
      ["Sales cycle length", "Buying friction"],
      ["Pipeline", "Future revenue potential"],
      ["Conversion rate", "GTM effectiveness"],
      ["Referral rate", "Love, usefulness"],
      ["Case studies", "Proof of impact"],
      ["Testimonials", "Customer trust"],
      ["Community adoption", "Organic pull"],
      ["Developer adoption", "Ecosystem relevance"],
      ["Open-source stars", "Developer interest"],
      ["API calls", "Usage depth"],
      ["Daily active users", "Habit formation"],
      ["Time spent", "Engagement"],
      ["NPS", "Satisfaction"],
      ["Renewal rate", "Stickiness"],
      ["Expansion revenue", "Strategic importance"],
    ],
  },
  {
    id: "product-company",
    name: "Product / Company Proxies",
    description: "Signals that the product and company are thoughtful, trustworthy, and real.",
    proxies: [
      ["Product design quality", "Taste, care, user empathy"],
      ["Website copy", "Clarity, positioning"],
      ["Landing page polish", "Seriousness, credibility"],
      ["Demo quality", "Ability to show value"],
      ["Product speed", "Engineering quality"],
      ["Onboarding flow", "User empathy"],
      ["Pricing page", "Business maturity"],
      ["Security page", "Enterprise readiness"],
      ["Documentation", "Developer/customer trust"],
      ["Integrations", "Ecosystem fit"],
      ["Roadmap clarity", "Strategic thinking"],
      ["Public changelog", "Shipping cadence"],
      ["Customer support quality", "Operational maturity"],
      ["Brand identity", "Taste and coherence"],
      ["Category language", "Market creation ability"],
      ["Competitive positioning", "Strategic clarity"],
      ["Analyst mentions", "Market legitimacy"],
      ["Press coverage", "Relevance"],
      ["Launch quality", "Execution and coordination"],
    ],
  },
  {
    id: "social-network",
    name: "Social / Network Proxies",
    description: "Signals embedded in your social graph, access, and trust transfer.",
    proxies: [
      ["Who you know", "Access, proximity, trust"],
      ["Who knows you", "Reputation"],
      ["Who takes your calls", "Status, perceived value"],
      ["Who invites you to dinner", "Belonging, insider access"],
      ["Which group chats you’re in", "Social graph quality"],
      ["Which events you attend", "Ecosystem embeddedness"],
      ["Which events you’re invited to", "Insider status"],
      ["Who introduces you warmly", "Trust transfer"],
      ["Who publicly praises you", "Social validation"],
      ["Who privately recommends you", "Deeper trust"],
      ["Which rooms you can enter", "Access"],
      ["Which rooms you can influence", "Power"],
      ["Who asks your opinion", "Intellectual status"],
      ["Who copies your language", "Memetic influence"],
      ["Who wants to collaborate", "Perceived usefulness"],
      ["Who wants to hire you", "Market value"],
      ["Who wants you as a cofounder", "Trust, belief, perceived leverage"],
    ],
  },
  {
    id: "aesthetic-taste",
    name: "Aesthetic / Taste Proxies",
    description: "The design and aesthetic signals that imply care, judgment, and calibration.",
    proxies: [
      ["Website design", "Taste, seriousness"],
      ["Deck design", "Fundraising sophistication"],
      ["Typography", "Visual judgment"],
      ["Color palette", "Brand coherence"],
      ["Photography", "Polish, self-presentation"],
      ["Writing cadence", "Taste, confidence"],
      ["Naming", "Strategic abstraction ability"],
      ["Logo quality", "Brand maturity"],
      ["Slide quality", "Executive communication"],
      ["Visual hierarchy", "Clarity of thought"],
      ["Interface polish", "Product judgment"],
      ["Office/event aesthetic", "Cultural signal"],
      ["Clothing/style", "Self-awareness, belonging cues"],
      ["Social media visuals", "Taste, consistency"],
      ["Founder headshots", "Professional polish"],
      ["Brand system", "Maturity, intentionality"],
    ],
  },
  {
    id: "media-narrative",
    name: "Media / Narrative Proxies",
    description: "The story layer, how clearly it lands, and whether other people can repeat it.",
    proxies: [
      ["Press in respected outlets", "Legitimacy"],
      ["Podcast circuit", "Thought leadership"],
      ["Conference talks", "Authority"],
      ["Panels", "Peer recognition"],
      ["Keynotes", "High-status expertise"],
      ["Quotes in articles", "Expert status"],
      ["Book deals", "Intellectual authority"],
      ["Essays", "Depth of thought"],
      ["Manifestos", "Conviction, worldview"],
      ["Founder story", "Emotional resonance"],
      ["Origin story", "Inevitability"],
      ["Category narrative", "Market-shaping ability"],
      ["Memorable phrases", "Narrative control"],
      ["Clear thesis", "Strategic intelligence"],
      ["Contrarian but correct POV", "Originality"],
      ["Ability to explain simply", "Mastery"],
    ],
  },
  {
    id: "institutional",
    name: "Institutional Proxies",
    description: "Affiliations and institutional trust markers that transfer legitimacy.",
    proxies: [
      ["University affiliation", "Legitimacy, access"],
      ["Lab affiliation", "Research credibility"],
      ["Think tank affiliation", "Intellectual status"],
      ["Government grant", "Public validation"],
      ["Foundation funding", "Mission legitimacy"],
      ["Accelerator acceptance", "Selectivity"],
      ["Incubator membership", "Ecosystem access"],
      ["Board members", "Governance trust"],
      ["Advisors", "Borrowed expertise"],
      ["Partnerships", "Market validation"],
      ["Corporate pilots", "Enterprise relevance"],
      ["Certifications", "Compliance/readiness"],
      ["Awards programs", "External recognition"],
      ["Fellowships", "Talent recognition"],
      ["Residency programs", "Creative/intellectual validation"],
    ],
  },
];

const categoryContainer = document.querySelector("#categories");
const submitButton = document.querySelector("#submit-button");
const statusText = document.querySelector("#status");
const resultsPanel = document.querySelector("#results-panel");
const overviewText = document.querySelector("#overview-text");
const encouragementText = document.querySelector("#encouragement-text");
const focusList = document.querySelector("#focus-list");
const sourcesList = document.querySelector("#sources-list");
const fileInput = document.querySelector("#file-input");
const fileList = document.querySelector("#file-list");
const addSourceButton = document.querySelector("#add-source-button");
const addFileButton = document.querySelector("#add-file-button");
const checkAllButton = document.querySelector("#check-all-button");
const clearAllButton = document.querySelector("#clear-all-button");
const STORAGE_KEY = "clout-proxies-draft-v1";
const DEMO_RESULT = {
  overview:
    "Your strongest visible signals are thoughtful positioning, technical credibility, and clear personal narrative. The biggest opportunity is making those strengths easier for strangers to see faster.",
  encouragement:
    "You do not need to improve every proxy. The win is choosing the handful that matter for your life right now, then making those dramatically more legible.",
  focus: [
    {
      category: "Personal / Career Proxies",
      reason:
        "Your background may be stronger than your current presentation. Tighten your LinkedIn, resume framing, and public bio so the strongest signals are obvious.",
      nextStep:
        "Rewrite your top-line positioning and lead with the highest-trust proof first.",
    },
    {
      category: "Internet / Public Presence",
      reason:
        "Your public footprint should make people understand what you do within seconds. If your website or search results are thin, credibility leaks out there first.",
      nextStep:
        "Create a cleaner personal site, sharper bio, and one clear page of proof.",
    },
    {
      category: "Media / Narrative",
      reason:
        "If people cannot easily repeat your story, they will invent a weaker one. Strong narrative creates lift across everything else.",
      nextStep:
        "Write a simple thesis for who you are, what you are building, and why it matters now.",
    },
  ],
  source: "demo",
};
const SOURCE_TYPE_OPTIONS = [
  "Auto-detect",
  "LinkedIn",
  "Personal website",
  "Professional website",
  "Twitter / X",
  "YouTube",
  "Podcast",
  "Substack",
  "GitHub",
  "Portfolio",
  "Other",
];

let sourceRows = [];
let uploadedFiles = [];

renderCategories();
renderSources();
hydrateDraft();

submitButton.addEventListener("click", handleSubmit);
document.addEventListener("input", persistDraft);
addSourceButton.addEventListener("click", () => {
  sourceRows.push({ type: "Auto-detect", value: "" });
  renderSources();
  persistDraft();
});
addFileButton.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", handleFilesSelected);
checkAllButton.addEventListener("click", () => {
  for (const checkbox of document.querySelectorAll("[data-category-id]")) {
    checkbox.checked = true;
  }
  persistDraft();
});
clearAllButton.addEventListener("click", () => {
  for (const checkbox of document.querySelectorAll("[data-category-id]")) {
    checkbox.checked = false;
  }
  persistDraft();
});

function renderCategories() {
  categoryContainer.innerHTML = categories
    .map(
      (category) => `
        <label class="category-option">
          <input type="checkbox" data-category-id="${category.id}" />
          <span>${category.name}</span>
        </label>
      `,
    )
    .join("");
}

function renderSources() {
  if (sourceRows.length === 0) {
    sourcesList.innerHTML = `
      <div class="empty-state">
        Click the plus sign to add a link, profile, handle, podcast name, or source.
      </div>
    `;
    return;
  }

  sourcesList.innerHTML = sourceRows
    .map(
      (row, index) => `
        <div class="source-row">
          <select data-source-type="${index}">
            ${SOURCE_TYPE_OPTIONS.map(
              (option) => `
                <option value="${option}" ${row.type === option ? "selected" : ""}>${option}</option>
              `,
            ).join("")}
          </select>
          <input
            type="text"
            data-source-value="${index}"
            value="${escapeHtml(row.value)}"
            placeholder="Paste a URL, handle, podcast name, Substack, channel, etc."
          />
          <button class="remove-source-button" type="button" data-remove-source="${index}" aria-label="Remove source">
            <span aria-hidden="true">🗑</span>
          </button>
        </div>
      `,
    )
    .join("");

  for (const select of sourcesList.querySelectorAll("[data-source-type]")) {
    select.addEventListener("change", (event) => {
      const index = Number(event.currentTarget.dataset.sourceType);
      sourceRows[index].type = event.currentTarget.value;
      persistDraft();
    });
  }

  for (const input of sourcesList.querySelectorAll("[data-source-value]")) {
    input.addEventListener("input", (event) => {
      const index = Number(event.currentTarget.dataset.sourceValue);
      sourceRows[index].value = event.currentTarget.value;
      persistDraft();
    });
  }

  for (const button of sourcesList.querySelectorAll("[data-remove-source]")) {
    button.addEventListener("click", (event) => {
      const index = Number(event.currentTarget.dataset.removeSource);
      sourceRows.splice(index, 1);
      renderSources();
      persistDraft();
    });
  }
}

function handleFilesSelected(event) {
  const incoming = Array.from(event.target.files || [])
    .filter((file) => file.type === "application/pdf")
    .map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

  uploadedFiles = [...uploadedFiles, ...incoming];
  renderFiles();
  persistDraft();
  fileInput.value = "";
}

function renderFiles() {
  if (uploadedFiles.length === 0) {
    fileList.innerHTML = `
      <div class="empty-state">Optional: upload resume PDFs, portfolio PDFs, or other supporting documents.</div>
    `;
    return;
  }

  fileList.innerHTML = uploadedFiles
    .map(
      (file, index) => `
        <div class="file-chip">
          <div>
            <strong>${escapeHtml(file.name)}</strong>
            <span>${formatFileSize(file.size)}</span>
          </div>
          <button type="button" data-remove-file="${index}" aria-label="Remove file">
            <span aria-hidden="true">🗑</span>
          </button>
        </div>
      `,
    )
    .join("");

  for (const button of fileList.querySelectorAll("[data-remove-file]")) {
    button.addEventListener("click", (event) => {
      const index = Number(event.currentTarget.dataset.removeFile);
      uploadedFiles.splice(index, 1);
      renderFiles();
      persistDraft();
    });
  }
}

async function handleSubmit() {
  const email = document.querySelector("#email").value.trim();
  const context = document.querySelector("#context").value.trim();
  const selectedCategories = Array.from(
    document.querySelectorAll("[data-category-id]:checked"),
  ).map((checkbox) => checkbox.dataset.categoryId);
  const filledSources = sourceRows.filter((row) => row.value.trim());

  if (!email) {
    setStatus("Add your email address first.");
    return;
  }

  if (filledSources.length === 0 && uploadedFiles.length === 0 && !context) {
    setStatus("Add at least one link, PDF, or some context so the analysis has something to work from.");
    return;
  }

  setBusy(true);
  setStatus("Reviewing your sources and preparing your report...");

  try {
    let result;

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: { email },
          sources: {
            items: filledSources,
            context,
            uploadedFiles,
          },
          categories: categories.map((category) => ({
            categoryId: category.id,
            categoryName: category.name,
            proxyCount: category.proxies.length,
            selected: selectedCategories.includes(category.id),
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("The analysis request failed.");
      }

      result = await response.json();
    } catch {
      result = DEMO_RESULT;
    }

    renderResults(result);
    setStatus(
      result.source === "openai"
        ? "Analysis complete."
        : result.source === "demo"
          ? "Demo report loaded. Connect the backend later to generate live reports."
        : "Analysis complete. Running in local fallback mode until an OpenAI API key is configured.",
    );
  } catch (error) {
    setStatus(error.message || "Something went wrong during analysis.");
  } finally {
    setBusy(false);
  }
}

function renderResults(result) {
  overviewText.textContent = result.overview;
  encouragementText.textContent = result.encouragement;
  focusList.innerHTML = (result.focus || [])
    .map(
      (item) => `
        <article class="focus-card">
          <div class="focus-topline">${item.category}</div>
          <p>${item.reason}</p>
          <strong>${item.nextStep}</strong>
        </article>
      `,
    )
    .join("");

  resultsPanel.classList.remove("hidden");
  resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setBusy(isBusy) {
  submitButton.disabled = isBusy;
  submitButton.textContent = isBusy ? "Analyzing..." : "Analyze";
}

function setStatus(message) {
  statusText.textContent = message;
}

function persistDraft() {
  const draft = {
    identity: {
      email: document.querySelector("#email").value.trim(),
    },
    sources: {
      items: sourceRows,
      uploadedFiles,
      context: document.querySelector("#context").value,
    },
    selectedCategories: Array.from(document.querySelectorAll("[data-category-id]:checked")).map(
      (checkbox) => checkbox.dataset.categoryId,
    ),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

function hydrateDraft() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return;
  }

  try {
    const draft = JSON.parse(raw);
    document.querySelector("#email").value = draft.identity?.email || "";
    sourceRows = Array.isArray(draft.sources?.items) ? draft.sources.items : [];
    uploadedFiles = Array.isArray(draft.sources?.uploadedFiles) ? draft.sources.uploadedFiles : [];
    document.querySelector("#context").value = draft.sources?.context || "";
    renderSources();
    renderFiles();

    const selectedCategories = new Set(
      Array.isArray(draft.selectedCategories) ? draft.selectedCategories : [],
    );

    for (const checkbox of document.querySelectorAll("[data-category-id]")) {
      checkbox.checked = selectedCategories.has(checkbox.dataset.categoryId);
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatFileSize(size) {
  if (size < 1024 * 1024) {
    return `${Math.max(1, Math.round(size / 1024))} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
