# Technical Spec: Task Tracker

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- SQLite for demo
- Zod for validation
- Server actions for mutations

## Architecture Rules

- Use server components for data fetching where possible.
- Use server actions for create, update, and delete operations.
- Do not access Prisma from client components.
- Keep validation schemas in `src/lib/validations`.
- Keep Prisma client setup in `src/lib/prisma.ts`.
- Keep server actions in `src/app/actions`.
- Keep reusable UI components in `src/components`.

## Project Task Search

- Scope is limited to `/projects/[id]`.
- Search field is rendered above the project task list.
- Query is stored in URL search params using `q`.
- Search is case-insensitive and matches task title only.
- Empty or missing `q` shows all project tasks.
- Refreshing the page keeps the filter because URL state is source of truth.
- Existing task create, status update, and delete flows must continue working with or without `q`.

## Data Models

### Project

Fields:

- id: string
- name: string
- description: string optional
- createdAt: DateTime
- updatedAt: DateTime
- tasks: Task[]

### Task

Fields:

- id: string
- title: string
- description: string optional
- status: TaskStatus
- priority: TaskPriority
- dueDate: DateTime optional
- projectId: string
- project: Project
- createdAt: DateTime
- updatedAt: DateTime

### TaskStatus

Values:

- TODO
- IN_PROGRESS
- DONE
- CANCELLED

### TaskPriority

Values:

- LOW
- MEDIUM
- HIGH

## Validation

### Create Project

- name is required
- name minimum length is 2
- name maximum length is 100
- description is optional
- description maximum length is 500

### Create Task

- title is required
- title minimum length is 2
- title maximum length is 150
- description is optional
- description maximum length is 1000
- status is required
- priority is required
- dueDate is optional

## Commands

The implementation should pass:

```bash
npm run lint
npm run build
```
