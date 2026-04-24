import { prisma } from "@/lib/prisma";
import { SummaryCard } from "@/app/components/dashboard/summary-card";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const now = new Date();

  const [
    totalProjects,
    totalTasks,
    todoTasks,
    inProgressTasks,
    doneTasks,
    overdueTasks,
  ] = await Promise.all([
    prisma.project.count(),
    prisma.task.count(),
    prisma.task.count({ where: { status: "TODO" } }),
    prisma.task.count({ where: { status: "IN_PROGRESS" } }),
    prisma.task.count({ where: { status: "DONE" } }),
    prisma.task.count({
      where: {
        dueDate: { lt: now },
        status: { notIn: ["DONE", "CANCELLED"] },
      },
    }),
  ]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SummaryCard title="Total Projects" value={totalProjects} />
          <SummaryCard title="Total Tasks" value={totalTasks} />
          <SummaryCard title="Todo" value={todoTasks} />
          <SummaryCard title="In Progress" value={inProgressTasks} />
          <SummaryCard title="Done" value={doneTasks} />
          <SummaryCard title="Overdue" value={overdueTasks} />
        </div>
      </div>
    </main>
  );
}
