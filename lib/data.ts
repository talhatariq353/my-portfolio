import { RESUME_HREF } from "./asset";

export const profile = {
  name: "Talha Tariq",
  tagline: "Implementation that moves the number.",
  intro:
    "Co-founder, builder, and post-sales operator. Seven years driving enterprise implementation across fintech and ERP, plus two ventures of my own. One of them reaching a million students.",
  location: "Sunnyvale, CA",
  email: "talhat@umd.edu",
  phone: "(240) 432-8284",
  linkedin: "https://www.linkedin.com/in/talha-tariq/",
  calendly: "https://calendly.com/talha-tariq/intro",
};

// =======================================================
// Hero slider - three slides, one per pillar.
// Order: Founder → Builder → Operator (per spec).
// =======================================================
/**
 * Headline parts let us paint each chunk with its own color.
 * tone: "ink" | "blue" | "red"
 */
export type HeadlinePart = {
  text: string;
  tone?: "ink" | "blue" | "red";
};

export type HeroSlide = {
  index: string;
  label: string;
  emoji: string;
  eyebrow: string;
  headline: HeadlinePart[];
  subtitle: HeadlinePart[];
  stats: { value: string; label: string; tone: "blue" | "red" | "ink" }[];
  primaryCta: { label: string; href: string; tone: "red" | "blue" };
  secondaryCta: { label: string; href: string; tone: "red" | "blue" };
};

export const heroSlides: HeroSlide[] = [
  {
    index: "01",
    label: "Founder",
    emoji: "👋",
    eyebrow: "Hi there, I'm Talha",
    headline: [
      { text: "Founder. ", tone: "ink" },
      { text: "Operator. ", tone: "blue" },
      { text: "Builder.", tone: "red" },
    ],
    subtitle: [
      { text: "Built ", tone: "ink" },
      { text: "2 startups", tone: "red" },
      { text: ". Founding hire at a ", tone: "ink" },
      { text: "fintech lender", tone: "blue" },
      { text: ". 1M+ students reached, $20M in loans driven, 95% retention.", tone: "ink" },
    ],
    stats: [
      { value: "1M+", label: "students reached · SOOP", tone: "blue" },
      { value: "470+", label: "institutions live · SOOP", tone: "ink" },
      { value: "94%", label: "retention rate · SOOP", tone: "red" },
    ],
    primaryCta: { label: "Book a 20-min intro", href: "https://calendly.com/talha-tariq/intro", tone: "red" },
    secondaryCta: { label: "View My Resume", href: RESUME_HREF, tone: "blue" },
  },
  {
    index: "02",
    label: "Builder",
    emoji: "🛠",
    eyebrow: "I ship the code too",
    headline: [
      { text: "Code that ", tone: "ink" },
      { text: "ships", tone: "blue" },
      { text: ", not ", tone: "ink" },
      { text: "stalls.", tone: "red" },
    ],
    subtitle: [
      { text: "LLM agents in production. ML pipelines that actually deploy. ", tone: "ink" },
      { text: "Parchay", tone: "red" },
      { text: ", ", tone: "ink" },
      { text: "1,500+ downloads", tone: "blue" },
      { text: ", purely organic. ", tone: "ink" },
      { text: "Walmart ML capstone, ", tone: "ink" },
      { text: "96% forecast accuracy.", tone: "blue" },
    ],
    stats: [
      { value: "1.5K+", label: "Parchay downloads · organic", tone: "blue" },
      { value: "96%", label: "Walmart ML accuracy", tone: "red" },
      { value: "In prod", label: "LLM agents · Donut AI", tone: "ink" },
    ],
    primaryCta: { label: "See the Builds", href: "/projects", tone: "red" },
    secondaryCta: { label: "View My Resume", href: RESUME_HREF, tone: "blue" },
  },
  {
    index: "03",
    label: "Operator",
    emoji: "📈",
    eyebrow: "And I move the number",
    headline: [
      { text: "Implementation that ", tone: "ink" },
      { text: "moves", tone: "blue" },
      { text: " the ", tone: "ink" },
      { text: "number.", tone: "red" },
    ],
    subtitle: [
      { text: "Seven years. ", tone: "ink" },
      { text: "40+ enterprise rollouts", tone: "blue" },
      { text: ". ", tone: "ink" },
      { text: "$20M in loan volume", tone: "red" },
      { text: ". 95% client retention. I run post-sales like the product depends on it, because it does.", tone: "ink" },
    ],
    stats: [
      { value: "$20M", label: "loan volume · AdalFi", tone: "red" },
      { value: "40+", label: "enterprise rollouts", tone: "blue" },
      { value: "95%", label: "client retention", tone: "ink" },
    ],
    primaryCta: { label: "See the Experience", href: "/experience", tone: "red" },
    secondaryCta: { label: "View My Resume", href: RESUME_HREF, tone: "blue" },
  },
];

// =======================================================
// Pillars (kept as a compact strip - same data, used as
// scan-friendly summary below the slider for recruiters
// who don't sit through the auto-advance).
// =======================================================
export type Pillar = {
  label: string;
  tagline: string;
  receipts: string[];
};

export const pillars: Pillar[] = [
  {
    label: "Founder",
    tagline:
      "Co-founded SOOP (1M+ students). Founded Parchay. Founded the post-sales function at AdalFi.",
    receipts: [
      "0 → 470+ institutions · SOOP",
      "1M+ students reached · SOOP",
      "94% retention rate · SOOP",
      "Founder · Parchay · 1.5K+ downloads organic",
    ],
  },
  {
    label: "Builder",
    tagline:
      "Writes the code so the customer never bottlenecks on engineering.",
    receipts: [
      "Parchay · 1.5K+ downloads, all organic",
      "Donut AI · LLM agent in production",
      "Walmart ML · 96% forecast accuracy",
      "Python · SQL · n8n · OpenAI · scikit-learn",
    ],
  },
  {
    label: "Operator",
    tagline:
      "Seven years running implementation and post-sales for fintech and enterprise ERP.",
    receipts: [
      "$20M in loan volume · AdalFi",
      "40+ enterprise rollouts",
      "$3.2M ARR contribution · Techlogix",
      "95% client retention",
    ],
  },
];

// =======================================================
// Timeline - grouped where the same company spans multiple
// roles. Techlogix gets a `progression` array of nested
// titles instead of three separate entries.
// =======================================================
export type TimelineProgression = {
  title: string;
  period: string;
  headline: string;
};

export type TimelineEntry = {
  year: string;
  span: string;
  org: string;
  role: string;
  location: string;
  headline: string;
  kind: "work" | "edu" | "venture";
  progression?: TimelineProgression[];
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024–25",
    span: "Aug 2024 → Dec 2025",
    org: "University of Maryland",
    role: "M.S. Business Analytics · Robert H. Smith School of Business",
    location: "College Park, MD",
    headline: "Terrapin Scholar · 3.94 CGPA",
    kind: "edu",
  },
  {
    year: "2023–24",
    span: "Apr 2023 → Jul 2024",
    org: "AdalFi",
    role: "Founding Post Sales Manager",
    location: "Lahore, Pakistan",
    headline:
      "Built the post-sales function from zero. $20M in loan volume across 8 banks.",
    kind: "work",
  },
  {
    year: "2018–23",
    span: "Mar 2018 → Mar 2023",
    org: "Techlogix",
    role: "Campus on Cloud ERP · three-rung climb",
    location: "Boston, USA",
    headline:
      "Consultant → Senior → Manager. 26 institutions deployed · $3.2M ARR · 95% retention.",
    kind: "work",
    progression: [
      {
        title: "Implementation Manager",
        period: "Jul 2021 → Mar 2023",
        headline:
          "Deployed Campus on Cloud to 26 institutions · $3.2M ARR · 22 of 50 demos closed.",
      },
      {
        title: "Senior Implementation Consultant",
        period: "Jun 2019 → Jun 2021",
        headline:
          "95% retention · 30% faster reporting · 3 weeks shaved from every go-live.",
      },
      {
        title: "Implementation Consultant",
        period: "Mar 2018 → May 2019",
        headline:
          "16 features shipped · 30+ client workshops · 35% adoption lift.",
      },
    ],
  },
  {
    year: "2018–22",
    span: "2018 → 2022 · concurrent venture",
    org: "SOOP",
    role: "Co-founder & COO",
    location: "Remote",
    headline:
      "Co-founded. 0 → 470+ institutions · 1M+ students · 94% retention rate.",
    kind: "venture",
  },
  {
    year: "2013–17",
    span: "Aug 2013 → May 2017",
    org: "Lahore University of Management Sciences",
    role: "B.S. Electrical Engineering",
    location: "Lahore, Pakistan",
    headline: "",
    kind: "edu",
  },
];

// =======================================================
// Experience - also grouped where the company spans
// multiple roles. Techlogix is one card with three rungs.
// =======================================================
export type ExperienceRung = {
  title: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
};

export type ExperienceRole = {
  company: string;
  product: string;
  title: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
  stack?: string[];
  badge?: string;
  progression?: ExperienceRung[];
};

export const experience: ExperienceRole[] = [
  {
    company: "AdalFi",
    product: "Digital Lending Infrastructure",
    title: "Founding Post Sales Manager",
    location: "Lahore, Pakistan",
    start: "Apr 2023",
    end: "Jul 2024",
    summary:
      "Built the post-sales function from zero. Playbooks, tooling, retention loops, the works. Ran the motion for a lending platform powering 8 banks; made onboarding feel like a product, not a project.",
    bullets: [
      "Founded and led the post-sales team for a lending platform across 8 banks, driving $20M in loan volume.",
      "Owned the post-onboarding client success motion, resolving activation blockers that drove 25% improvement in borrower retention.",
      "Automated client onboarding workflows using n8n, HubSpot and Slack, cutting onboarding time by 40%.",
    ],
    metrics: [
      { value: "$20M", label: "loan volume" },
      { value: "8", label: "banks live" },
      { value: "25%", label: "retention lift" },
      { value: "40%", label: "faster onboarding" },
    ],
    stack: ["n8n", "HubSpot", "Slack", "Postman", "BigQuery"],
    badge: "Founding hire",
  },
  {
    company: "Techlogix",
    product: "Campus on Cloud ERP",
    title: "Implementation Manager",
    location: "Boston, USA",
    start: "Mar 2018",
    end: "Mar 2023",
    summary:
      "Five years on Campus on Cloud. Joined as Consultant, climbed to Senior, ended as Manager owning the full enterprise rollout end-to-end. ETL, demos, training, the boring spreadsheets that decide whether a $3M deal lands.",
    bullets: [],
    metrics: [
      { value: "26", label: "institutions deployed" },
      { value: "$3.2M", label: "ARR contribution" },
      { value: "95%", label: "client retention" },
      { value: "55%", label: "fewer data issues" },
    ],
    stack: ["SQL", "Power BI", "Postman", "Jira", "Tableau", "Excel"],
    progression: [
      {
        title: "Implementation Manager",
        start: "Jul 2021",
        end: "Mar 2023",
        summary:
          "Promoted to own the enterprise rollout end-to-end. Sales handoff through go-live through revenue recognition.",
        bullets: [
          "Deployed Campus on Cloud to 26 enterprise institutions, contributing to $3.2M in ARR.",
          "Built ETL workflows for data migration, cutting post-implementation data issues by 55%.",
          "Owned pre-sales demos for 50+ prospects, converting 22 into full enterprise contracts.",
        ],
        metrics: [
          { value: "26", label: "institutions" },
          { value: "$3.2M", label: "ARR" },
          { value: "44%", label: "demo→close" },
        ],
      },
      {
        title: "Senior Implementation Consultant",
        start: "Jun 2019",
        end: "Jun 2021",
        summary:
          "Owned the post-sales heartbeat. Bi-weekly client reviews, financial dashboards leadership read, and the automation that killed pre-go-live grind.",
        bullets: [
          "Built Power BI dashboards to track financial KPIs, reducing reporting time by 30%.",
          "Led bi-weekly meetings with clients, identifying risks early and maintaining 95% retention.",
          "Eliminated 3 weeks of pre-go-live work by automating data validation and client data mapping across implementations.",
        ],
        metrics: [
          { value: "95%", label: "retention" },
          { value: "30%", label: "faster reporting" },
          { value: "3 wks", label: "saved/go-live" },
        ],
      },
      {
        title: "Implementation Consultant",
        start: "Mar 2018",
        end: "May 2019",
        summary:
          "First rung. Sitting with users, writing user stories, turning feature requests into shipped product.",
        bullets: [
          "Rolled out 16 client-requested features and led end-user training sessions, driving platform adoption by 35%.",
          "Led workshops with 30+ clients translating business processes into user stories and actionable development tasks.",
        ],
        metrics: [
          { value: "16", label: "features shipped" },
          { value: "30+", label: "client workshops" },
          { value: "35%", label: "adoption lift" },
        ],
      },
    ],
  },
  {
    company: "SOOP",
    product: "EdTech Platform · Concurrent venture (2018 → 2022)",
    title: "Co-founder & COO",
    location: "Remote",
    start: "2018",
    end: "2022",
    summary:
      "Co-founded SOOP. Ran ops and the customer motion for four years, scaling from zero to 470+ institutions and a million students. Concurrent with the Techlogix run; ops by day, building by night.",
    bullets: [
      "Co-founded the company and built the operating playbook: finance, hiring, weekly metrics review.",
      "Scaled from 0 to 470+ institutions on the platform; over 1M students used SOOP.",
      "Drove the GTM motion: institutional prospecting, onboarding, and the retention loops that kept us at a 94% retention rate.",
      "Owned the customer success function as the company crossed early growth milestones.",
    ],
    metrics: [
      { value: "0→470+", label: "institutions live" },
      { value: "1M+", label: "students reached" },
      { value: "94%", label: "retention rate" },
      { value: "4 yrs", label: "as co-founder" },
    ],
    stack: ["HubSpot", "n8n", "Notion", "BigQuery"],
    badge: "Venture · Co-founder",
  },
];

// =======================================================
// Projects - ventures up top, side builds below.
// =======================================================
export type Project = {
  index: string;
  name: string;
  tag: string;
  badge: string;
  blurb: string;
  detail: string;
  role: string;
  stack: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    name: "SOOP",
    tag: "Venture · EdTech · 2018 → 2022",
    badge: "Co-founder & COO",
    blurb:
      "Co-founded. Scaled to 470+ institutions and 1M+ students at a 94% retention rate.",
    detail:
      "An edtech platform I co-founded in 2018 and ran as COO for four years. Owned operations, GTM, and the customer motion. The numbers (0 → 470+ institutions, 1M+ students, 94% retention) are what four years of relentless ops + customer obsession produce.",
    role: "Co-founder & COO. Operations, GTM, customer motion.",
    stack: ["HubSpot", "n8n", "Notion", "BigQuery"],
    outcomes: [
      "0 → 470+ institutions live on the platform.",
      "1M+ students reached.",
      "94% retention rate across institutional customers.",
    ],
  },
  {
    index: "02",
    name: "Parchay",
    tag: "Venture · AI Exam Prep",
    badge: "Founder",
    blurb:
      "Founded. AI-powered exam prep with 1,500+ downloads, all organic, zero paid acquisition.",
    detail:
      "An LLM-powered exam prep app I founded. Generates contextual quiz questions on demand and ships them to high school students across Pakistan. Built for low-bandwidth realities, mobile-first, and curriculum-specific accuracy. 1,500+ downloads, all organic.",
    role: "Founder. Product, technical lead, deployment.",
    stack: ["OpenAI API", "Python", "MongoDB", "n8n"],
    outcomes: [
      "1,500+ downloads, all organic. Zero paid acquisition.",
      "Shipped to high school students across Pakistan.",
      "Generates curriculum-aligned questions in real time, low-bandwidth ready.",
    ],
  },
  {
    index: "03",
    name: "Donut AI",
    tag: "Side build · LLM Agent",
    badge: "Solo build",
    blurb: "Turns a plain-language SOP into a deployable n8n workflow.",
    detail:
      "An LLM agent that reads a standard operating procedure, identifies the right tools and API surface, researches the integrations, and ships back a fully-formed n8n workflow JSON ready to deploy. Built to collapse the gap between 'we have a process' and 'we have automation.'",
    role: "Solo build. Agent design, tool selection, evaluation harness.",
    stack: ["OpenAI API", "Claude Code", "n8n", "RAGAS", "Python", "Postman"],
    outcomes: [
      "Compresses days of automation engineering into a single SOP paste.",
      "Evaluation harness with RAGAS for tool-selection accuracy.",
      "Generates production-ready workflow JSON, not just code snippets.",
    ],
  },
  {
    index: "04",
    name: "Supply Chain Forecasting · Walmart",
    tag: "UMD Capstone · ML",
    badge: "Capstone",
    blurb: "Daily inbound shipment forecasting at store-level granularity.",
    detail:
      "Applied machine learning to store-level delivery and truck logistics data to forecast daily inbound shipments. The capstone behind the M.S. ETL through model selection through validation, with a delivered notebook the Walmart team could re-run.",
    role: "Team lead. Data pipeline, feature engineering, model selection.",
    stack: ["Python", "scikit-learn", "Pandas", "Apache Flink", "Airflow"],
    outcomes: [
      "96% forecast accuracy on out-of-sample data.",
      "Handed off as a reproducible notebook + feature pipeline.",
      "Capstone result delivered to Walmart logistics stakeholders.",
    ],
  },
];

export const education = [
  {
    school: "University of Maryland",
    college: "Robert H. Smith School of Business",
    degree: "M.S. Business Analytics",
    period: "Aug 2024 → Dec 2025",
    honors: ["Terrapin Scholar", "CGPA 3.94 / 4.00"],
    coursework: [
      "Machine Learning",
      "Data Mining & Predictive Analytics",
      "Big Data & AI for Business",
      "Optimization for Decision Making",
      "Database Management",
      "Decision Analytics",
    ],
    note: "Capstone with Walmart: store-level supply chain forecasting, 96% accuracy.",
  },
  {
    school: "Lahore University of Management Sciences",
    college: "School of Science & Engineering",
    degree: "B.S. Electrical Engineering",
    period: "Aug 2013 → May 2017",
    honors: [],
    coursework: [
      "Signals & Systems",
      "Probability & Random Variables",
      "Linear Algebra",
      "Embedded Systems",
      "Communication Systems",
    ],
    note: "The engineering foundation. Signal processing, probability, embedded systems. Set the stage for everything that came after.",
  },
];

export const skills = {
  tools: [
    "HubSpot",
    "Tableau",
    "Power BI",
    "Postman",
    "BigQuery",
    "n8n",
    "Gumloop",
    "Zapier",
    "Jira",
    "Claude Code",
    "OpenAI API",
    "RAGAS",
  ],
  languages: [
    "Python",
    "R",
    "SQL",
    "Pandas",
    "scikit-learn",
    "MongoDB",
    "Apache Flink",
    "Airflow",
  ],
};
