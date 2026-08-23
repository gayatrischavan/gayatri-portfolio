import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "dhanman-erp",
    name: "Dhanman ERP",
    shortDescription: "Enterprise ERP/business management application.",
    description: "Enterprise ERP/business management application.",
    technologies: [
      ".NET",
      "React",
      "PostgreSQL",
      "Entity Framework Core",
      "CQRS",
      "MediatR",
      "RabbitMQ",
      "Docker",
      "Auth0",
    ],
    keyFeatures: [
      "Sales",
      "Purchase",
      "Inventory",
      "Billing",
      "Reports",
      "Product Management",
      "Gate Pass",
      "Financial Management",
    ],
    details: {
      overview: "A comprehensive Enterprise Resource Planning (ERP) application designed to streamline and manage core business processes, including sales, purchasing, inventory, and financial management.",
      problem: "The client needed a unified, scalable system to replace fragmented tools and improve data visibility across various departments.",
      solution: "Developed a modern, modular ERP system utilizing a microservices-inspired architecture with Clean Architecture principles, ensuring scalability and maintainability.",
      architecture: [
        "React",
        "ASP.NET Core API",
        "Application Layer",
        "Domain Layer",
        "Infrastructure",
        "PostgreSQL"
      ],
      myContributions: [
        "Developed core backend APIs using ASP.NET Core and Clean Architecture.",
        "Implemented CQRS pattern with MediatR for scalable business logic.",
        "Integrated Auth0 for secure authentication and authorization.",
        "Built responsive frontend components using React.",
      ],
      challengesAndSolutions: [
        "Challenge: Handling complex data relationships in inventory and financial modules. Solution: Utilized Entity Framework Core with optimized queries and proper domain modeling to ensure performance and data integrity."
      ]
    }
  },
  {
    id: "tpo-portal",
    name: "TPO Portal",
    shortDescription: "Portal for Training and Placement Officers.",
    description: "Portal for Training and Placement Officers.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Web API",
      "SQL Server"
    ],
    keyFeatures: [
      "Student Management",
      "Placement Drive Tracking",
      "Company Management"
    ]
  }
];
