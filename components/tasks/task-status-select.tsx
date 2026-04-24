"use client";

import { updateTaskStatus } from "@/app/actions/task-actions";

interface TaskStatusSelectProps {
  taskId: string;
  projectId: string;
  currentStatus: string;
}

export function TaskStatusSelect({ taskId, projectId, currentStatus }: TaskStatusSelectProps) {
  const boundAction = updateTaskStatus.bind(null, taskId, projectId);

  return (
    <form action={boundAction}>
      <select
        name="status"
        defaultValue={currentStatus}
        onChange={(e) => {
          const form = e.currentTarget.form;
          if (form) form.requestSubmit();
        }}
        className="rounded border border-zinc-300 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-zinc-500"
      >
        <option value="TODO">Todo</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
        <option value="CANCELLED">Cancelled</option>
      </select>
    </form>
  );
}
