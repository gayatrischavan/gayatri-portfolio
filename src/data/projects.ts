import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "enterprise-erp-platform",
    name: "Enterprise ERP Platform",
    shortDescription: "Multi-service business management platform (sales, purchase, inventory, accounting reports).",
    description: "Multi-service business management platform (sales, purchase, inventory, accounting reports).",
    technologies: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "CQRS",
      "MediatR",
      "PostgreSQL",
      "RabbitMQ",
      "React",
      "TypeScript",
      "Material UI",
      "AG Grid",
    ],
    keyFeatures: [
      "Sales",
      "Purchase",
      "Inventory",
      "Reports",
      "Cross-Service Search",
      "Event-Driven Workflows",
    ],
    details: {
      overview: "A multi-service business management platform covering sales, purchasing, inventory and accounting reports, built with ASP.NET Core services and a React front end. I contributed full-stack features across several services as part of a team.",
      problem: "Inventory, sales and invoicing run as separate services, so they must stay consistent with each other. Dispatching goods and then invoicing them deducted stock twice, and deleting an invoice left stock and dispatch records out of sync.",
      solution: "Connected the services with events and guarded the invoice handlers so dispatch-backed invoices skip their own stock posting. Enforced one invoice per dispatch with a unique index plus a pre-check, and added stock-ledger reversals when an invoice is deleted.",
      architecture: [
        "React",
        "ASP.NET Core API",
        "Application Layer",
        "Domain Layer",
        "Infrastructure",
        "PostgreSQL"
      ],
      myContributions: [
        "Implemented an event-driven dispatch-to-invoice workflow across inventory and sales services: a one-invoice-per-dispatch constraint, a fix for double stock deduction, and compensating stock reversals on delete.",
        "Developed a search aggregator that merges data from two services and degrades gracefully when one is unavailable, with cached browse-mode search and tag-based cache invalidation.",
        "Built an accounting report in AG Grid with grouped debit/credit columns, plus template-driven PDF export generated server-side in ASP.NET Core.",
        "Resolved a concurrency bug where parallel notification handlers shared one EF Core DbContext.",
        "Implemented duplicate-email validation: a reusable React hook with API-call de-duplication, backed by endpoints in several services.",
        "Wrote xUnit/Moq unit tests for backend handlers (about 1,400 lines).",
      ],
      challengesAndSolutions: [
        "Challenge: Keeping inventory, sales and invoices consistent across services. Dispatching goods and then invoicing them deducted stock twice. Solution: Guarded the invoice handlers so dispatch-backed invoices skip their own stock posting, enforced one invoice per dispatch with a unique index and a pre-check, and added stock-ledger reversals when an invoice is deleted."
      ]
    }
  },
  {
    id: "ai-resume-screener",
    name: "AI Resume Screener",
    shortDescription: "AI-powered resume screening platform that matches resumes to job descriptions.",
    description: "AI-powered resume screening platform that matches resumes to job descriptions.",
    technologies: [
      ".NET",
      "React",
      "PostgreSQL",
      "Gemini API",
      "CQRS",
      "MediatR",
      "JWT",
    ],
    keyFeatures: [
      "Resume Upload",
      "Job Description Matching",
      "AI Match Scoring",
      "Strengths & Weaknesses",
    ],
    githubUrl: "https://github.com/gayatrischavan/AIResumeScreener",
    details: {
      overview: "A full-stack web application that screens resumes against job descriptions using Google's Gemini API. Recruiters upload a resume and a job description, and the system returns a match score, strengths, weaknesses, and a hiring recommendation — cutting down manual resume review time.",
      problem: "Manually comparing resumes against job requirements is slow and inconsistent, especially when screening many candidates for the same role.",
      solution: "Built a .NET 9 backend using Clean Architecture and CQRS (MediatR), which extracts text from uploaded PDF resumes, sends the resume and job description to the Gemini API for analysis, and stores structured results — score, strengths, weaknesses, recommendation — in PostgreSQL.",
      architecture: [
        "React (Vite + TS)",
        "ASP.NET Core Web API",
        "Application Layer (CQRS / MediatR / FluentValidation)",
        "Domain Layer",
        "Infrastructure (Gemini API client, iText PDF extraction)",
        "PostgreSQL"
      ],
      myContributions: [
        "Developed core backend APIs using ASP.NET Core and Clean Architecture.",
        "Implemented CQRS with MediatR, plus FluentValidation and logging pipeline behaviors.",
        "Integrated the Gemini API for AI-based resume-to-job matching and scoring.",
        "Implemented PDF text extraction (iText) and PostgreSQL storage via EF Core migrations.",
        "Added JWT authentication for user registration/login.",
        "Built the React frontend with Tailwind CSS, Zustand, React Hook Form, and Zod for resume upload, job management, and analysis results.",
        "Set up CI/CD with GitHub Actions and deployed to Render (API), Neon (database), and Vercel (frontend).",
      ],
      challengesAndSolutions: [
        "Challenge: Getting Gemini to return consistent, structured output (score, strengths, weaknesses, recommendation) suitable for display and storage, rather than free-form text. Solution: Designed a structured prompt and response-parsing layer in GeminiService, with error handling and logging for malformed or failed responses, and increased max output tokens to avoid truncated analyses."
      ]
    }
  }
];
