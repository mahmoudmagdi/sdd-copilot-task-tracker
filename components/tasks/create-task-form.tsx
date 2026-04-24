"use client";

import { useActionState } from "react";
import { createTask } from "@/app/actions/task-actions";

type State = { error?: string; success?: boolean } | null;

interface CreateTaskFormProps {
  projectId: string;
}

export function CreateTaskForm({ projectId }: CreateTaskFormProps) {
  const boundAction = createTask.bind(null, projectId);
  const [state, formAction, isPending] = useActionState<State, FormData>(
    boundAction,
    null
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-medium text-zinc-700">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          maxLength={150}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="Task title"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="task-description" className="text-sm font-medium text-zinc-700">
          Description
        </label>
        <textarea
          id="task-description"
          name="description"
          maxLength={1000}
          rows={2}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="Optional description"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="status" className="text-sm font-medium text-zinc-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue="TODO"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
            <option value="TODO">Todo</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="priority" className="text-sm font-medium text-zinc-700">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            defaultValue="MEDIUM"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="dueDate" className="text-sm font-medium text-zinc-700">
          Due Date
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
      </div>
      {state?.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:opacity-50"
      >
        {isPending ? "Creating…" : "Add Task"}
      </button>
    </form>
  );
}
