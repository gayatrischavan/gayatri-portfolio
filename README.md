# Gayatri Chavan - Professional Developer Portfolio

A modern, fast, and responsive developer portfolio for Gayatri Chavan, a Full-Stack .NET Developer.

## Project Overview

This portfolio is built to showcase professional experience, technical skills, and featured projects in a clean, enterprise-inspired design. It includes a dynamic project detail view and supports both light and dark themes.

## Tech Stack

*   **Framework:** React 18
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Icons:** Lucide React
*   **Routing:** React Router DOM

## Features

*   **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
*   **Dark/Light Mode:** Integrated theme toggling.
*   **Dynamic Project Details:** Reusable routing for deep-dive project pages showing architecture, tech stack, and challenges.
*   **Performance Focused:** Built with Vite for fast HMR and optimized production builds.
*   **Clean Architecture:** Strict separation of data (skills, projects, experience) from UI components.

## Project Structure

```
src/
├── components/   # Reusable UI components (if needed)
├── data/         # Data files (projects, skills, experience, socialLinks)
├── pages/        # Page components (Home, ProjectDetail)
├── sections/     # Modular section components (Hero, About, Skills, etc.)
├── types/        # TypeScript interfaces
├── lib/          # Utilities (e.g., tailwind-merge)
├── App.tsx       # Main application layout and routing
├── main.tsx      # Entry point
└── index.css     # Global styles and Tailwind base
```

## Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

## Development Commands

*   Start the development server:
    ```bash
    npm run dev
    ```
*   Run linter:
    ```bash
    npm run lint
    ```
*   Run type checking (if script configured, or manually via `tsc`):
    ```bash
    npx tsc -b
    ```

## Build Commands

*   Create a production build:
    ```bash
    npm run build
    ```
*   Preview the production build:
    ```bash
    npm run preview
    ```

## Deployment Instructions

This project generates static files in the `dist` directory upon building. These files can be deployed to any static hosting service like GitHub Pages, Vercel, Netlify, or Azure Static Web Apps.

## Future Improvements

*   Implement a contact form backend using Serverless functions (e.g., Azure Functions or AWS Lambda).
*   Add E2E testing (e.g., Playwright or Cypress).
*   Add a blog section powered by a headless CMS or MDX.
