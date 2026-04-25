# GitHub Copilot Instructions

This repository is a demo for spec-driven development using GitHub Copilot.

## Project Type

This is a Next.js task tracking application.

## Core Rules

- Follow the specs inside the `/specs` directory.
- Do not implement features that are not included in the active GitHub issue or spec.
- Prefer small, focused, reviewable changes.
- Do not refactor unrelated code.
- Do not introduce new dependencies unless clearly justified.
- Do not add secrets, tokens, credentials, private URLs, or environment-specific corporate data.
- Do not change authentication or authorization because authentication is out of scope for this demo.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- SQLite
- Zod
- Server actions

## Architecture Rules

- Use server components for data fetching where practical.
- Use server actions for create, update, and delete operations.
- Do not access Prisma from client components.
- Put Prisma client setup in `src/lib/prisma.ts`.
- Put validation schemas in `src/lib/validations`.
- Put server actions in `src/app/actions`.
- Put reusable UI components in `src/components`.

## Validation Rules

Before completing a task, check:

- The implementation matches the relevant spec.
- The implementation satisfies the issue acceptance criteria.
- `npm run lint` passes.
- `npm run build` passes, when possible.

## Pull Request Rules

Every PR should include:

- Summary of changes
- Files changed
- Validation performed
- Known limitations or assumptions
- Confirmation that the implementation follows the relevant spec

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
<!-- SPECKIT END -->
