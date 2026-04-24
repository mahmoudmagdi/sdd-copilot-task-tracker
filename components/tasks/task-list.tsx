import { deleteTask } from "@/app/actions/task-actions";
import { TaskStatusSelect } from "@/components/tasks/task-status-select";

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

const priorityLabel: Record<string, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
};

const priorityColor: Record<string, string> = {
  LOW: "bg-blue-100 text-blue-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  HIGH: "bg-red-100 text-red-700",
};

function isOverdue(task: Task): boolean {
  if (!task.dueDate) return false;
  if (task.status === "DONE" || task.status === "CANCELLED") return false;
  return new Date(task.dueDate) < new Date();
}

export function TaskList({ tasks, projectId }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-sm text-zinc-500">No tasks yet. Add your first task above.</p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => {
        const overdue = isOverdue(task);
        const deleteWithId = deleteTask.bind(null, task.id, projectId);

        return (
          <li
            key={task.id}
            className={`rounded-lg border px-5 py-4 bg-white ${overdue ? "border-red-300" : "border-zinc-200"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-zinc-900">
                  {task.title}
                  {overdue && (
                    <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-600">
                      Overdue
                    </span>
                  )}
                </p>
                {task.description && (
                  <p className="text-sm text-zinc-500">{task.description}</p>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <span className={`rounded px-1.5 py-0.5 text-xs font-medium ${priorityColor[task.priority] ?? "bg-zinc-100 text-zinc-600"}`}>
                    {priorityLabel[task.priority] ?? task.priority}
                  </span>
                  {task.dueDate && (
                    <span className="text-xs text-zinc-400">
                      Due {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TaskStatusSelect
                  taskId={task.id}
                  projectId={projectId}
                  currentStatus={task.status}
                />
                <form action={deleteWithId}>
                  <button
                    type="submit"
                    className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
