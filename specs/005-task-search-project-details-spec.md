# Feature Spec: Task Search in Project Details

## Feature

Add task search inside the project details page.

## Goal

Users should be able to search tasks by title inside `/projects/[id]`.

## In Scope

- Add a search input above the task list on `/projects/[id]`.
- Search tasks by title.
- Store the active search query in URL as `?q=`.
- Preserve search state on page refresh via URL.
- Empty search shows all tasks.
- Search is case-insensitive.
- Existing create task, delete task, and update status behavior continues working.

## Out of Scope

- Global search.
- Search across all projects.
- Search by description.
- Authentication.
- New database models.
- New external packages.

## Functional Requirements

1. The project details page includes a task search input directly above the task list.
2. When the user enters a query, tasks are filtered by `title`.
3. Filtering is case-insensitive.
4. The active query is represented in the URL as `q`.
5. If `q` is missing or empty, all tasks are shown.
6. Refreshing the page keeps the same filtered results when `q` is present.
7. Task create, delete, and status update actions continue to work with and without active `q`.

## Acceptance Criteria

- User can type a task title search query.
- Task list updates based on the query.
- URL contains `?q=value` when search is active.
- Clearing the search removes the filter.
- Refreshing the page keeps the same filtered result.
- Existing task actions still work.
- `npm run lint` passes.
- `npm run build` passes.

## Notes

- Implement using existing stack and project conventions.
- Keep the change focused to this feature only.

