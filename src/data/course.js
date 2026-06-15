export const course = {
  title: "AI-Native Productivity & Automation Bootcamp",
  tagline: "Google AI Studio • OpenCode • GitHub • Google Stitch • Gemma 4",
  duration: "5 Days",
  format: "Offline",
  structure: "2 Days AI Productivity + 3 Days AI Automation & Decision Support",
  goal:
    "Equip participants with modern AI productivity, AI-native development workflows, agent-ready repositories, prototyping, automation, offline AI deployment, and AI-assisted decision support.",
  stack: [
    { name: "GitHub", slug: "github", desc: "Portfolio, Documentation, Version Control" },
    { name: "Google AI Studio", slug: "googleaistudio", desc: "Prompting and AI Productivity" },
    { name: "OpenCode", slug: "opencode", desc: "AI-assisted Development" },
    { name: "Google Stitch", slug: "googlestitch", desc: "AI-powered Prototyping" },
    { name: "Gemma 4 Open Models", slug: "gemma", desc: "Lightweight, on-device LLMs" },
    { name: "Ollama", slug: "ollama", desc: "Local LLM runtime" },
    { name: "Google Sheets", slug: "googlesheets", desc: "Spreadsheet data analysis" },
    { name: "Google Slides", slug: "googleslides", desc: "Presentations & storytelling" },
  ],
  organizer: {
    name: "Department of Information and Communications Technology",
    shortName: "DICT",
    country: "Philippines",
    url: "https://dict.gov.ph/",
    sealSlug: "dict",
  },
  facilitator: {
    name: "Mark Joseph J. Solidarios",
    role: "Bootcamp Facilitator",
    github: "https://github.com/mjsolidarios",
    org: "https://github.com/dict-ai-productivity-automation",
  },
};

export const days = [
  {
    id: "day-1",
    number: 1,
    title: "AI Productivity Foundations",
    theme: "day1",
    color: "day1",
    summary:
      "Build the responsible-AI mindset, set up an AI-native GitHub repo, and master prompt engineering fundamentals.",
    modules: [
      {
        id: "m1",
        number: 1,
        title: "Responsible AI & Model Awareness",
        timebox: "90 min",
        topics: [
          "Generative AI fundamentals",
          "Hallucinations: what they are and how to spot them",
          "Bias, privacy, and security",
          "Model limitations and human oversight",
        ],
        activity:
          "Run the same prompt through Gemini, Gemma 4, and an Open Model. Compare tone, accuracy, and hallucinations.",
        deliverable: "model-comparison.md",
        challenge: null,
        example:
          "Compare how Gemini, Gemma 4 (via Ollama), and an Open Model each respond to: 'Summarise the EU AI Act in 5 bullets and cite the articles.' Notice differences in recency, citation behaviour, and refusal style.",
        steps: [
          "Open Google AI Studio and pick Gemini 2.0 Flash.",
          "Install Ollama and pull `gemma4:2b` (see Setup).",
          "Pick one Open Model such as `llama3.2:3b` from the Ollama library.",
          "Send the SAME prompt to all three. Copy each response into a markdown table.",
          "Score each response on: Accuracy, Brevity, Hallucinations, Citations, Refusals.",
        ],
        comparisonModels: [
          { name: "Gemini 2.0 Flash", where: "Google AI Studio (cloud)", size: "—", cost: "Free tier", notes: "Default for the bootcamp." },
          { name: "Gemma 4 2B", where: "Ollama (local)", size: "2B params", cost: "Free, runs on a laptop", notes: "Used for offline work on Day 4." },
          { name: "Llama 3.2 3B", where: "Ollama (local)", size: "3B params", cost: "Free, needs ~4GB RAM", notes: "Example Open Model." },
        ],
        comparisonCriteria: [
          { name: "Accuracy", help: "Are the facts correct against a trusted source?" },
          { name: "Brevity", help: "Is the response the right length?" },
          { name: "Hallucinations", help: "Any invented facts, URLs, or citations?" },
          { name: "Citations", help: "Did the model cite real sources?" },
          { name: "Refusals", help: "Did it refuse appropriately when it should?" },
        ],
        tool: "modelComparison",
      },
      {
        id: "m2",
        number: 2,
        title: "AI-Native Repository Setup",
        timebox: "120 min",
        topics: [
          "GitHub workflows: branches, PRs, issues",
          "Repository organization for AI agents",
          "AI-assisted development with OpenCode",
          "Agent-ready files: README, AGENTS, TASKS, PROMPTS",
        ],
        activity:
          "Scaffold a repository with README.md, AGENTS.md, TASKS.md, and PROMPTS.md.",
        deliverable: "Bootcamp repository with 4 root markdown files",
        challenge: null,
        example: "",
        steps: [
          "Create a new GitHub repo named `ai-bootcamp-<your-name>`.",
          "Add a README.md describing yourself and the bootcamp goals.",
          "Add AGENTS.md describing how an AI agent should behave in this repo (tone, tools, constraints).",
          "Add TASKS.md with a checklist of the 14 modules.",
          "Add PROMPTS.md to collect every prompt you used during the bootcamp.",
        ],
      },
      {
        id: "m3",
        number: 3,
        title: "Prompt Engineering Fundamentals",
        timebox: "120 min",
        topics: [
          "The RTCF framework: Role, Task, Context, Format",
          "Constraints and negative prompts",
          "Iterative refinement",
          "Reusable prompt libraries",
        ],
        activity: "Prompt Battle: defend your prompt against a rival team.",
        deliverable: "PROMPTS.md library with 5+ reusable prompts",
        challenge: "Prompt Battle",
        example:
          "Role: You are a senior policy analyst. Task: Summarise the attached memo. Context: Audience is non-technical executives. Format: 3 bullets, max 25 words each, plus one risk callout.",
        steps: [
          "Pick a real task (summarise an article, draft an email, write a test).",
          "Write a raw prompt. Then rewrite it using RTCF.",
          "Run both versions and diff the outputs.",
          "Save the best version to PROMPTS.md with a one-line use case.",
          "In the battle, swap prompts with another team and try to 'break' each other.",
        ],
      },
    ],
  },
  {
    id: "day-2",
    number: 2,
    title: "Digital Productivity Sprint",
    theme: "day2",
    color: "day2",
    summary:
      "Turn AI into a force multiplier for documents, data analysis, and rapid prototyping.",
    modules: [
      {
        id: "m4",
        number: 4,
        title: "AI-Assisted Documents",
        timebox: "120 min",
        topics: [
          "Memo, report, and meeting summary templates",
          "Action plan generation from transcripts",
          "Tone and audience control",
        ],
        activity: "Generate four document types from a single source transcript.",
        deliverable: "One of each: memo, report, meeting summary, action plan",
        challenge: "Model Comparison Arena",
        example: "",
        steps: [
          "Pick a 1-page source (article, transcript, or report).",
          "Generate a 100-word memo aimed at leadership.",
          "Generate a 500-word report with sections: Background, Findings, Recommendations.",
          "Generate a meeting summary with attendees, decisions, action items.",
          "Generate an action plan table: Task, Owner, Due Date, Status.",
        ],
      },
      {
        id: "m5",
        number: 5,
        title: "Data Detective Challenge",
        timebox: "120 min",
        topics: [
          "Quick stats in Google Sheets (COUNTIF, AVERAGE, FILTER)",
          "Asking the right questions of a dataset",
          "Verifying AI-generated insights against source data",
        ],
        activity: "Analyse a sample dataset using Sheets + Gemini + Open Models.",
        deliverable: "findings.md with claims and verifications",
        challenge: "Hallucination Hunt",
        example: "",
        steps: [
          "Open the bootcamp sample dataset (sales, support tickets, or survey).",
          "Ask Gemini for 5 insights. Write them down verbatim.",
          "Verify each insight against the raw data with Sheets formulas.",
          "Mark any insight that doesn't match as a 'hallucination'.",
          "Repeat with an Ollama Gemma 4 model and compare.",
        ],
      },
      {
        id: "m6",
        number: 6,
        title: "AI Prototype Design with Google Stitch",
        timebox: "120 min",
        topics: [
          "Prompt-to-prototype workflow",
          "Designing for desktop, mobile, and dashboards",
          "Capturing requirements as machine-readable specs",
        ],
        activity: "Generate 3 screens from a written requirements doc.",
        deliverable: "requirements.md, stitch-prompts.md, screenshots",
        challenge: "Prompt-to-Prototype",
        example: "",
        steps: [
          "Write requirements.md with user stories and acceptance criteria.",
          "Convert each story into a Stitch prompt (subject, layout, components).",
          "Generate 3 screens: dashboard, mobile, workflow.",
          "Export screenshots into a /prototype folder.",
          "Iterate prompts until the design matches the spec.",
        ],
      },
    ],
  },
  {
    id: "day-3",
    number: 3,
    title: "AI Decision Support",
    theme: "day3",
    color: "day3",
    summary:
      "Move from content generation to structured decision support: summaries, matrices, and project plans.",
    modules: [
      {
        id: "m7",
        number: 7,
        title: "Executive Summary Sprint",
        timebox: "90 min",
        topics: [
          "One-page executive summary structure",
          "Compressing long policy and report documents",
          "Meeting transcript distillation",
        ],
        activity: "Summarise a 10-page report into a 1-page brief.",
        deliverable: "executive-brief.md",
        challenge: null,
        example: "",
        steps: [
          "Pick a 10-page report (publicly available policy or annual report).",
          "Ask the model for: TL;DR (3 lines), Key Findings (5), Risks (3), Recommendations (3).",
          "Rewrite the brief in your own words.",
          "Verify every claim against the source PDF.",
        ],
      },
      {
        id: "m8",
        number: 8,
        title: "Decision Matrix Challenge",
        timebox: "120 min",
        topics: [
          "SWOT analysis generation",
          "Risk matrices (likelihood × impact)",
          "Defending recommendations with evidence",
        ],
        activity: "Generate a SWOT, risk matrix, and 3-option recommendation for a real scenario.",
        deliverable: "decision-pack.md with SWOT + risk matrix + recommendation",
        challenge: null,
        example: "",
        steps: [
          "Pick a real decision (e.g. 'Should we adopt Ollama for offline AI?').",
          "Generate a SWOT using RTCF.",
          "Build a 5x5 risk matrix (likelihood × impact) for the top 5 risks.",
          "Compare 3 options with criteria scoring (1-5) and weighted totals.",
          "Defend your recommendation in a 2-minute pitch.",
        ],
        tool: "swotRisk",
      },
      {
        id: "m9",
        number: 9,
        title: "Agent Planning Workshop",
        timebox: "90 min",
        topics: [
          "Decomposing projects into agent-ready tasks",
          "TASKS.md as a contract with an AI agent",
          "Backlog grooming and acceptance criteria",
        ],
        activity: "Turn a project idea into a TASKS.md backlog an AI agent could execute.",
        deliverable: "TASKS.md with 15+ actionable tasks",
        challenge: null,
        example: "",
        steps: [
          "Pick the offline app you'll build on Day 4 (Meeting Summariser, FAQ Assistant, etc.).",
          "Brainstorm 15+ tasks across: setup, data, model, UI, testing, docs.",
          "For each task write: title, description, acceptance criteria, dependencies.",
          "Hand TASKS.md to OpenCode and ask it to plan the next 3 tasks.",
        ],
        tool: "tasksBuilder",
      },
    ],
  },
  {
    id: "day-4",
    number: 4,
    title: "Edge AI, Automation & Offline Intelligence",
    theme: "day4",
    color: "day4",
    summary:
      "Take AI off the cloud. Run Gemma 4 locally with Ollama, build offline apps, and design automated workflows.",
    modules: [
      {
        id: "m10",
        number: 10,
        title: "Offline AI Deployment Lab",
        timebox: "120 min",
        topics: [
          "Installing Ollama on macOS, Linux, Windows",
          "Pulling and running Gemma 4",
          "Configuring OpenCode to use a local model",
          "Verifying local inference (latency, tokens/s)",
        ],
        activity: "Get a working local Gemma 4 + OpenCode pipeline.",
        deliverable: "Working `ollama run gemma4:2b` and OpenCode config",
        challenge: null,
        example: "",
        steps: [
          "Install Ollama from ollama.com.",
          "Run `ollama pull gemma4:2b` (or `gemma4:4b` if your machine supports it).",
          "Run `ollama run gemma4:2b \"Hello\"` to confirm it works.",
          "In OpenCode, point the model provider to the local Ollama endpoint.",
          "Ask OpenCode to refactor a small file using only the local model.",
        ],
      },
      {
        id: "m11",
        number: 11,
        title: "Disconnected Intelligence Challenge",
        timebox: "90 min",
        topics: [
          "What works (and breaks) without internet",
          "Prompting strategies for smaller local models",
          "Latency vs quality trade-offs",
        ],
        activity: "Disconnect from the internet. Complete 5 AI tasks completely offline.",
        deliverable: "offline-challenges.md with 5 task outputs",
        challenge: null,
        example: "",
        steps: [
          "Disable Wi-Fi (or use a tool like `pfctl` / firewall rules).",
          "Task 1: Summarise a local PDF.",
          "Task 2: Write unit tests for a local file.",
          "Task 3: Draft a client email from bullet points.",
          "Task 4: Generate a JSON config from a description.",
          "Task 5: Translate a paragraph to another language.",
          "Re-enable Wi-Fi and reflect on what was different.",
        ],
      },
      {
        id: "m12",
        number: 12,
        title: "Offline AI App Development",
        timebox: "180 min",
        topics: [
          "App architecture for offline AI",
          "Picking a UI: CLI, TUI, web, desktop",
          "Wiring Ollama into a small program",
        ],
        activity: "Build one of: Meeting Summariser, FAQ Assistant, Feedback Analyzer, Policy Analyzer.",
        deliverable: "README.md, AGENTS.md, TASKS.md, working source code",
        challenge: null,
        example: "",
        steps: [
          "Pick ONE of the four app options.",
          "Sketch the input → model → output flow.",
          "Wire up Ollama using its HTTP API or the official SDK.",
          "Add a minimal UI (CLI is fine).",
          "Write README + AGENTS + TASKS for your project.",
        ],
        tool: "appPicker",
      },
      {
        id: "m13",
        number: 13,
        title: "Automation Flow-Off",
        timebox: "90 min",
        topics: [
          "Designing AI-assisted workflows end-to-end",
          "Risk classification: informational, advisory, autonomous",
          "Governance: human-in-the-loop, audit logs, rollback",
        ],
        activity: "Design an automated workflow with explicit risk and governance analysis.",
        deliverable: "flow-diagram.png + flow-spec.md",
        challenge: null,
        example: "",
        steps: [
          "Pick a workflow (e.g. 'Auto-triage incoming student feedback').",
          "Draw the flow: trigger → AI step → decision → action.",
          "For each AI step, classify risk (Low/Med/High).",
          "For High-risk steps, add a human-in-the-loop checkpoint.",
          "Document rollback and audit logging.",
        ],
      },
    ],
  },
  {
    id: "day-5",
    number: 5,
    title: "AI Transformation Capstone",
    theme: "day5",
    color: "day5",
    summary:
      "Pitch a real-world AI solution. The Shark Tank – AI Edition is the final exam.",
    modules: [
      {
        id: "m14",
        number: 14,
        title: "Shark Tank – AI Edition",
        timebox: "Full day",
        topics: [
          "Mapping a real-world process",
          "Designing an AI solution with clear ROI",
          "Prototyping with Google Stitch",
          "Offline AI as a fallback / differentiator",
          "Risk, governance, and model selection",
        ],
        activity: "Teams pitch an AI solution for a real organisation.",
        deliverable:
          "Pitch deck + Capstone repository (see structure below) + live demo",
        challenge: "Capstone",
        example: "",
        steps: [
          "Pick a real organisation (your team, a partner, a public agency).",
          "Map the Current Process (swimlane or numbered steps).",
          "Design the AI Solution: input, model, output, integration points.",
          "Build a Google Stitch prototype of the user-facing screens.",
          "Show an Offline AI option (Ollama + Gemma 4 fallback).",
          "Build a simple ROI model: time saved × hourly cost × volume.",
          "Complete the Risk Assessment and Governance Controls tables.",
          "Justify the Model Selection (cloud vs local, size, latency, cost).",
        ],
      },
    ],
  },
];

export const assessment = [
  { day: 1, label: "Day 1 Challenges", weight: 15 },
  { day: 2, label: "Day 2 Challenges", weight: 15 },
  { day: 3, label: "Day 3 Challenges", weight: 20 },
  { day: 4, label: "Day 4 Offline AI & Automation", weight: 20 },
  { day: 5, label: "Day 5 Shark Tank Capstone", weight: 30 },
];

export const league = [
  { rank: "Bronze", title: "Prompt Apprentice" },
  { rank: "Silver", title: "AI Analyst" },
  { rank: "Gold", title: "Workflow Builder" },
  { rank: "Platinum", title: "AI Strategist" },
  { rank: "Diamond", title: "Responsible AI Champion" },
];

export const responsibleAI = [
  "Verify AI-generated outputs",
  "Identify hallucinations",
  "Protect sensitive information",
  "Disclose AI assistance",
  "Apply human review",
  "Document model limitations and risks",
];

export const setupSteps = [
  {
    id: "github",
    title: "Create a GitHub account",
    time: "5 min",
    description:
      "You will use GitHub as your portfolio, version control, and the canonical home for every deliverable in this bootcamp.",
    commands: [
      {
        label: "Sign up",
        code: "Open https://github.com/signup and complete the form.",
      },
      {
        label: "Verify your email",
        code: "Click the link in the verification email GitHub sends you.",
      },
      {
        label: "Enable 2FA",
        code: "Settings → Password and authentication → Enable two-factor authentication.",
      },
    ],
    tip: "Use a professional username — this is your portfolio for the next 5 days.",
  },
  {
    id: "git",
    title: "Install Git",
    time: "5 min",
    description: "Git is the version control system behind every GitHub repo.",
    commands: [
      { label: "macOS", code: "brew install git\n# or: xcode-select --install (ships a Git CLI)" },
      { label: "Ubuntu / Debian", code: "sudo apt-get update && sudo apt-get install -y git" },
      { label: "Fedora / RHEL / CentOS", code: "sudo dnf install -y git" },
      { label: "Arch / Manjaro", code: "sudo pacman -S git" },
      { label: "Windows (winget)", code: "winget install --id Git.Git -e --source winget" },
      { label: "Windows (choco)", code: "choco install git -y" },
    ],
    tip: "Verify on any platform with `git --version`.",
  },
  {
    id: "node",
    title: "Install Node.js 20+ (LTS)",
    time: "5 min",
    description:
      "Node powers the OpenCode CLI, the local web prototype, and any app you build on Day 4.",
    commands: [
      { label: "macOS / Linux (nvm recommended)", code: "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n# restart your shell, then:\nnvm install --lts\nnvm use --lts" },
      { label: "Ubuntu / Debian (apt)", code: "curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt-get install -y nodejs" },
      { label: "Fedora / RHEL (dnf)", code: "sudo dnf module enable nodejs:20 -y\nsudo dnf install -y nodejs" },
      { label: "Windows (winget)", code: "winget install OpenJS.NodeJS.LTS" },
      { label: "Windows (nvm-windows, recommended)", code: "# Download and run nvm-setup.exe from https://github.com/coreybutler/nvm-windows\n# Then in a new PowerShell:\nnvm install lts\nnvm use lts" },
    ],
    tip: "Verify with `node --version` (should print v20.x or higher).",
  },
  {
    id: "ollama",
    title: "Install Ollama + pull Gemma 4",
    time: "10 min",
    description:
      "Ollama is the local model runtime used on Day 4 for fully offline AI tasks.",
    commands: [
      { label: "macOS", code: "brew install ollama\n# or download the .dmg from https://ollama.com/download" },
      { label: "Linux", code: "curl -fsSL https://ollama.com/install.sh | sh" },
      { label: "Windows (PowerShell)", code: "winget install Ollama.Ollama\n# or download OllamaSetup.exe from https://ollama.com/download" },
      { label: "Start the Ollama service", code: "# macOS / Linux\nollama serve\n\n# Windows — Ollama runs as a background service after install,\n# so you can usually skip this. Run it manually if needed:\nollama serve" },
      { label: "Pull Gemma 4 (2B)", code: "ollama pull gemma4:2b" },
      { label: "Pull Gemma 4 (4B) — optional, needs ~8GB RAM", code: "ollama pull gemma4:4b" },
      { label: "Smoke test (all platforms)", code: 'ollama run gemma4:2b "Explain what a hallucination is in 2 sentences."' },
    ],
    tip: "If `ollama serve` says port 11434 is busy, another instance is already running — that's fine.",
  },
  {
    id: "opencode",
    title: "Install OpenCode CLI",
    time: "10 min",
    description:
      "OpenCode is the AI-assisted development tool used throughout the bootcamp. It can talk to Gemini in the cloud or to a local Ollama model.",
    commands: [
      { label: "macOS / Linux", code: "curl -fsSL https://opencode.ai/install | bash" },
      { label: "Windows (PowerShell)", code: "irm https://opencode.ai/install.ps1 | iex" },
      { label: "Verify", code: "opencode --version" },
    ],
    tip: "On first run, OpenCode will ask you to pick a model provider. Pick Google AI Studio (free tier) for cloud work and Ollama for offline work.",
  },
  {
    id: "aistudio",
    title: "Set up Google AI Studio",
    time: "5 min",
    description:
      "Google AI Studio gives you free access to Gemini for prompting, comparison, and document generation.",
    commands: [
      {
        label: "Sign in",
        code: "Open https://aistudio.google.com/ with your Google account.",
      },
      {
        label: "Create an API key",
        code: "Settings → API keys → Create API key. Copy it somewhere safe.",
      },
      {
        label: "Test in your shell",
        code: `export GOOGLE_API_KEY="YOUR_KEY"
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$GOOGLE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Say hi in 3 words."}]}]}'`,
      },
    ],
    tip: "Never commit your API key. Use environment variables or a `.env` file in `.gitignore`.",
  },
  {
    id: "stitch",
    title: "Access Google Stitch",
    time: "5 min",
    description:
      "Stitch is the AI-powered prototyping tool used on Day 2 (Module 6) and Day 5 (Capstone).",
    commands: [
      {
        label: "Open Stitch",
        code: "Visit https://stitch.withgoogle.com/ and sign in with the same Google account you used for AI Studio.",
      },
      {
        label: "Try a starter prompt",
        code: 'Prompt: "A minimal dashboard for a community college admissions team, with a sidebar nav, a stats row, and a recent applications table."',
      },
    ],
    tip: "Export every screen you generate as a PNG — they go into your `/prototype` folder.",
  },
  {
    id: "sheets-slides",
    title: "Sheets & Slides access",
    time: "2 min",
    description: "Used on Day 2 for data detective work and on Day 5 for the Shark Tank pitch deck.",
    commands: [
      {
        label: "Open",
        code: "https://sheets.new  →  creates a fresh spreadsheet.\nhttps://slides.new   →  creates a fresh deck.",
      },
    ],
    tip: "Bookmark both — you'll use them every day.",
  },
];

export const prereqSkills = [
  {
    level: "Comfortable",
    skills: [
      "Using a terminal / command line (cd, ls, mkdir, cat)",
      "Editing text files (any editor is fine)",
      "Basic Git commands: clone, add, commit, push, pull",
      "Browsing the web and installing apps",
    ],
  },
  {
    level: "Helpful (not required)",
    skills: [
      "Reading or writing JavaScript / TypeScript",
      "Reading or writing Python",
      "Using a code editor like VS Code",
      "Having a portfolio or side-project you want to modernise",
    ],
  },
  {
    level: "We will teach you",
    skills: [
      "Prompt engineering with Gemini, Gemma 4, and Open Models",
      "AI-native repo structure (README, AGENTS, TASKS, PROMPTS)",
      "Local model serving with Ollama",
      "Designing AI-assisted workflows with risk and governance",
      "Prototyping with Google Stitch",
    ],
  },
];

export const repoStructure = `
.
├── README.md
├── AGENTS.md
├── TASKS.md
├── PROMPTS.md
├── prototype/
├── app/
├── docs/
└── presentation/
`;

export const capstoneStructure = `
Capstone/
├── README.md
├── AGENTS.md
├── TASKS.md
├── PROMPTS.md
├── proposal/
├── prototype/
├── app/
├── docs/
└── presentation/
`;

export const schedule = [
  { day: 1, block: "Welcome & goals", minutes: 15 },
  { day: 1, block: "Module 1 — Responsible AI & Model Awareness", minutes: 60 },
  { day: 1, block: "Module 2 — AI-Native Repository Setup", minutes: 90 },
  { day: 1, block: "Module 3 — Prompt Engineering Fundamentals", minutes: 90 },
  { day: 1, block: "Prompt Battle challenge", minutes: 45 },
  { day: 1, block: "Day 1 reflection + close", minutes: 30 },
  { day: 2, block: "Recap & Module 4 — AI-Assisted Documents", minutes: 90 },
  { day: 2, block: "Module 5 — Data Detective Challenge", minutes: 90 },
  { day: 2, block: "Lunch", minutes: 60 },
  { day: 2, block: "Module 6 — AI Prototype Design with Stitch", minutes: 120 },
  { day: 2, block: "Prompt-to-Prototype challenge", minutes: 60 },
  { day: 3, block: "Recap & Module 7 — Executive Summary Sprint", minutes: 60 },
  { day: 3, block: "Module 8 — Decision Matrix Challenge", minutes: 120 },
  { day: 3, block: "Module 9 — Agent Planning Workshop", minutes: 60 },
  { day: 3, block: "Hallucination Hunt debrief", minutes: 45 },
  { day: 4, block: "Module 10 — Offline AI Deployment Lab", minutes: 90 },
  { day: 4, block: "Module 11 — Disconnected Intelligence Challenge", minutes: 60 },
  { day: 4, block: "Module 12 — Offline AI App Development", minutes: 180 },
  { day: 4, block: "Module 13 — Automation Flow-Off", minutes: 60 },
  { day: 5, block: "Capstone kickoff (Shark Tank briefs)", minutes: 60 },
  { day: 5, block: "Team build time", minutes: 240 },
  { day: 5, block: "Rehearsals", minutes: 60 },
  { day: 5, block: "Shark Tank pitches", minutes: 120 },
  { day: 5, block: "Awards, reflection, close", minutes: 45 },
];

export const appIdeas = [
  {
    id: "meeting-summariser",
    name: "Meeting Summariser",
    blurb: "Paste a meeting transcript → get a 1-paragraph summary, decisions, and action items.",
    difficulty: "Beginner",
    dataExample: "Free transcripts: https://github.com/meeting-summariser-demo (sample.txt)",
    hint: "Use Ollama's HTTP API: POST to /api/generate with `prompt`. Wrap input/output in a tiny Node or Python script.",
  },
  {
    id: "faq-assistant",
    name: "FAQ Assistant",
    blurb: "Type a question → retrieve the best-matching FAQ entry from a local file and answer it.",
    difficulty: "Beginner → Intermediate",
    dataExample: "Use any org's public FAQ page, save as faqs.json (Q + A pairs).",
    hint: "Implement keyword or embedding-based retrieval. Gemma 4 2B handles small RAG loops well.",
  },
  {
    id: "feedback-analyzer",
    name: "Student Feedback Analyzer",
    blurb: "Paste a CSV of survey responses → get themes, sentiment, and the top 3 improvement actions.",
    difficulty: "Intermediate",
    dataExample: "Generate a fake dataset with 30–50 rows of: name, score, free_text.",
    hint: "Loop over the rows, batch prompts in groups of 5–10 to keep local inference fast.",
  },
  {
    id: "policy-analyzer",
    name: "Policy Analyzer",
    blurb: "Upload a policy PDF → ask plain-English questions and get cited answers.",
    difficulty: "Advanced",
    dataExample: "Use a public policy document (e.g. EU AI Act summary).",
    hint: "Split the PDF into chunks, store them, retrieve the most relevant chunks for each question, send to Gemma 4.",
  },
];

export const glossary = [
  { term: "Generative AI", def: "AI models (often LLMs) that produce new text, images, or code in response to a prompt." },
  { term: "Hallucination", def: "When a model confidently outputs information that is not true. Always verify against the source." },
  { term: "Bias", def: "Systematic skew in a model's outputs, often inherited from training data. Document and mitigate it." },
  { term: "RTCF", def: "Prompt framework: Role, Task, Context, Format. (We use 'Constraints' as a 5th element.)" },
  { term: "Token", def: "A chunk of text (~4 characters in English) that a model reads or writes. Models charge per token." },
  { term: "Temperature", def: "Sampling setting that controls randomness. 0 = deterministic, 1 = creative. Default is usually ~0.7." },
  { term: "Top-p (nucleus) sampling", def: "Sampling method that picks from the smallest set of tokens whose total probability is ≥ p." },
  { term: "Open Model", def: "A model whose weights are publicly downloadable (e.g. Gemma, Llama, Mistral)." },
  { term: "Gemma 4", def: "Google's family of open models. Small enough to run on a laptop via Ollama." },
  { term: "Ollama", def: "Local LLM runtime. Serves models over HTTP on http://127.0.0.1:11434 by default." },
  { term: "Inference", def: "Running a model to produce output. Locally: 'offline inference'. On a server: 'cloud inference'." },
  { term: "RAG", def: "Retrieval-Augmented Generation. Fetch relevant docs, then ask the model to answer using them." },
  { term: "Embedding", def: "A numeric vector that represents the meaning of text. Used to find similar chunks for RAG." },
  { term: "Prompt Battle", def: "Day 1 challenge: two teams swap prompts and try to break the other team's output." },
  { term: "Agent-ready repository", def: "A repo with README + AGENTS.md + TASKS.md + PROMPTS.md, designed to be readable by an AI agent." },
  { term: "AGENTS.md", def: "A markdown file that describes how an AI agent should behave in this repo: tools, tone, limits." },
  { term: "Human-in-the-loop", def: "A human reviews and approves the model's output before it ships. Required for high-risk decisions." },
  { term: "Edge AI", def: "AI that runs close to where the data is generated (e.g. on the laptop) rather than in a remote data center." },
  { term: "GitHub", def: "Hosting for Git repositories. Used here as portfolio, documentation, and version control." },
  { term: "OpenCode", def: "AI-assisted development CLI used in the bootcamp. Can talk to Gemini (cloud) or Ollama (local)." },
  { term: "Google Stitch", def: "AI-powered prototyping tool. Generates UI screens from a natural-language prompt." },
];

export const faqs = [
  {
    q: "Ollama says 'port 11434 already in use'. What do I do?",
    a: "Another Ollama instance is already running. On macOS/Linux: `pgrep -fl ollama` then `kill <pid>`. On Windows, open Task Manager and end the Ollama process. Then run `ollama serve` again. If it still fails, restart your machine — Ollama usually starts itself on login.",
  },
  {
    q: "My Windows machine doesn't have winget. Can I still install everything?",
    a: "Yes. For each step, the Setup page also lists a Chocolatey alternative (`choco install …`). If neither is available, use the official download link (Ollama, Git, Node) — every step has a fallback.",
  },
  {
    q: "OpenCode asks me to pick a model provider. Which one should I choose?",
    a: "Pick Google AI Studio (free tier) for normal cloud work — it gives you access to Gemini. For Day 4 offline work, add a second provider pointing at Ollama's local URL: http://127.0.0.1:11434.",
  },
  {
    q: "Ollama runs but `ollama run gemma4:2b` is very slow on my laptop.",
    a: "A 2B model needs ~2 GB of RAM; 4B needs ~8 GB. Close Chrome and other heavy apps. If your machine has no GPU, the first reply will be slow because Ollama streams. After that it warms up. If it's still unusable, switch to `gemma4:2b` (smallest) or use the cloud provider for that task.",
  },
  {
    q: "The model gave me a confident answer that's actually wrong. Is that a bug?",
    a: "No. That's a hallucination. The fix is process, not the model. (1) Cross-check facts against a source. (2) Re-prompt with 'cite the source'. (3) If the source doesn't support it, mark it as a hallucination in your PROMPTS.md. Day 1 Module 1 covers this in depth.",
  },
  {
    q: "How do I get a 2GB+ model to run on a 4GB-RAM laptop?",
    a: "Use `gemma4:2b` (smallest). If you need a 4B model, close all other apps. Ollama offloads unused layers to disk, so you usually can run a model that's slightly larger than your RAM — just expect the first reply to take a few seconds.",
  },
  {
    q: "Can I miss a day and still get a passing grade?",
    a: "Assessment is challenge-based, not attendance-based. But the challenges build on each other: Day 4 needs Day 1's PROMPTS.md and Day 3's TASKS.md. If you miss a day, the Facilitator will help you catch up before the next challenge block.",
  },
  {
    q: "Do I need to publish my repo publicly?",
    a: "For the assessment, the facilitator needs to be able to view your commits. A private repo with the facilitator added as a collaborator is fine. A public repo is great for your portfolio and recommended.",
  },
  {
    q: "My git commit got blocked because of a secret scanner warning. Now what?",
    a: "GitHub's secret scanner fired because you committed something that looks like an API key. (1) Revoke the key in your provider's dashboard. (2) Generate a new one. (3) Remove the secret from history: `git filter-repo --invert-paths --path <file>` or use BFG. (4) Add `.env` to `.gitignore` BEFORE you commit again. The Setup page shows a sample `.env` + `.gitignore`.",
  },
  {
    q: "What's the difference between AGENTS.md and README.md?",
    a: "README.md is for humans: project overview, how to run it, screenshots. AGENTS.md is for AI agents: tone, tools, rules, escalation. A repo can have both. The Responsible AI page has a full sample AGENTS.md you can copy.",
  },
];

export const evaluationRubric = {
  dayChallenges: {
    title: "Daily challenges (Days 1–4) — 70%",
    criteria: [
      { name: "Correctness", weight: 40, desc: "Does the deliverable meet the brief? Are claims verified against the source?" },
      { name: "Process", weight: 25, desc: "Did the student use the documented workflow (RTCF, AGENTS.md, checklist)?" },
      { name: "Responsible AI", weight: 20, desc: "Are AI outputs cited? Are hallucinations identified and corrected?" },
      { name: "Repository hygiene", weight: 15, desc: "Are files in the right folders? Is the README current? Are secrets out of git?" },
    ],
  },
  capstone: {
    title: "Capstone Shark Tank (Day 5) — 30%",
    criteria: [
      { name: "Problem & Process Map", weight: 10, desc: "Is the chosen org's pain clear? Is the current process mapped?" },
      { name: "AI Solution Design", weight: 20, desc: "Is the model choice justified? Are inputs/outputs concrete?" },
      { name: "Prototype (Stitch)", weight: 15, desc: "Does the prototype show the user journey end-to-end?" },
      { name: "Offline AI Option", weight: 10, desc: "Does the offline fallback actually work locally?" },
      { name: "ROI Analysis", weight: 15, desc: "Time saved × cost × volume — is the math honest?" },
      { name: "Risk & Governance", weight: 15, desc: "Are top risks listed? Are high-risk steps gated by a human?" },
      { name: "Model Selection Justification", weight: 10, desc: "Why this model, this size, this latency/cost trade-off?" },
      { name: "Pitch", weight: 5, desc: "Clear? Confident? Q&A handled?" },
    ],
  },
};

export const swotTemplate = {
  strengths: [
    "What advantages does your solution have?",
    "What does the AI do better than the current process?",
  ],
  weaknesses: [
    "What still needs human review?",
    "Where does the model hallucinate?",
  ],
  opportunities: [
    "What adjacent problems could the same AI solve?",
    "What data could unlock more value?",
  ],
  threats: [
    "What could go wrong in production?",
    "What regulatory or privacy risks exist?",
  ],
};

export const tasksTemplate = `# TASKS.md

> Backlog for the AI agent and the team. Pick the top 3 every morning.

## Now (today)
- [ ] TASK-001 — title — owner — acceptance criteria
- [ ] TASK-002 — title — owner — acceptance criteria
- [ ] TASK-003 — title — owner — acceptance criteria

## Next
- [ ] TASK-010 — title — owner — acceptance criteria

## Backlog
- [ ] TASK-020 — title — owner — acceptance criteria
- [ ] TASK-021 — title — owner — acceptance criteria

## Done
- [x] TASK-000 — title — owner — finished YYYY-MM-DD
`;

export const agentsTemplate = `# AGENTS.md

## What lives here
This repository is built and maintained with the help of AI coding agents.

## Models in use
- Gemini (cloud) — used for content generation, brainstorming.
- Gemma 4 2B via Ollama (local) — used for offline work and code review.

## Responsible AI rules
- Every model output is reviewed by a human before it is merged.
- No personal data, credentials, or proprietary code is sent to a public model.
- AI assistance is disclosed in PR descriptions and in the README footer.
- Known limitations: small local models may hallucinate citations; we verify every citation against the source PDF.
- High-risk changes (auth, payments, student records) require a second human reviewer.

## Escalation
If a model produces something that looks wrong, stop and ask a human.
`;

export const promptsTemplate = `# PROMPTS.md

> A personal library of every prompt that worked (or didn't). Date, model, intent, prompt, output quality (1-5).

## M1 — Model comparison
- **Date:** 2026-06-15
- **Model:** Gemini 2.0 Flash
- **Intent:** Compare models on EU AI Act summary
- **Prompt:** \`"Summarise the EU AI Act in 5 bullets and cite the articles."\`
- **Output quality:** 4/5 — accurate but missing recency.

## M3 — RTCF refactor
- **Date:** 2026-06-15
- **Model:** Gemini
- **Intent:** Rewrite a sloppy prompt using RTCF
- **Prompt:** \`"Role: senior policy analyst. Task: summarise. Context: ... Format: ..."\`
- **Output quality:** 5/5
`;

