"use client";

import { updateTaskStatus } from "@/app/actions/task-actions";

const STATUS_OPTIONS = [
  { value: "TODO", label: "Todo" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "DONE", label: "Done" },
  { value: "CANCELLED", label: "Cancelled" },
] as const;

interface TaskStatusSelectProps {
  taskId: string;
  projectId: string;
  currentStatus: string;
}

export default function TaskStatusSelect({
  taskId,
  projectId,
  currentStatus,
}: TaskStatusSelectProps) {
  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const result = await updateTaskStatus(taskId, projectId, e.target.value);
    if (result.error) {
      alert("Failed to update status. Please try again.");
    }
  }

  return (
    <select
      defaultValue={currentStatus}
      onChange={handleChange}
      className="rounded border border-zinc-300 px-2 py-1 text-sm dark:border-zinc-600 dark:bg-zinc-800"
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
