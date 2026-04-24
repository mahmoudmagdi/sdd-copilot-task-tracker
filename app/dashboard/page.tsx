import { prisma } from "@/lib/prisma";
import { SummaryCard } from "@/components/dashboard/summary-card";

export default async function DashboardPage() {
  const [totalProjects, totalTasks, todoTasks, inProgressTasks, doneTasks] =
    await Promise.all([
      prisma.project.count(),
      prisma.task.count(),
      prisma.task.count({ where: { status: "TODO" } }),
      prisma.task.count({ where: { status: "IN_PROGRESS" } }),
      prisma.task.count({ where: { status: "DONE" } }),
    ]);

  const now = new Date();
  const overdueTasks = await prisma.task.count({
    where: {
      dueDate: { lt: now },
      status: { notIn: ["DONE", "CANCELLED"] },
    },
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-zinc-900">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <SummaryCard label="Total Projects" value={totalProjects} />
        <SummaryCard label="Total Tasks" value={totalTasks} />
        <SummaryCard label="Todo" value={todoTasks} />
        <SummaryCard label="In Progress" value={inProgressTasks} />
        <SummaryCard label="Done" value={doneTasks} />
        <SummaryCard label="Overdue" value={overdueTasks} />
      </div>
    </div>
  );
}
