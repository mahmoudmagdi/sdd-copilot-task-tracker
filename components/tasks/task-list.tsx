"use client";

import { deleteTask } from "@/app/actions/task-actions";
import TaskStatusSelect from "./task-status-select";

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  dueDate: Date | null;
}

interface TaskListProps {
  tasks: Task[];
  projectId: string;
}

const PRIORITY_COLORS: Record<string, string> = {
  LOW: "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
  MEDIUM: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  HIGH: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export default function TaskList({ tasks, projectId }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        No tasks yet. Add your first task above.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <span className="font-medium">{task.title}</span>
              {task.description && (
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {task.description}
                </span>
              )}
            </div>
            <button
              onClick={async () => {
                if (!confirm("Delete this task?")) return;
                try {
                  await deleteTask(task.id, projectId);
                } catch {
                  alert("Failed to delete task. Please try again.");
                }
              }}
              className="shrink-0 rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
            >
              Delete
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <TaskStatusSelect
              taskId={task.id}
              projectId={projectId}
              currentStatus={task.status}
            />
            <span
              className={`rounded px-2 py-0.5 text-xs font-medium ${PRIORITY_COLORS[task.priority] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"}`}
            >
              {task.priority}
            </span>
            {task.dueDate && (
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
