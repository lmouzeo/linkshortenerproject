# Agent Instructions for Link Shortener Project

This file serves as the main entry point for AI agents working on this project. All coding standards, conventions, and best practices are documented in the `./docs` directory.

> [!IMPORTANT]
> **MANDATORY: Read the relevant `./docs/*.md` file(s) BEFORE generating ANY code.**
> This is not optional. Before writing, editing, or suggesting a single line of code, you MUST identify which documentation file(s) in `./docs` apply to the task and read them in full first. Skipping this step is a critical process failure, even if you believe you already know the convention. If no doc file clearly applies, say so explicitly before proceeding.

## Project Overview

This is a Next.js-based link shortener application with the following key technologies:
- **Next.js 16.3.3** with App Router
- **React 19.2.8**
- **TypeScript** (strict mode)
- **Clerk** for authentication
- **Drizzle ORM** with Neon PostgreSQL
- **Tailwind CSS 4** for styling
- **shadcn/ui** for UI components

## Agent Instruction Files

Please refer to the following documentation files in the `./docs` directory for specific coding standards.
ALWAYS refer to the relevant .md file(s) BEFORE generating any code — read them first, then write code:

- [docs/authentication.md](./docs/authentication.md) - Clerk authentication rules (protected routes, modal sign-in/sign-up, redirects). Read BEFORE touching auth, middleware, sign-in/sign-up, or any protected route.
- [docs/ui-components.md](./docs/ui-components.md) - shadcn/ui component rules (no custom UI components). Read BEFORE creating or editing any UI component or `.tsx` markup.

If a task touches more than one area (e.g. an authenticated page with UI components), read ALL applicable files before writing code — not just one.

## Quick Reference

### Path Aliases
- Use `@/` for imports from the project root
- Example: `import { db } from '@/db'`

### Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npx drizzle-kit push` - Push database schema changes
- `npx drizzle-kit studio` - Open Drizzle Studio

### Environment Variables
Required in `.env.local`:
- `DATABASE_URL` - Neon PostgreSQL connection string
- Clerk authentication keys (from Clerk dashboard)

## Before Making Changes

1. **Read the relevant `./docs/*.md` standards documents first — before generating any code.** This step is required for every change, no exceptions.
2. Ensure TypeScript strict mode compliance
3. Follow the established file structure
4. Use existing components and utilities where possible
5. Test authentication flows if modifying protected routes

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
