
# Implementation Tasks

## Task 1: Database and Core Setup

Scope:

- Add Prisma models.

- Add Prisma enums.

- Add Prisma client helper.

- Add Zod validation schemas.

Files expected:

- `prisma/schema.prisma`

- `src/lib/prisma.ts`

- `src/lib/validations/project.ts`

- `src/lib/validations/task.ts`

Acceptance Criteria:

- Project model exists.

- Task model exists.

- TaskStatus enum exists.

- TaskPriority enum exists.

- Zod schemas exist.

- Prisma client helper exists.

- `npm run db:generate` passes.

## Task 2: Project List and Create Project

Scope:

- Create `/projects` page.

- Show all projects.

- Add create project form.

- Add server action for project creation.

Files expected:

- `src/app/projects/page.tsx`

- `src/app/actions/project-actions.ts`

- `src/components/projects/create-project-form.tsx`

- `src/components/projects/project-list.tsx`

Acceptance Criteria:

- User can view projects.

- User can create a project.

- Invalid project name shows validation error.

- User stays on `/projects` after creating a project.

- Project list refreshes after creation.

## Task 3: Project Details and Task Management

Scope:

- Create `/projects/[id]` page.

- Show project details.

- Show project tasks.

- Add create task form.

- Add update task status action.

- Add delete task action.

Files expected:

- `src/app/projects/[id]/page.tsx`

- `src/app/actions/task-actions.ts`

- `src/components/tasks/create-task-form.tsx`

- `src/components/tasks/task-list.tsx`

- `src/components/tasks/task-status-select.tsx`

Acceptance Criteria:

- User can open project details.

- User can create task.

- User can update task status.

- User can delete task.

- Task list refreshes after changes.

## Task 3.1: Task Search in Project Details

Scope:

- Add task title search on `/projects/[id]`.

- Add a search input above the task list.

- Persist active search in URL query `?q=`.

- Apply case-insensitive title filtering.

- Show all tasks when search is empty.

- Keep existing create, delete, and status update behaviors working.

Files expected:

- `src/app/projects/[id]/page.tsx`

- `src/components/tasks/task-list.tsx`

Acceptance Criteria:

- User can type a task title search query.

- Task list updates based on the query.

- URL contains `?q=value` when search is active.

- Clearing the search removes the filter.

- Refreshing the page keeps the same filtered result.

- Existing task actions still work.

## Task 4: Dashboard

Scope:

- Create `/dashboard`.

- Show summary cards.

- Update home page to link to dashboard and projects.

Files expected:

- `src/app/dashboard/page.tsx`

- `src/components/dashboard/summary-card.tsx`

- `src/app/page.tsx`

Acceptance Criteria:

- Dashboard shows total projects.

- Dashboard shows total tasks.

- Dashboard shows Todo tasks.

- Dashboard shows In Progress tasks.

- Dashboard shows Done tasks.

- Dashboard shows Overdue tasks.

- Home page links to dashboard and projects.

## Task 5: Final Verification

Scope:

- Review implementation against product spec.

- Run lint.

- Run build.

- Fix small issues only.

Acceptance Criteria:

- `npm run lint` passes.

- `npm run build` passes.

- All acceptance criteria from previous tasks are satisfied.

