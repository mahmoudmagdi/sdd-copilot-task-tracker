"use client";

import { useRef, useState } from "react";
import { createTask } from "@/app/actions/task-actions";

interface CreateTaskFormProps {
  projectId: string;
}

export default function CreateTaskForm({ projectId }: CreateTaskFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const result = await createTask(projectId, formData);

    if (result.error) {
      setErrors(result.error as Record<string, string[]>);
    } else {
      formRef.current?.reset();
    }

    setPending(false);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-medium">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="rounded border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
          placeholder="Task title"
        />
        {errors.title && (
          <p className="text-xs text-red-500">{errors.title[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          className="rounded border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
          placeholder="Optional description"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="status" className="text-sm font-medium">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            id="status"
            name="status"
            defaultValue="TODO"
            className="rounded border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
          >
            <option value="TODO">Todo</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="priority" className="text-sm font-medium">
            Priority <span className="text-red-500">*</span>
          </label>
          <select
            id="priority"
            name="priority"
            defaultValue="MEDIUM"
            className="rounded border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="dueDate" className="text-sm font-medium">
          Due Date
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          className="rounded border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {pending ? "Creating…" : "Create Task"}
      </button>
    </form>
  );
}
