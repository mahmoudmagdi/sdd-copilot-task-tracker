# Product Spec: Task Tracker

## Goal

Build a simple task tracking application using Next.js.

The app allows users to create projects and tasks, then track tasks by status and priority.

## Users

For this demo, there is only one user type:

- App user

Authentication is out of scope.

## Main Features

### Projects

The user can:

- View all projects
- Create a project
- Open project details

### Tasks

The user can:

- View tasks inside a project
- Create a task
- Change task status
- Delete a task

### Dashboard

The user can:

- View total projects
- View total tasks
- View Todo tasks
- View In Progress tasks
- View Done tasks
- View Overdue tasks

## Pages

### `/`

Redirects or links to `/dashboard`.

### `/dashboard`

Shows summary cards.

Required cards:

- Total Projects
- Total Tasks
- Todo Tasks
- In Progress Tasks
- Done Tasks
- Overdue Tasks

### `/projects`

Shows all projects.

User can create a new project from this page.

### `/projects/[id]`

Shows project details and task list.

User can:

- Add task
- Change task status
- Delete task

## Business Rules

- Project name is required.
- Task title is required.
- Task status must be one of:
  - TODO
  - IN_PROGRESS
  - DONE
  - CANCELLED
- Task priority must be one of:
  - LOW
  - MEDIUM
  - HIGH
- A task is overdue when:
  - dueDate is before today
  - status is not DONE
  - status is not CANCELLED

## Out of Scope

- Authentication
- User roles
- Notifications
- Email
- File upload
- Comments
- Teams
