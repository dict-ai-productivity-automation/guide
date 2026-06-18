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
    { name: "Ollama", slug: "ollama", desc: "Local LLM runtime (CLI)" },
    { name: "LM Studio", slug: "lmstudio", desc: "Beginner-friendly local LLM GUI" },
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
    orgIntakeForm: "https://forms.gle/PDTmVXXR2UVskd3aA",
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
    opening: {
      id: "opening",
      title: "Opening Program",
      timebox: "60 min",
      topics: [
        "DICT welcome address",
        "Bootcamp goals and 5-day roadmap",
        "Participant introductions",
        "Logistics, safety, and offline setup",
      ],
      activity:
        "Facilitator overview, then a 60-second intro from each participant.",
      deliverable: "Signed attendance + DICT welcome kit",
      steps: [
        "Settle in, test your laptop, and connect to the venue Wi-Fi (or switch to airplane mode for the offline day).",
        "Listen to the DICT welcome address and the bootcamp goals briefing.",
        "Each participant stands up and gives a 60-second intro: name, role, one thing they want to learn.",
        "Facilitator walks through the 5-day roadmap, the daily 8h schedule, and the deliverables.",
        "Confirm setup checklist is done (GitHub, Git, Node, Ollama or LM Studio + Gemma 4, OpenCode, AI Studio, Stitch).",
      ],
    },
    modules: [
      {
        id: "m1",
        number: 1,
        title: "Responsible AI & Model Awareness",
        timebox: "60 min",
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
          "Compare how Gemini, Gemma 4 (via Ollama or LM Studio), and an Open Model each respond to: 'Summarise the EU AI Act in 5 bullets and cite the articles.' Notice differences in recency, citation behaviour, and refusal style.",
        steps: [
          "Open Google AI Studio and pick Gemini 2.0 Flash.",
          "Install Ollama (CLI) or LM Studio (GUI) and pull `gemma4:2b` (see Setup).",
          "Pick one Open Model such as `llama3.2:3b` from the Ollama library.",
          "Send the SAME prompt to all three. Copy each response into a markdown table.",
          "Score each response on: Accuracy, Brevity, Hallucinations, Citations, Refusals.",
        ],
        comparisonModels: [
          { name: "Gemini 2.0 Flash", where: "Google AI Studio (cloud)", size: "—", cost: "Free tier", notes: "Default for the bootcamp." },
          { name: "Gemma 4 2B", where: "Ollama (local)", size: "2B params", cost: "Free, runs on a laptop", notes: "Used for offline work on Day 4." },
          { name: "Gemma 4 2B", where: "LM Studio (local)", size: "2B params", cost: "Free, runs on a laptop", notes: "Beginner-friendly GUI alternative to Ollama." },
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
        timebox: "75 min",
        topics: [
          "GitHub workflows: branches, PRs, issues",
          "Repository organization for AI agents",
          "AI-assisted development with OpenCode",
          "Agent-ready files: README, AGENTS, TASKS, PROMPTS, DESIGN",
        ],
        activity:
          "Scaffold a repository with README.md, AGENTS.md, TASKS.md, PROMPTS.md, and DESIGN.md.",
        deliverable: "Bootcamp repository with 5 root markdown files",
        challenge: null,
        example: "",
        steps: [
          "Create a new GitHub repo named `ai-bootcamp-<your-name>`.",
          "Add a README.md describing yourself and the bootcamp goals.",
          "Add AGENTS.md describing how an AI agent should behave in this repo (tone, tools, constraints).",
          "Add TASKS.md with a checklist of the 14 modules.",
          "Add PROMPTS.md to collect every prompt you used during the bootcamp.",
          "Add DESIGN.md to document prototype screens, user flows, and design decisions.",
        ],
      },
      {
        id: "m3",
        number: 3,
        title: "Prompt Engineering Fundamentals",
        timebox: "90 min",
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
        timebox: "90 min",
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
        timebox: "90 min",
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
          "Repeat with a local Gemma 4 model (Ollama or LM Studio) and compare.",
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
        timebox: "60 min",
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
        timebox: "60 min",
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
      "Take AI off the cloud. Run Gemma 4 locally with Ollama or LM Studio, build offline apps, and design automated workflows.",
    modules: [
      {
        id: "m10",
        number: 10,
        title: "Offline AI Deployment Lab",
        timebox: "90 min",
        topics: [
          "Installing Ollama (CLI) or LM Studio (GUI) on macOS, Linux, Windows",
          "Pulling and running Gemma 4",
          "Configuring OpenCode to use a local model",
          "Verifying local inference (latency, tokens/s)",
        ],
        activity: "Get a working local Gemma 4 + OpenCode pipeline.",
        deliverable: "Working `ollama run gemma4:2b` (or LM Studio server) and OpenCode config",
        challenge: null,
        example: "",
        steps: [
          "Install Ollama (CLI) from ollama.com OR LM Studio (GUI) from lmstudio.ai — both can host Gemma 4.",
          "Run `ollama pull gemma4:2b` (or `gemma4:4b` if your machine supports it).",
          "Run `ollama run gemma4:2b \"Hello\"` to confirm it works. (LM Studio: start the local server from the Developer tab — default port 1234.)",
          "In OpenCode, point the model provider to the local endpoint (Ollama: http://127.0.0.1:11434, LM Studio: http://127.0.0.1:1234).",
          "Ask OpenCode to refactor a small file using only the local model.",
        ],
      },
      {
        id: "m11",
        number: 11,
        title: "Disconnected Intelligence Challenge",
        timebox: "60 min",
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
        timebox: "150 min",
        topics: [
          "App architecture for offline AI",
          "Picking a UI: CLI, TUI, web, desktop",
          "Wiring Ollama or LM Studio into a small program",
        ],
        activity: "Build one of: Meeting Summariser, FAQ Assistant, Feedback Analyzer, Policy Analyzer.",
        deliverable: "README.md, AGENTS.md, TASKS.md, working source code",
        challenge: null,
        example: "",
        steps: [
          "Pick ONE of the four app options.",
          "Sketch the input → model → output flow.",
          "Wire up Ollama (http://127.0.0.1:11434) or LM Studio (http://127.0.0.1:1234) using its HTTP API or the official SDK.",
          "Add a minimal UI (CLI is fine).",
          "Write README + AGENTS + TASKS for your project.",
        ],
        tool: "appPicker",
      },
      {
        id: "m13",
        number: 13,
        title: "Automation Flow-Off",
        timebox: "60 min",
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
          "Design the Solution: input, output, and optional LLM or AI integration points.",
          "Build a Google Stitch prototype of the user-facing screens.",
          "If your concept uses an AI model, show a cloud or offline option (Ollama or LM Studio + Gemma 4 fallback).",
          "Build a simple ROI model: time saved × hourly cost × volume.",
          "Complete the Risk Assessment and Governance Controls tables.",
          "If using AI, justify the Model Selection (cloud vs local, size, latency, cost).",
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
        code: "Open https://github.com/signup and complete the form.\n# Pick a professional username — this is your portfolio for the next 5 days.\n# Use the same email you check daily; the facilitator will invite you to the org.",
      },
      {
        label: "Verify your email",
        code: "Click the link in the verification email GitHub sends you.\n# If you don't see it within 5 minutes, check the spam folder\n# and re-send from Settings → Emails.",
      },
      {
        label: "Enable 2FA",
        code: "Settings → Password and authentication → Enable two-factor authentication.\n# Use an authenticator app (Google Authenticator, 1Password, Authy).\n# Save the recovery codes somewhere safe — losing them locks you out.",
      },
      {
        label: "Set your commit identity (do this on the machine you'll code on)",
        code: "git config --global user.name  \"Your Name\"\ngit config --global user.email \"you@example.com\"\n# Use the email tied to your GitHub account, otherwise\n# your commits will show as 'unverified' on your profile.",
      },
    ],
    tip: "Once your account is ready, share your GitHub username with the facilitator so they can add you to the bootcamp organisation.",
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
      { label: "Verify on any platform", code: "git --version\n# should print git version 2.40+ or newer\ngit config --global init.defaultBranch main\n# makes every new repo use 'main' as the default branch name" },
    ],
    tip: "If `git` is not found after installing on Windows, close your terminal and open a new one — the PATH only refreshes on new shells.",
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
      { label: "Verify on any platform", code: "node --version    # should print v20.x or higher\nnpm --version     # should print 10.x or higher\nwhich node        # macOS / Linux — prints the path to node" },
    ],
    tip: "If you have an older Node version (anything < 20), use nvm/nvm-windows — it lets multiple Node versions coexist on the same machine.",
  },
  {
    id: "ollama",
    title: "Install Ollama + load Gemma 4 (CLI option)",
    time: "10 min",
    description:
      "Ollama is the CLI-based local model runtime used on Day 4 for fully offline AI tasks. If you are comfortable with the terminal, use this option. If you prefer a graphical interface, skip to the next step and use LM Studio instead — both run the same Gemma 4 model. If you have internet, pull the model directly. If you're offline, your facilitator will hand you a pre-built model file — copy it to the location below and Ollama will pick it up.",
    commands: [
      { label: "macOS", code: "brew install ollama\n# or download the .dmg from https://ollama.com/download" },
      { label: "Linux", code: "curl -fsSL https://ollama.com/install.sh | sh" },
      { label: "Windows (PowerShell)", code: "winget install Ollama.Ollama\n# or download OllamaSetup.exe from https://ollama.com/download" },
      { label: "Start the Ollama service", code: "# macOS / Linux\nollama serve\n\n# Windows — Ollama runs as a background service after install,\n# so you can usually skip this. Run it manually if needed:\nollama serve" },
      { label: "Option A — pull the model (online)", code: "ollama pull gemma4:2b\n# optional 4B (needs ~8GB RAM):\nollama pull gemma4:4b" },
      {
        label: "Option B — load the offline model file from your facilitator",
        code: `# Copy the model file your facilitator gave you into Ollama's
# local model store. The exact filename will look like
# gemma4-2b.bin or gemma4-4b.bin (ask the facilitator for the
# exact name).

# Linux — copy into the user's Ollama models folder
mkdir -p ~/.ollama/models
cp ~/Downloads/gemma4-2b.bin ~/.ollama/models/

# Windows (PowerShell) — copy into the user's Ollama models folder
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.ollama\\models"
Copy-Item "$env:USERPROFILE\\Downloads\\gemma4-2b.bin" "$env:USERPROFILE\\.ollama\\models\\"

# Register the file with Ollama by tagging it
ollama create gemma4:2b -f -
# then paste this and press Ctrl-D / Enter twice:
#   FROM ~/.ollama/models/gemma4-2b.bin
ollama run gemma4:2b "hi"`,
      },
      { label: "Smoke test (all platforms)", code: 'ollama run gemma4:2b "Explain what a hallucination is in 2 sentences."' },
    ],
    tip: "If `ollama serve` says port 11434 is busy, another instance is already running — that's fine. If Ollama can't find the offline file, double-check the path: Linux uses `~/.ollama/models/`, Windows uses `%USERPROFILE%\\.ollama\\models\\`. Prefer a GUI? Use LM Studio in the next step instead.",
  },
  {
    id: "lmstudio",
    title: "Install LM Studio + load Gemma 4 (GUI option)",
    time: "10 min",
    description:
      "LM Studio is a beginner-friendly desktop app for running local LLMs. Pick this option if you are new to the terminal or want a visual way to browse, load, and chat with models. It runs the same Gemma 4 model as Ollama and exposes an OpenAI-compatible HTTP API on http://127.0.0.1:1234, so OpenCode (and any other tool that talks to OpenAI) can use it as a drop-in local provider. If you have internet, download Gemma 4 from inside LM Studio. If you are offline (or the bootcamp is on a closed network), your facilitator will hand you a Gemma 4 .gguf file on an external drive — use Option B below to load it.",
    commands: [
      {
        label: "Download",
        code: `# Open https://lmstudio.ai/download and grab the installer
# for your OS (macOS, Windows, or Linux .deb / .AppImage).
# The app is free for personal use.`,
      },
      { label: "macOS", code: "# Open the .dmg from your Downloads folder and drag\n# LM Studio into /Applications.\n# First launch: right-click → Open to bypass Gatekeeper." },
      { label: "Windows", code: "# Run the .exe installer you downloaded.\n# Launch LM Studio from the Start menu." },
      { label: "Linux (Debian / Ubuntu)", code: "sudo dpkg -i ~/Downloads/LM_Studio-*.deb\n# If you hit missing-libs errors, run:\nsudo apt-get -f install" },
      { label: "Linux (universal AppImage)", code: "chmod +x ~/Downloads/LM_Studio-*.AppImage\n/opt/LM_Studio.AppImage   # or just double-click it" },
      {
        label: "Option A — search and download Gemma 4 (online)",
        code: `# In LM Studio's search bar (left sidebar), type:
#   gemma 4 2b
# Pick the official google/gemma-4-2b model and click Download.
# Recommended quantisation: Q4_K_M (smallest) or Q8_0 (best quality).
# The 2B model needs ~2 GB free disk space.`,
      },
      {
        label: "Option B — load Gemma 4 from the external drive (offline)",
        code: [
          "# Your facilitator will hand you a USB / external drive that",
          "# contains a Gemma 4 .gguf file, e.g.:",
          "#   gemma-4-2b-instruct-Q4_K_M.gguf",
          "#   gemma-4-2b-instruct-Q8_0.gguf",
          "#",
          "# Steps:",
          "#   1. Plug in the external drive. Copy the .gguf file into",
          "#      LM Studio's models folder:",
          "#         macOS:   ~/Library/Application Support/LM Studio/models/",
          "#         Linux:   ~/.cache/lm-studio/models/",
          "#         Windows: %USERPROFILE%\\.cache\\lm-studio\\models\\",
          "#      (LM Studio also accepts drag-and-drop into the 'My Models'",
          "#      tab — no copy needed if you just want to use the model from",
          "#      the external drive. Files load slower from USB 2.0, so a",
          "#      local copy is faster.)",
          "#   2. In LM Studio, open the 'My Models' tab on the left.",
          "#      The .gguf file you just copied should appear with a",
          "#      'gemma-4-2b-instruct' label.",
          "#   3. If LM Studio doesn't show it, click the refresh icon at",
          "#      the top of the 'My Models' list, or restart the app.",
        ].join("\n"),
      },
      {
        label: "Copy commands (if you'd rather use the terminal)",
        code: `# macOS — copy from the external drive to LM Studio's models folder
cp /Volumes/BOOTCAMP/gemma-4-2b-instruct-Q4_K_M.gguf \\
   "$HOME/Library/Application Support/LM Studio/models/"

# Linux
cp /media/$USER/BOOTCAMP/gemma-4-2b-instruct-Q4_K_M.gguf \\
   ~/.cache/lm-studio/models/

# Windows (PowerShell) — adjust the drive letter (D:, E:, …)
Copy-Item "D:\\gemma-4-2b-instruct-Q4_K_M.gguf" \\
          "$env:USERPROFILE\\.cache\\lm-studio\\models\\"`,
      },
      {
        label: "Start the local server",
        code: `# Open the 'Developer' tab on the left.
# Toggle 'Local Server' ON. The default port is 1234, which is the
# OpenAI-compatible endpoint OpenCode will talk to.
# Test it from a terminal:
curl http://127.0.0.1:1234/v1/models   # should list gemma-4-2b`,
      },
      {
        label: "Smoke test from the chat panel",
        code: `# Switch to the 'Chat' tab in LM Studio, pick gemma-4-2b at
# the top, and ask:
#   "Explain what a hallucination is in 2 sentences."
# If you get a sensible answer, the local stack is working.`,
      },
    ],
    tip: "LM Studio is GUI-only — there is no Linux server build. If you are running headless or want a CLI workflow, use Ollama instead. LM Studio's local server defaults to http://127.0.0.1:1234 and speaks the OpenAI API, so any tool that supports a custom base URL can use it as a local model provider. If the .gguf on the external drive is too large to copy (e.g. a 4B Q8_0 is ~5 GB), ask your facilitator for the smaller Q4_K_M build.",
  },
  {
    id: "opencode",
    title: "Install OpenCode CLI",
    time: "10 min",
    description:
      "OpenCode is the AI-assisted development tool used throughout the bootcamp. It can talk to Gemini in the cloud or to a local model (Ollama or LM Studio).",
    commands: [
      { label: "macOS / Linux", code: "curl -fsSL https://opencode.ai/install | bash\n# installs to ~/.opencode/bin — make sure it's on your PATH:\necho 'export PATH=\"$HOME/.opencode/bin:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc" },
      { label: "Windows (PowerShell)", code: "irm https://opencode.ai/install.ps1 | iex\n# if you get an execution-policy error, run this once:\n#   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned" },
      { label: "Verify", code: "opencode --version\n# should print something like 0.x.y\nopencode --help   # lists all subcommands" },
      { label: "First-run setup", code: "# Run once to pick a default model provider:\nopencode\n# Pick 'Google AI Studio' (free tier) for cloud work, or\n# pick 'Ollama' (http://127.0.0.1:11434) or 'LM Studio'\n# (http://127.0.0.1:1234) for offline work." },
    ],
    tip: "On first run, OpenCode will ask you to pick a model provider. Pick Google AI Studio (free tier) for cloud work and Ollama or LM Studio for offline work. LM Studio exposes an OpenAI-compatible endpoint, so pick the 'OpenAI-compatible' option and point it at http://127.0.0.1:1234.",
  },
  {
    id: "opencode-desktop",
    title: "Install OpenCode Desktop (for lecture sessions)",
    time: "10 min",
    description:
      "OpenCode Desktop is the GUI version we use during lectures and live demos. It pairs with the CLI you just installed — your config, projects, and chat history stay in sync. Install it after the CLI is working so the desktop app can pick up the same providers.",
    commands: [
      {
        label: "Download",
        code: "# Get the installer for your OS from the official releases page:\n#   https://github.com/sst/opencode/releases\n# Look for the latest 'opencode-desktop' release and download the\n# file that matches your platform (see the labels below).",
      },
      { label: "macOS (Apple Silicon — M1/M2/M3/M4)", code: "# Download the .dmg from the releases page, then:\nopen ~/Downloads/opencode-desktop_*_aarch64.dmg\n# Drag the OpenCode app into /Applications.\n# First launch: right-click → Open to bypass Gatekeeper." },
      { label: "macOS (Intel)", code: "open ~/Downloads/opencode-desktop_*_x64.dmg\n# Drag the OpenCode app into /Applications.\n# First launch: right-click → Open to bypass Gatekeeper." },
      { label: "Windows (winget)", code: "winget install OpenCode.OpenCodeDesktop\n# After install, launch from the Start menu." },
      { label: "Windows (manual)", code: "# Download the .exe installer from the releases page and run it.\n# Pick 'Install for all users' if your machine is shared with classmates." },
      { label: "Linux (Debian / Ubuntu)", code: "sudo dpkg -i ~/Downloads/opencode-desktop_*_amd64.deb\n# If you hit missing-libs errors, run:\nsudo apt-get -f install" },
      { label: "Linux (Fedora / RHEL)", code: "sudo dnf install ~/Downloads/opencode-desktop_*_x86_64.rpm" },
      { label: "Linux (universal AppImage)", code: "chmod +x ~/Downloads/opencode-desktop_*_x86_64.AppImage\n# Move it somewhere stable:\nsudo mv ~/Downloads/opencode-desktop_*_x86_64.AppImage /opt/opencode-desktop.AppImage\n# Launch from the apps menu or run it directly:\n/opt/opencode-desktop.AppImage" },
      {
        label: "First launch",
        code: "# Open the OpenCode Desktop app from your applications menu.\n# It will auto-detect the CLI you installed in the previous step,\n# so your provider (Google AI Studio / Ollama / LM Studio) and\n# config are already in place. Sign in with the same account you\n# used for Google AI Studio so the desktop app can read your key.",
      },
      {
        label: "Pair the desktop app with the CLI",
        code: "# In the desktop app, open Settings → Providers.\n# Click 'Use CLI session' so both apps share the same\n# conversation history and the same model provider.\n# Sanity check from a terminal:\nopencode --version     # CLI version should match the desktop app's\nopencode session list  # should list the desktop session as active",
      },
    ],
    tip: "During lectures, the facilitator will share a live OpenCode Desktop window. Open the app a few minutes before the session starts and pin the opencode project folder so you can follow along. If the desktop app can't find the CLI, run `opencode login` in a terminal once and reopen the app.",
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
        code: "Open https://aistudio.google.com/ with your Google account.\n# Use the same Google account you used for Stitch and Drive.",
      },
      {
        label: "Create an API key",
        code: "Settings (gear icon, top-right) → API keys → Create API key.\n# Pick 'Create key in new project' if asked.\n# Copy the key immediately — you can only see it once.\n# Store it in a password manager, not in a chat message.",
      },
      {
        label: "Put the key in your shell environment",
        code:
          '# macOS / Linux — add to ~/.bashrc or ~/.zshrc so it persists:\n' +
          "echo 'export GOOGLE_API_KEY=\"YOUR_KEY\"' >> ~/.bashrc\n" +
          'source ~/.bashrc\n' +
          '\n' +
          '# Windows (PowerShell) — add to your profile:\n' +
          'Add-Content $PROFILE \'"$env:GOOGLE_API_KEY = YOUR_KEY"\'\n' +
          '. $PROFILE',
      },
      {
        label: "Test in your shell",
        code: `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$GOOGLE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents":[{"parts":[{"text":"Say hi in 3 words."}]}]}'\n# A successful response will look like:\n#   {"candidates":[{"content":{"parts":[{"text":"Hello there, friend!"}]}}]}`,
      },
    ],
    tip: "Never commit your API key. Use environment variables or a `.env` file listed in `.gitignore`. The free tier has per-minute rate limits — if you hit 429s, wait 60s and retry.",
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
        code: "Visit https://stitch.withgoogle.com/ and sign in with the same Google account you used for AI Studio.\n# If Stitch shows a 'Request access' page, the facilitator\n# will add your email to the allow-list — ping them.",
      },
      {
        label: "Try a starter prompt",
        code: 'Prompt: "A minimal dashboard for a community college admissions team, with a sidebar nav, a stats row, and a recent applications table."\n# Once you get a design, click Export → PNG for each screen.\n# Save the PNGs into your repo under /prototype/ — you\'ll need\n# them for the Day 2 demo and the Day 5 pitch.',
      },
      {
        label: "Hand it off to AI Studio (optional)",
        code: "In Stitch, click the share icon → 'Open in AI Studio'.\n# This lets you turn the static mockup into a working\n# Gemini prompt you can iterate on during Day 2.",
      },
    ],
    tip: "Export every screen you generate as a PNG — they go into your `/prototype` folder. Stitch is iterative: if the first design is off, refine with 'Make the sidebar narrower' or 'Swap the blue for a warm grey'.",
  },
  {
    id: "sheets-slides",
    title: "Sheets & Slides access",
    time: "2 min",
    description: "Used on Day 2 for data detective work and on Day 5 for the Shark Tank pitch deck.",
    commands: [
      {
        label: "Open a fresh doc fast",
        code: "https://sheets.new  →  creates a fresh spreadsheet, already in your Drive.\nhttps://slides.new   →  creates a fresh deck, already in your Drive.\n# The '.new' shortcut is a Google trick — it skips the 'new file' picker.",
      },
      {
        label: "Share with the facilitator",
        code: "# In Sheets / Slides, click Share → 'Anyone with the link can view'.\n# Paste the link in the bootcamp chat so the facilitator\n# can review your work during the daily check-in.",
      },
    ],
    tip: "Bookmark both — you'll use them every day. If you accidentally edit the wrong file, File → Version history → Restore this version.",
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
      "AI-native repo structure (README, AGENTS, TASKS, PROMPTS, DESIGN)",
      "Local model serving with Ollama or LM Studio",
      "Designing AI-assisted workflows with risk and governance",
      "Prototyping with Google Stitch",
    ],
  },
];

export const systemRequirements = {
  minimum: {
    label: "Minimum",
    model: "Gemma 4 2B (via Ollama or LM Studio)",
    badge: "Cloud-heavy • works on almost any laptop",
    ram: "8 GB",
    storage: "20 GB free",
    cpu: "4 cores, x86_64 or arm64",
    os: [
      { name: "Windows", version: "Windows 10 (64-bit) or newer" },
      { name: "macOS", version: "macOS 12 Monterey or newer (Intel or Apple Silicon)" },
      { name: "Ubuntu", version: "22.04 LTS or newer" },
      { name: "Fedora", version: "Workstation 38 or newer" },
    ],
    notes: [
      "Runs the small Gemma 4 2B model locally; you can still use Gemini in the cloud for heavier tasks.",
      "Expect 5–10 seconds for the first token of a 2B response, then smooth streaming.",
      "8 GB RAM is the floor — close Chrome tabs while the local model is running.",
    ],
  },
  recommended: {
    label: "Recommended",
    model: "Gemma 4 4B (via Ollama / LM Studio) or Gemini in the cloud",
    badge: "Balanced • smooth local inference",
    ram: "16 GB",
    storage: "40 GB free (NVMe SSD preferred)",
    cpu: "8 cores, modern x86_64 or Apple Silicon",
    gpu: "Optional: 6 GB+ VRAM (NVIDIA, Apple Silicon unified memory shares with RAM)",
    os: [
      { name: "Windows", version: "Windows 11 (64-bit), WSL2 enabled for best results" },
      { name: "macOS", version: "macOS 14 Sonoma or newer, Apple Silicon strongly recommended" },
      { name: "Ubuntu", version: "24.04 LTS or newer" },
      { name: "Fedora", version: "Workstation 40 or newer" },
    ],
    notes: [
      "Runs the medium Gemma 4 4B model comfortably; the 4B is what the bootcamp exercises are tuned for.",
      "Apple Silicon Macs (M2 / M3 / M4) use unified memory, so 16 GB is roughly equivalent to a discrete-GPU PC with 16 GB VRAM.",
      "If you have an NVIDIA GPU, install the CUDA build of Ollama for a 2–4× speedup over CPU. LM Studio will auto-detect your GPU and pick the right backend.",
    ],
  },
  osSpecific: [
    {
      os: "Windows",
      icon: "windows",
      title: "Windows 10 / 11",
      requirements: [
        "Windows 10 64-bit (build 19041 or newer) or Windows 11",
        "Enable WSL2 if you want the Linux install path: `wsl --install` in an admin PowerShell, then restart",
        "Install the **Visual C++ Redistributable 2019+** (Ollama needs it)",
        "PowerShell 5.1+ (ships with Windows 10) or PowerShell 7+ for the install scripts",
        "Disable any third-party antivirus from scanning the Ollama models folder (`~/.ollama/`) — it halves model load time",
      ],
    },
    {
      os: "macOS",
      icon: "apple",
      title: "macOS 12+",
      requirements: [
        "macOS 12 Monterey (Intel) or macOS 13 Ventura (Apple Silicon) or newer",
        "Apple Silicon (M1 / M2 / M3 / M4) is strongly recommended — the unified memory pool makes local inference dramatically faster",
        "Xcode Command Line Tools: `xcode-select --install` (needed by Homebrew and OpenCode)",
        "At least 6 GB of free disk space on the boot volume for the model cache",
        "If you are on an Intel Mac, prefer the 2B model — the 4B model runs but is slow",
      ],
    },
    {
      os: "Linux",
      icon: "linux",
      title: "Ubuntu / Debian / Fedora",
      requirements: [
        "Ubuntu 22.04 LTS+ or Debian 12+, or Fedora 38+ (other modern distros work but are untested)",
        "A user account with `sudo` access (the Ollama install script needs it once)",
        "`curl` and `git` available (pre-installed on Ubuntu Desktop and Fedora Workstation)",
        "For NVIDIA GPU acceleration: NVIDIA driver 535+ and `nvidia-cuda-toolkit`",
        "If you use Wayland (default on Fedora 40+), OpenCode Desktop works but some screen-sharing apps need X11 fallback for the lecture stream",
      ],
    },
  ],
};

export const repoStructure = `
.
├── README.md
├── AGENTS.md
├── TASKS.md
├── PROMPTS.md
├── DESIGN.md
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
├── DESIGN.md
├── proposal/
├── prototype/
├── app/
├── docs/
└── presentation/
`;

export const schedule = [
  { day: 1, block: "Opening Program", minutes: 60 },
  { day: 1, block: "Module 1 — Responsible AI & Model Awareness", minutes: 60 },
  { day: 1, block: "Morning break", minutes: 15 },
  { day: 1, block: "Module 2 — AI-Native Repository Setup", minutes: 75 },
  { day: 1, block: "Lunch", minutes: 60 },
  { day: 1, block: "Module 3 — Prompt Engineering Fundamentals", minutes: 90 },
  { day: 1, block: "Afternoon break", minutes: 15 },
  { day: 1, block: "Prompt Battle challenge", minutes: 60 },
  { day: 1, block: "Day 1 reflection + close", minutes: 45 },
  { day: 2, block: "Recap & Module 4 — AI-Assisted Documents", minutes: 90 },
  { day: 2, block: "Morning break", minutes: 15 },
  { day: 2, block: "Module 5 — Data Detective Challenge", minutes: 90 },
  { day: 2, block: "Lunch", minutes: 60 },
  { day: 2, block: "Module 6 — AI Prototype Design with Stitch", minutes: 120 },
  { day: 2, block: "Afternoon break", minutes: 15 },
  { day: 2, block: "Prompt-to-Prototype challenge", minutes: 60 },
  { day: 2, block: "Day 2 reflection + close", minutes: 30 },
  { day: 3, block: "Recap & Module 7 — Executive Summary Sprint", minutes: 60 },
  { day: 3, block: "Morning break", minutes: 15 },
  { day: 3, block: "Module 8 — Decision Matrix Challenge", minutes: 120 },
  { day: 3, block: "Lunch", minutes: 60 },
  { day: 3, block: "Module 9 — Agent Planning Workshop", minutes: 60 },
  { day: 3, block: "Afternoon break", minutes: 15 },
  { day: 3, block: "Hallucination Hunt debrief", minutes: 60 },
  { day: 3, block: "Day 3 reflection + close", minutes: 90 },
  { day: 4, block: "Module 10 — Offline AI Deployment Lab", minutes: 90 },
  { day: 4, block: "Morning break", minutes: 15 },
  { day: 4, block: "Module 11 — Disconnected Intelligence Challenge", minutes: 60 },
  { day: 4, block: "Lunch", minutes: 60 },
  { day: 4, block: "Module 12 — Offline AI App Development", minutes: 150 },
  { day: 4, block: "Afternoon break", minutes: 15 },
  { day: 4, block: "Module 13 — Automation Flow-Off", minutes: 60 },
  { day: 4, block: "Day 4 reflection + close", minutes: 30 },
  { day: 5, block: "Capstone kickoff (Shark Tank briefs)", minutes: 60 },
  { day: 5, block: "Team build time", minutes: 180 },
  { day: 5, block: "Lunch", minutes: 60 },
  { day: 5, block: "Rehearsals", minutes: 60 },
  { day: 5, block: "Shark Tank pitches", minutes: 90 },
  { day: 5, block: "Awards, reflection, close", minutes: 30 },
];

export const appIdeas = [
  {
    id: "meeting-summariser",
    name: "Meeting Summariser",
    blurb: "Paste a meeting transcript → get a 1-paragraph summary, decisions, and action items.",
    difficulty: "Beginner",
    dataExample: "Free transcripts: https://github.com/meeting-summariser-demo (sample.txt)",
    hint: "Use Ollama's HTTP API (POST to /api/generate with `prompt`) or LM Studio's OpenAI-compatible API (POST to http://127.0.0.1:1234/v1/chat/completions). Wrap input/output in a tiny Node or Python script.",
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
  { term: "Gemma 4", def: "Google's family of open models. Small enough to run on a laptop via Ollama or LM Studio." },
  { term: "Ollama", def: "Local LLM runtime (CLI-first). Serves models over HTTP on http://127.0.0.1:11434 by default." },
  { term: "LM Studio", def: "Beginner-friendly desktop GUI for running local LLMs. Exposes an OpenAI-compatible API on http://127.0.0.1:1234." },
  { term: "Inference", def: "Running a model to produce output. Locally: 'offline inference'. On a server: 'cloud inference'." },
  { term: "RAG", def: "Retrieval-Augmented Generation. Fetch relevant docs, then ask the model to answer using them." },
  { term: "Embedding", def: "A numeric vector that represents the meaning of text. Used to find similar chunks for RAG." },
  { term: "Prompt Battle", def: "Day 1 challenge: two teams swap prompts and try to break the other team's output." },
  { term: "Agent-ready repository", def: "A repo with README + AGENTS.md + TASKS.md + PROMPTS.md + DESIGN.md, designed to be readable by an AI agent." },
  { term: "AGENTS.md", def: "A markdown file that describes how an AI agent should behave in this repo: tools, tone, limits." },
  { term: "Human-in-the-loop", def: "A human reviews and approves the model's output before it ships. Required for high-risk decisions." },
  { term: "Edge AI", def: "AI that runs close to where the data is generated (e.g. on the laptop) rather than in a remote data center." },
  { term: "GitHub", def: "Hosting for Git repositories. Used here as portfolio, documentation, and version control." },
  { term: "OpenCode", def: "AI-assisted development CLI used in the bootcamp. Can talk to Gemini (cloud), Ollama (local), or LM Studio (local)." },
  { term: "Google Stitch", def: "AI-powered prototyping tool. Generates UI screens from a natural-language prompt." },
];

export const faqs = [
  {
    q: "Ollama says 'port 11434 already in use'. What do I do?",
    a: "Another Ollama instance is already running. On macOS/Linux: `pgrep -fl ollama` then `kill <pid>`. On Windows, open Task Manager and end the Ollama process. Then run `ollama serve` again. If it still fails, restart your machine — Ollama usually starts itself on login. (If you are using LM Studio instead, make sure you don't also have Ollama running — only one local server needs port 11434.)",
  },
  {
    q: "My Windows machine doesn't have winget. Can I still install everything?",
    a: "Yes. For each step, the Setup page also lists a Chocolatey alternative (`choco install …`). If neither is available, use the official download link (Ollama, LM Studio, Git, Node) — every step has a fallback.",
  },
  {
    q: "OpenCode asks me to pick a model provider. Which one should I choose?",
    a: "Pick Google AI Studio (free tier) for normal cloud work — it gives you access to Gemini. For Day 4 offline work, add a second provider: Ollama (http://127.0.0.1:11434) or LM Studio (http://127.0.0.1:1234, choose the 'OpenAI-compatible' option).",
  },
  {
    q: "Ollama runs but `ollama run gemma4:2b` is very slow on my laptop.",
    a: "A 2B model needs ~2 GB of RAM; 4B needs ~8 GB. Close Chrome and other heavy apps. If your machine has no GPU, the first reply will be slow because Ollama streams. After that it warms up. If it's still unusable, switch to `gemma4:2b` (smallest), try LM Studio which auto-tunes for your GPU, or use the cloud provider for that task.",
  },
  {
    q: "I'm new to the terminal. Should I use Ollama or LM Studio?",
    a: "Use LM Studio. It is a desktop GUI: you search for a model, click Download, and chat with it from a window — no terminal commands. It runs the exact same Gemma 4 model as Ollama and exposes an OpenAI-compatible API on http://127.0.0.1:1234, so OpenCode and your Day 4 apps can still use it. Reach for Ollama only if you are comfortable in a terminal or want a lightweight, scriptable setup.",
  },
  {
    q: "Can I use Ollama and LM Studio at the same time?",
    a: "Yes, but pick different ports. LM Studio uses 1234 by default, Ollama uses 11434. As long as both servers are running, any tool that supports a custom base URL can point at either one. If both try to bind to the same port, stop one of them (close the LM Studio 'Developer' tab, or `ollama serve` only when needed).",
  },
  {
    q: "The bootcamp is offline and I have no internet. How do I load Gemma 4 into LM Studio?",
    a: "Your facilitator will hand you a USB or external drive containing the Gemma 4 model as a single `.gguf` file (for example `gemma-4-2b-instruct-Q4_K_M.gguf`). Plug the drive in, then in LM Studio open the 'My Models' tab and either drag-and-drop the file in or copy it into LM Studio's models folder (macOS: `~/Library/Application Support/LM Studio/models/`, Linux: `~/.cache/lm-studio/models/`, Windows: `%USERPROFILE%\\.cache\\lm-studio\\models\\`). The model will appear in the list — pick it in the Chat or Developer tab and you're ready. Avoid running LM Studio directly from the external drive: load times are noticeably slower on USB 2.0.",
  },
  {
    q: "The model gave me a confident answer that's actually wrong. Is that a bug?",
    a: "No. That's a hallucination. The fix is process, not the model. (1) Cross-check facts against a source. (2) Re-prompt with 'cite the source'. (3) If the source doesn't support it, mark it as a hallucination in your PROMPTS.md. Day 1 Module 1 covers this in depth.",
  },
  {
    q: "How do I get a 2GB+ model to run on a 4GB-RAM laptop?",
    a: "Use `gemma4:2b` (smallest). If you need a 4B model, close all other apps. Ollama offloads unused layers to disk, so you usually can run a model that's slightly larger than your RAM — just expect the first reply to take a few seconds. (In LM Studio, pick a smaller quantisation — Q4_K_M instead of Q8_0 — from the model page to cut memory use.)",
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
      { name: "Solution Design", weight: 20, desc: "Are inputs/outputs concrete? If AI is used, is the model or integration choice justified?" },
      { name: "Prototype (Stitch)", weight: 15, desc: "Does the prototype show the user journey end-to-end?" },
      { name: "AI Integration Option", weight: 10, desc: "If the output is AI-powered, does the team show a viable cloud or offline integration path?" },
      { name: "ROI Analysis", weight: 15, desc: "Time saved × cost × volume — is the math honest?" },
      { name: "Risk & Governance", weight: 15, desc: "Are top risks listed? Are high-risk steps gated by a human?" },
      { name: "Technology Justification", weight: 10, desc: "Why this tool, model, integration, or non-AI approach for the expected latency, cost, and risk?" },
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
- Gemma 4 2B via Ollama or LM Studio (local) — used for offline work and code review.

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

export const designTemplate = `# DESIGN.md

> The single source of truth for the look, feel, and structure of this app.
> Generated with Google Stitch during Module 6, then refined as the build progresses.
> Keep it under 2 pages — link out to longer docs when you need depth.

## 1. One-line pitch
> <one sentence: what this app is and who it is for>

## 2. Users & jobs-to-be-done
- **Primary user:** <role, context, devices they use>
- **Secondary user:** <role, context>
- **Job-to-be-done #1:** when <situation>, I want to <motivation>, so I can <outcome>.
- **Job-to-be-done #2:** when <situation>, I want to <motivation>, so I can <outcome>.

## 3. Screens (from Stitch)
For each screen, list the path, the Stitch prompt that produced it, the export filename, and what changed since the first export.

| # | Screen | Route | Stitch prompt (one-liner) | PNG export |
|---|--------|-------|---------------------------|------------|
| 1 | Home / landing | \`/\` | "Minimal landing page for <product> with hero, features, CTA" | \`/prototype/01-home.png\` |
| 2 | Dashboard | \`/dashboard\` | "Dashboard for <user role> with sidebar nav, stats row, recent items" | \`/prototype/02-dashboard.png\` |
| 3 | <next screen> | \`<route>\` | "<prompt>" | \`<path>\` |

## 4. Information architecture
- Top-level nav: <list of 3–6 items in the order users need them>
- Persistent elements: <sidebar / top bar / footer — what stays on every screen>
- Modal vs. page: <what becomes a modal vs. its own route, and why>

## 5. Design tokens
- **Color palette:** <primary, surface, muted, text — hex codes, sourced from Stitch>
- **Typography:** <heading font, body font, mono font, weights used>
- **Spacing scale:** <4 / 8 / 12 / 16 / 24 / 32 px, etc.>
- **Radii:** <sm / md / lg in px>
- **Iconography:** <icon set, stroke width, source>

## 6. Components
- **Button:** <primary, secondary, ghost, destructive — each with a one-line usage rule>
- **Card:** <when to use a card vs. a plain section>
- **Form fields:** <input, select, textarea — label position, helper text style>
- **Empty state:** <what every empty list/table looks like>

## 7. Accessibility checklist
- [ ] All interactive elements reachable by keyboard (Tab order matches reading order)
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] Every form input has a visible \`<label>\`
- [ ] Every icon-only button has an \`aria-label\`
- [ ] Focus ring is visible on every focusable element
- [ ] \`prefers-reduced-motion\` honoured for any animation

## 8. Open questions
- <question that the design must answer before build #1 can start>
- <question that can wait until after the first demo>

## 9. Change log
- **2026-06-15** — Initial DESIGN.md generated from Stitch exports for Module 6.
`;

export const skillTemplate = `# SKILL.md

## Name
Productivity Document, Spreadsheet, CSV, and Automation Assistant

## When to use this skill
Use this skill when the task involves one or more of these work products:
- Drafting, rewriting, summarising, or checking documents.
- Creating structured reports from notes, transcripts, PDFs, forms, or research.
- Cleaning, analysing, validating, or summarising spreadsheets and CSV files.
- Turning repeated office tasks into a checklist, script, template, or automation plan.

Do not use this skill for legal, medical, financial, procurement, HR discipline, or other high-risk decisions without a named human reviewer.

## Inputs to collect first
- **Goal:** What should the finished output help the user decide or do?
- **Audience:** Who will read or use the output?
- **Source files:** Document, spreadsheet, CSV, report, transcript, email thread, or notes.
- **Required format:** Memo, report, table, slide outline, CSV, spreadsheet formulas, checklist, or automation steps.
- **Constraints:** Deadline, word count, required columns, tone, style guide, privacy limits, and citation requirements.
- **Verification source:** The file, row, page, link, or authority used to confirm each important claim.

## Standard workflow
1. Identify the output type: document, spreadsheet, report, CSV, or automation.
2. Inspect the source before writing. Note missing fields, unclear instructions, duplicate records, and possible private data.
3. Create a short plan with the exact sections, columns, formulas, or automation steps needed.
4. Produce the first draft or transformed dataset.
5. Verify facts, numbers, formulas, row counts, dates, names, and citations against the source.
6. Flag assumptions and unresolved questions instead of hiding uncertainty.
7. Return the final output in the requested format with a brief quality checklist.

## Document and report rules
- Keep the main message visible in the first paragraph or executive summary.
- Preserve names, dates, figures, and policy references exactly unless the user asks for anonymisation.
- Cite source pages, sections, rows, or links for factual claims.
- Separate facts, analysis, recommendations, and assumptions.
- Use tables when comparing options, action items, owners, deadlines, risks, or metrics.

## Spreadsheet and CSV rules
- Never silently drop rows or columns. Report before/after row counts.
- Keep a copy of the original field names unless renaming is requested.
- Mark missing, duplicate, invalid, or outlier values.
- Use explicit formulas and explain what each calculated column means.
- For CSV output, keep one header row, consistent delimiters, and no merged cells.

## Automation rules
- Start with the manual process: trigger, inputs, decision points, output, owner, and exception path.
- Prefer simple automations first: template, checklist, spreadsheet formula, email rule, or scheduled script.
- Include failure handling, logging, and a human approval step for sensitive outputs.
- Never automate sending, deleting, approving, or publishing without explicit human confirmation.

## Output quality checklist
- [ ] Output matches the requested format.
- [ ] All required sections or columns are present.
- [ ] Important facts and numbers were checked against the source.
- [ ] Assumptions and gaps are listed.
- [ ] Private or sensitive data was not exposed unnecessarily.
- [ ] The user can act on the result without extra cleanup.

## Example prompt
\`\`\`text
Role: You are a productivity automation analyst.
Task: Convert this CSV of training attendance into a verified summary report and action-item table.
Context: The audience is a regional program manager. The source CSV has participant name, office, email, attendance_status, score, and comments.
Format:
1. 150-word executive summary.
2. Table of attendance counts by office.
3. List of participants needing follow-up.
4. Data quality issues found.
Constraints:
- Do not invent missing scores.
- Do not expose email addresses in the summary.
- Verify all totals against the CSV row count.
\`\`\`

## Escalation
Stop and ask a human reviewer when:
- The source data contains personal, confidential, or regulated information.
- The output will be used for a formal decision about a person, budget, procurement, or compliance matter.
- The data has contradictions that change the recommendation.
- The user asks to bypass review, remove audit trails, or hide uncertainty.
`;
