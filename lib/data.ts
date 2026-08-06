export const profile = {
  name: "Jesús",
  role: "Full Stack Developer",
  focus: "AI Agents, Automatización, Data",
  location: "Guadalajara, MX",
  email: "chuchuyito13@gmail.com",
  github: "Roger25954",
  githubUrl: "https://github.com/Roger25954",
  linkedinUrl: "",
};

export const aboutParagraphs = [
  "Estudio la Licenciatura en Inteligencia Artificial y Ciencia de Datos en el Centro Universitario de Guadalajara, con una base técnica previa en programación por CETis 14. Mi trabajo combina desarrollo full-stack con ingeniería de datos y agentes de IA aplicados a problemas reales.",
  "Actualmente mantengo Fiby Dog, un CRM/ERP de e-commerce en producción, y desarrollo herramientas propias como un asistente de código basado en LangGraph con recuperación aumentada (RAG).",
];

export const stackGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "MariaDB", "PostgreSQL"] },
  { label: "AI / Data", items: ["LangChain", "LangGraph", "Gemini", "ChromaDB", "Pandas"] },
  { label: "Infra", items: ["Docker", "Vercel", "Supabase", "CI/CD"] },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Fiby Dog",
    tag: "Producción",
    description: "CRM/ERP de e-commerce para una marca de productos para mascotas. Pagos con PayPal y MercadoPago, envíos con Skydropx, inventario multi-tienda.",
    stack: ["React", "TypeScript", "Node/Express", "MariaDB"],
  },
  {
    name: "Code Assistant",
    tag: "Extensión VS Code",
    description: "Agente ReAct con LangGraph, RAG sobre ChromaDB y búsqueda web con Tavily.",
    stack: ["LangGraph", "Groq", "ChromaDB", "pygls"],
  },
  {
    name: "CursosPro",
    tag: "SaaS",
    description: "Plataforma de venta de cursos con autenticación, pagos con Stripe y entrega de PDFs vía URLs firmadas.",
    stack: ["Next.js 15", "Supabase", "Stripe"],
  },
  {
    name: "Mind-Patch",
    tag: "Salud + IA",
    description: "Plataforma para detección de patrones de neurodivergencia, con LangChain y Gemini sobre Docker.",
    stack: ["Docker", "LangChain", "Gemini", "React"],
  },
];

export const education = [
  { date: "2024 — Presente", title: "Lic. en Inteligencia Artificial y Ciencia de Datos", place: "CUGDL" },
  { date: "2021 — 2024", title: "Técnico en Programación", place: "CETis 14" },
];